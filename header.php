<!DOCTYPE html>
<html lang="en">

<head>
<?php
    if (IS_VITE_DEVELOPMENT) {
        ?>
        <script type="module">
            import RefreshRuntime from 'http://localhost:3000/@react-refresh'
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => { }
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        <?php
    }
    ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head() ?>
    
</head>

<body <?php body_class('flex flex-col h-screen') ?>>
    <?php wp_body_open(); ?>

    <!--->

    <main class="flex-grow h-full" id="main-container">
