/* browse services box content  */
$(".services .btns").click(function () {
        // add active class 
        $(this).addClass("active").siblings().removeClass("active");
        // changing service box contents
        $("." + $(this).data("content")).addClass("active").siblings().removeClass("active");
});

