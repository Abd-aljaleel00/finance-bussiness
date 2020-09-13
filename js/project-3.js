/* what is owl.js ? 
what is substitute for the load in jQuery3.5 */



var backImg = [  "url('../images/image-3.jpg')" ,"url('../images/project6.jpg')","url('../images/image-1.jpg')", "url('../images/slide_01.jpg')", "url('../images/project4.jpg')"]

$("header .fa-chevron-right").click(function () {
    var i;
    for (i = 0 ;i  > backImg.length - 1 ; i++) {
        
        $("header").css("background", backImg[i + 1]);
  
        if (i <= backImg.length - 1) {
        i = 0;
    }
}
   
});

   

  /* 
   إضافات مستقبلية   
         1/ إضافة صندوق الخيارات للتحكم في تغيير الألوان الرئسية و الثيمات , الخلفيات
        2/ إضافة خمسة ثيمات جديدة
        3/ التدريب على  local storage 
      done  4/ تغيير الخلفيات 
        5/ تغيير الموقع لوكالة سفر
        6/  تغيير  الخلفيات كل 5ثواني
        7/   owl.js اضافة 
        8/ تفيير الخلفيات من خلال الأزرار
       done 9/ إضافة لغتين عربي / إنجليزي
        10/ إخفاء الplaceholder 
        11/ إضافة الnicescroll 
        12/ تهذيب الcss codes 
        13/ تغيير الخطوط بخطوط قوقل 
        14/ إضافة seo 
        15/ إضافة preloader 
        16/ تسريع التصميم 
        17/ إستخدام الcards 
        18/ إضافة sticky headers 
        19/ design optimazaiton 
        20/ 

  */
            // changing the active class between li
$("header ol li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
}); 

   // open and toggle menu
$("header .fa-bars").click(function () {
    $("header ol").slideToggle();
});

$(window).click(function () {
  if($(this).hasClass("fa-bars")) {
      console.log("it works");
  }
});
        // save colors in local storage 
    $(".option-box .option span").click(function () {
           localStorage.setItem("color", $(this).data("color"));
           $("body").css("--main-color", localStorage.getItem("color"));
    });
   
        // fire the preloader 
$(window).load(function () {
   $(".spinner-container").delay(1000).fadeOut(900);
   $("body, html").css("overflow, auto");
});

    $("header  .english-page").click(function () {
        open("project-3.html");
    });
    $("header  .arabic-page").click(function () {
        open("شركة فاينانشال.html");
    });

/*
        design rules 
1/ visual consistancy : 
    - use the same color in all sections 
    - use the same padding-top and padding-bottom in all sections 

2/ spacing : 
 -use spance surrounding the elements more than in between them 

 3/typography : 
 - increase the size of the font 
 - the width of the article should be as 2.5 alphabets 
 - line-height 1.4 
 - use other fonts  
    4/ space it out 
    - use 100px padding top and bottom in every section .. it feels better than tiny elements 
    5/ don't use text-center in long paragraphs 
    6/ use grayscale to unify the photos background fast without help from professional photograhers
    7/ use an enough contrast when writing in a lighting background by using overlay
    8/ don't use the same background form unrelated sections 
    9/ use header font size hierachy : the main  heaer should be the biggest , then the others should br smaller and smaller
    10 / if you can't increase the size of the icons icrease it's parent and put it in a background
    11/ if you don't want to manipulate with the backgrounc image you can make the background in the text and make it color as same  as 
    12/don't  use the text over the main parts of the background like face 
    13/ don't use the gray colors in the body text .. use more darker colors for more readability and more contrast 
    */ 