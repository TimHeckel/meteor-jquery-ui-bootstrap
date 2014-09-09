Package.describe({
  summary: "jQuery-UI-Bootstrap - custom CSS jQuery UI theme for Twitter Bootstrap",
  version: "0.2.0",
  name: "zeroasterisk:jquery-ui-bootstrap3",
  git: "https://github.com/zeroasterisk/meteor-jquery-ui-bootstrap3"
});

Package.onUse(function (api) {
  // If no version is specified for an 'api.use' dependency, use the
  // one defined in Meteor 0.9.0.
  api.versionsFrom('0.9.0');
  // Use Underscore package, but only on the server.
  // Version not specified, so it will be as of Meteor 0.9.0.
  api.use('jquery', 'client');
  api.addFiles([
    'css/images/ui-bg_flat_0_aaaaaa_40x100.png',
    'css/images/ui-bg_glass_55_fbf9ee_1x400.png',
    'css/images/ui-bg_glass_65_ffffff_1x400.png',
    'css/images/ui-bg_glass_75_dadada_1x400.png',
    'css/images/ui-bg_glass_75_e6e6e6_1x400.png',
    'css/images/ui-bg_glass_75_ffffff_1x400.png',
    'css/images/ui-bg_highlight-soft_75_cccccc_1x100.png',
    'css/images/ui-bg_inset-soft_95_fef1ec_1x100.png',
    'css/images/ui-icons_222222_256x240.png',
    'css/images/ui-icons_2e83ff_256x240.png',
    'css/images/ui-icons_454545_256x240.png',
    'css/images/ui-icons_888888_256x240.png',
    'css/images/ui-icons_cd0a0a_256x240.png',
    'css/images/ui-icons_f6cf3b_256x240.png',
    'css/images/ui-icons_ffffff_256x240.png',
    'css/jquery-ui-1.10.3.custom.css',
    'css/jquery-ui-1.10.3.theme.css',
    'css/jquery.ui.1.10.3.ie.css'
  ], 'client');
});
