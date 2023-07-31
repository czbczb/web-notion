from flask import Flask, request, Response, stream_with_context
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)  # 允许所有来源跨域访问

@app.route("/demo", methods=["POST"])
def send_demo():
    def generate():
        with open("demo.txt", "r") as f:
            for line in f:
                words = line.split()
                for word in words:
                    yield word + ' '
                    time.sleep(0.1)
    
    return Response(stream_with_context(generate()), mimetype="text/plain")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3035)