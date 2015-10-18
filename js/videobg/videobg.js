$(document).ready(function() {

    "use strict";

    //Custom Background Video
    var videobackground = new $.backgroundVideo($('#top'), {
    "align": "centerXY",
    "width": 1280,
    "height": 720,
    "path": "img/",
    "filename": "catalunya-home",
    "types": ["mp4","ogg","webm"]
	});


    //Youtube Background Video
    $(function(){
      $(".player").mb_YTPlayer();
    });


});
