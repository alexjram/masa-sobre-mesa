<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) )
    exit;  

// functions.php is empty so you can easily track what code is needed in order to Vite + Tailwind JIT run well


// Main switch to get frontend assets from a Vite dev server OR from production built folder
// it is recommended to move it into wp-config.php



include "inc/inc.vite.php";


function addTypes() {
	$lang = $_GET['lang'] ?? 'es';
	if (!in_array($lang, pll_get_the_languages(['raw' => true]))) {
		$lang = 'es';
	}
    $query = new WP_Query([
        'post-type' => 'food'
    ]);
    $terms = get_terms([
        'taxonomy' =>'food-type',
		'hide_empty' => false,
		'lang' => $lang
    ]);

    $termsArray = [];
    foreach($terms as $term) {
        $query = new WP_Query([
            'post_type' => 'food',
            'tax_query' => [
                [
                    'taxonomy' => 'food-type',
                    'terms' => $term->term_id
                ]
			],
			'lang' => $lang,
        ]);
        $foods = $query->get_posts();

        $termsArray[] = [
            'name' => $term->name,
            'id' => $term->term_id,
            'foods' => array_map(fn(WP_Post $food) => [
                'name' => $food->post_title, 
                'desc' => wp_strip_all_tags($food->post_content),
		'image' => get_the_post_thumbnail_url($food),
		'image2' => get_field('imagen_secundaria', $food->ID),
		'id' => $food->ID,
            ], $foods),
        ];
    }

    ?>
    <script>
        var globalTerms = JSON.parse('<?= json_encode($termsArray) ?>')
    </script>
    <?php
}

add_action('wp_head', 'addTypes');

function setLangDetection() {
	if (isset($_GET['lang']) && function_exists('pll_set_current_language')) {
		pll_set_current_language(sanitize_text_field($_GET['lang']));
	}
}
add_action('init', 'setLangDetection');
