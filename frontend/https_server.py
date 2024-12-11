import http.server
import socketserver
import ssl
from urllib.parse import urlparse

# Configurações do servidor
PORT = 8080  # Porta em que o servidor vai rodar

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urlparse(self.path).path

        file = "index.html" if path == "/" else path + ".html"
        self.path = "public/" + file

        return http.server.SimpleHTTPRequestHandler.do_GET(self)


# Inicia o servidor usando ThreadingTCPServer
with socketserver.ThreadingTCPServer(("", PORT), MyHttpRequestHandler) as httpd:
    # Configuração do SSL
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain(certfile="server.crt", keyfile="server.key")

    # Envolvendo o socket do servidor com SSL usando SSLContext
    httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

    print(f"Servidor HTTPS iniciado na porta {PORT}. Acesse https://localhost:{PORT}")
    httpd.serve_forever()
