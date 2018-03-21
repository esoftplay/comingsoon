<?php
$default = array(
  'sitename'   => 'Comming soon template',
  'company'    => 'We\'ll be on soon enough',
  'liveon'     => date('Y/m/d', strtotime('+1 Year')),
  'icon'       => 'images/icon.png',
  'logo'       => 'images/logo.png',
  'background' => 'images/background.jpg',
  'domain'     => @$_SERVER['HTTP_HOST']
);

if (file_exists('config.php'))
{
  require 'config.php';
  /*
  Contoh ./config.php
  $config = array(
    'sitename'   => 'ONTrip rencanakan perjalanan mu',
    'company'    => 'PT Langit Ontrip Internasional',
    'liveon'     => '2018/07/27'
  );

  */
}

if (!empty($config))
{
  $config = array_merge($default, $config);
}else{
  $config = $default;
}
require 'home.html';