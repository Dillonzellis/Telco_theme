<?php get_header(); ?>
    <div class="container-de py-4">
        <div>
            <article id="post-0" <?php post_class( 'et_pb_post not_found' ); ?>>
                <?php get_template_part( 'includes/no-results', '404' ); ?>
            </article>
        </div>
    </div>
<?php

get_footer();
