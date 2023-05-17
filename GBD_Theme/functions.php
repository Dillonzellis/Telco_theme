<?php

//Remove divi zoom disable
function override_et_add_viewport_meta()
{
    remove_action('wp_head', 'et_add_viewport_meta');
    add_action('wp_head', 'et_add_viewport_meta_child');
}

function et_add_viewport_meta_child()
{
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=1" />';
}

add_action('after_setup_theme', 'override_et_add_viewport_meta');

// GBD Theme files
function gbd_equeue_scripts()
{
    wp_enqueue_style('parent-style', get_stylesheet_directory_uri() . '/dist/main.css');
    wp_enqueue_script('theme-js', get_stylesheet_directory_uri() . '/dist/main.js', array(), null, true);
}

add_action('wp_enqueue_scripts', 'gbd_equeue_scripts');
