Package.describe({
  summary: "dali.styl"
});

Package.on_use(function (api) {
  api.use(['stylus']);
  api.add_files('dali.styl', 'client');
});