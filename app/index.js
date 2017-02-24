var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
  },
  init: function () {
    var cb = this.async();
    var self = this;

    this.prompt([{
      name: 'moduleName',
      message: 'What do you want to name your module?',
      default: this.appname.replace(/\s/g, '-')
    }, {
      name: 'moduleDescription',
      message: 'Describe your module'
    }], function (props) {
      self.formProps = props;
      cb();
    });
  },
  writing: function () {
    var self = this;
    var mv = function (from, to) {
      self.fs.move(self.destinationPath(from), self.destinationPath(to));
    };
    self.fs.copyTpl(
      self.templatePath('**/*'),
      self.destinationPath('.'), {
        info: {
          moduleName: self.formProps.moduleName,
          moduleDescription: self.formProps.moduleDescription,
          name: self.user.git.name(),
          email: self.user.git.email(),
        }
      }
    );
    mv('npmignore', '.npmignore');
    mv('tern-project', '.tern-project');
    mv('gitignore', '.gitignore');
    mv('jshintrc','.jshintrc');
    mv('_package.json','package.json');
  },
  gitInit: function () {
    this.spawnCommandSync('git', ['init']);
  },
  installDeps: function () {
    this.npmInstall(this.formProps.features, {save : 'true'});
    this.installDependencies({
      bower: false
    });
  }
});
