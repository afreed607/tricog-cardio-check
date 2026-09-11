#!/usr/bin/env python3
"""Local dev server for the CardioCheck site.

Every page is a directory with an index.html, so clean URLs like /solutions
work under any static server. This adds one thing on top of the stdlib server:
serving 404.html on a miss, the way GitHub Pages does.

    python3 dev-server.py [port]        # default 5505
"""
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        not_found = os.path.join(ROOT, "404.html")
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
    print(f"Serving {ROOT} at http://127.0.0.1:{port}/")
    http.server.test(HandlerClass=Handler, port=port, bind="127.0.0.1")
