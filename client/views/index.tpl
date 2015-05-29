<!DOCTYPE html>
<html{% if(o.htmlWebpackPlugin.files.manifest) { %} manifest="{%= o.htmlWebpackPlugin.files.manifest %}"{% } %}>
  <head>
    <meta charset="UTF-8">
    <title>{%=o.htmlWebpackPlugin.options.title || 'Flask React Boilerplate'%}</title>
    {% if (o.htmlWebpackPlugin.files.favicon) { %}
    <link rel="shortcut icon" href="{%=o.htmlWebpackPlugin.files.favicon%}">
    {% } %}
    {% for (var css in o.htmlWebpackPlugin.files.css) { %}
    <link href="{%=o.htmlWebpackPlugin.files.css[css] %}" rel="stylesheet">
    {% } %}
  </head>
  <body>
    {% if (o.htmlWebpackPlugin.options.devBundle) { %}
    <script async src="{%=o.htmlWebpackPlugin.options.devBundle %}"></script>
    {% } else { %}
      {% for (var chunk in o.htmlWebpackPlugin.files.chunks) { %}
      <script async src="{%=o.htmlWebpackPlugin.files.chunks[chunk].entry %}"></script>
      {% } %}
    {% } %}
  </body>
</html>
