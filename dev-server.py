#!/usr/bin/env python3
"""Local dev server that mirrors GitHub Pages URL handling.

VS Code Live Server and `python -m http.server` serve files literally, so the
site's extensionless links (./solutions, ./resources/the-connected-pathway)
404 locally even though they work in production. This resolves /solutions to
solutions.html the way GitHub Pages does, and serves page-not-found.html on a
genuine miss.

    python3 dev-server.py [port]        # default 5505
"""
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        fs_path = super().translate_path(path)
        # /solutions -> solutions.html
        if not os.path.isfile(fs_path) and os.path.isfile(fs_path + ".html"):
            return fs_path + ".html"
        # /resources -> resources.html, even though a resources/ directory exists
        if os.path.isdir(fs_path):
            bare = fs_path.rstrip(os.sep)
            if not os.path.isfile(os.path.join(fs_path, "index.html")) and os.path.isfile(bare + ".html"):
                return bare + ".html"
        return fs_path

    def send_error(self, code, message=None, explain=None):
        not_found = os.path.join(ROOT, "page-not-found.html")
        if code == 404 and os.path.isfile(not_found):
            body = open(not_found, encoding="utf-8").read().encode("utf-8")
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(body)
            return
        super().send_error(code, message, explain)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5505
    os.chdir(ROOT)
    print(f"Serving {ROOT} with clean URLs at http://127.0.0.1:{port}/")
    http.server.test(HandlerClass=Handler, port=port, bind="127.0.0.1")
