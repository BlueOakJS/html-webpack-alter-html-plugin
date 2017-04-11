// Copyright (c) 2017 PointSource, LLC.
// MIT Licensed

'use strict';

function HtmlWebpackAlterHtmlPlugin(alterHtml) {
  this.alterHtml = alterHtml;
}

HtmlWebpackAlterHtmlPlugin.prototype.apply = function (compiler) {
  // Hook into the html-webpack-plugin processing
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      htmlPluginData.html = this.alterHtml(htmlPluginData.html);
      callback(null, htmlPluginData);
    }.bind(this));
  }.bind(this));
};

module.exports = HtmlWebpackAlterHtmlPlugin;
