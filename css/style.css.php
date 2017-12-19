<?php
# /* needs php enabled
# standalone version style.css
header("Content-type: text/css", true);
# */
$css=file("style.css")
echo implode($css);
