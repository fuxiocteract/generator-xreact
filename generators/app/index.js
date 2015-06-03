'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdir = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
      this.prompt({
          type: 'input',
          name: 'name',
          message: 'Your project name',
          default: 'xreact-app'
      }, function (answers) {
        this.log(answers.name);
        done();
      }.bind(this));

      creatingFolderStructure();
  },

  _creatingFolderStructure: function() {
    var development = mkdir('./development', function(err) {
      if (err) console.err(err);
      else console.log('Development path has been created!');
    });

    var development_js = mkdir('./development/js', function(err) {
      if (err) console.err(err);
      else console.log('JS development path has been created!');
    });

    var development_scss = mkdir('./development/scss', function(err) {
      if (err) console.err(err);
      else console.log('Scss development path has been created!');
    });

    var development_css = mkdir('./development/css', function(err) {
      if (err) console.err(err);
      else console.log('Css development path has been created!');
    });

    var development_js_react = mkdir('./development/js/react', function(err) {
      if (err) console.err(err);
      else console.log('React development path has been created!');
    });

    var development_js_react_src = mkdir('./development/js/react/src', function(err) {
      if (err) console.err(err);
      else console.log('React source development path has been created!');
    });

    var development_js_react_build = mkdir('./development/js/react/build',function(err) {
      if (err) console.err(err);
      else console.log('React build development path has been created!');
    });

    var development_scss_src = mkdir('./development/scss/src', function(err) {
      if (err) console.err(err);
      else console.log('Scss source development path has been created!');
    });

    var development_css_src = mkdir('./development/css/src', function(err) {
      if (err) console.err(err);
      else console.log('Css source development path has been created!');
    });

    var development_css_build = mkdir('./development/css/build', function(err) {
      if (err) console.err(err);
      else console.log('Css build development path has been created!');
    });

    var development_scss_build = mkdir('./development/scss/build', function(err) {
      if (err) console.err(err);
      else console.log('Scss build development path has been created!');
    });

    var development_asset = mkdir('./development/asset', function(err) {
      if (err) console.err(err);
      else console.log('Asset development path has been created!');
    });

    var development_asset_font = mkdir('./development/asset/font', function(err) {
      if (err) console.err(err);
      else console.log('Asset font development path has been created!');
    });

    var development_asset_img = mkdir('./development/asset/img', function(err) {
      if (err) console.err(err);
      else console.log('Asset image development path has been created!');
    });

    var development_asset_favicon = mkdir('./development/asset/favicon', function(err) {
      if (err) console.err(err);
      else console.log('Asset favicon development path has been created!');
    });

    var development_asset_svg = mkdir('./development/asset/svg', function(err) {
      if (err) console.err(err);
      else console.log('Asset svg development path has been created!');
    });

    var development_asset_statics = mkdir('./development/asset/statics', function(err) {
      if (err) console.err(err);
      else console.log('Asset statics development path has been created!');
    });

    var production = mkdir('./production', function(err) {
      if (err) console.err(err);
      else console.log('Production path has been created!');
    });

    var production_js = mkdir('./production/js', function(err) {
      if (err) console.err(err);
      else console.log('Js production path has been created!');
    });

    var production_css = mkdir('./production/css', function(err) {
      if (err) console.err(err);
      else console.log('Css production path has been created!');
    });

    var production_res = mkdir('./production/res', function(err) {
      if (err) console.err(err);
      else console.log('Resource production path has been created!');
    });

    var production_res_font = mkdir('./production/res/font', function(err) {
      if (err) console.err(err);
      else console.log('Font resource production path has been created!');
    });

    var production_res_img = mkdir('./production/res/img', function(err) {
      if (err) console.err(err);
      else console.log('Img resource production path has been created!');
    });

    var production_res_favicon = mkdir('./production/res/favicon', function(err) {
      if (err) console.err(err);
      else console.log('Favicon resource production path has been created!');
    });

    var production_res_svg = mkdir('./production/res/svg', function(err) {
      if (err) console.err(err);
      else console.log('Svg resource production path has been created!');
    });

    var production_res_statics = mkdir('./production/res/statics', function(err) {
      if (err) console.err(err);
      else console.log('Statics resource production path has been created!');
    });
  }
});
