import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    is_dev = os.environ.get('NODE_ENV') == 'development'

    return render_template('index.html' if not is_dev else 'index.dev.html')

if __name__ == '__main__':
    app.run()
