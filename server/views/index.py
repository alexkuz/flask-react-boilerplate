# -*- coding: utf-8 -*-
import os
from flask import render_template, Blueprint

index_view = Blueprint('index', __name__)

@index_view.route('/')
def index():
    is_dev = os.environ.get('NODE_ENV') == 'development'

    return render_template('index.html' if not is_dev else 'index.dev.html')
