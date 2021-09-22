$(function () {

   // слик работ
   $('.work__slider').slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      infinite: true,
      speed: 500,
      easing: 'ease',
      waitForAnimate: false,
      responsive: [
         {
            breakpoint: 950,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 720,
            settings: {
               slidesToShow: 2,
               dots: false,
            }
         }, {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   }); // слик работ

   // слик услуг
   $('.services__slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 2,
      initialSlide: 0,
      infinite: true,
      speed: 500,
      easing: 'ease',
      waitForAnimate: false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnDotsHover: true,
      responsive: [
         {
            breakpoint: 950,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 720,
            settings: {
               slidesToShow: 2,
               dots: false,
            }
         }, {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   }); // слик услуг

   // табы 1ур
   $('div.category__main-tabs').on('click', 'button.category__main-tab:not(.active)', function () {
      $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('div.services__list').find('div.main-tab__content').removeClass('active').eq($(this).index()).addClass('active');

      var tabIndex = window.location.hash.replace('#tab', '') - 1;
      if (tabIndex != -1) $('div.category__main-tabs button').eq(tabIndex).click();
      $('a[href*=#tab]').click(function () {
         var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
         $('div.category__main-tabs button').eq(tabIndex).click();
      });
   });// табы 1ур

   // табы 2ур
   $('div.category__sub-tabs').on('click', 'button.category__sub-tab:not(.active)', function () {
      $(this)
         .addClass('active').siblings().removeClass('active')
         .closest('div.main-tab__content').find('div.sub-tab__content').removeClass('active').eq($(this).index()).addClass('active');
         
      var tabIndex = window.location.hash.replace('#tab', '') - 1;
      if (tabIndex != -1) $('div.category__sub-tabs button').eq(tabIndex).click();
      $('a[href*=#tab]').click(function () {
         var tabIndex = $(this).attr('href').replace(/(.*)#tab/, '') - 1;
         $('div.category__sub-tabs button').eq(tabIndex).click();
      });
   });// табы 2ур


   $('[data-fancybox]').fancybox({
      protect: true
   });

   // бургер меню
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   }); // бургер меню

   // спойлеры услуг
   $('.spoiler__title').click(function (event) {
      if ($('.sub-tab__content').hasClass('one__spoiler')) {
         $('.spoiler__title').not($(this)).removeClass('active');
         $('.spoiler-box').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   }); // спойлеры услуг

   // фильтр фоторабот
   $('input').change(function () {
      var category = $(this).val();

      var matchedItems = $('.' + category).each(function () {
         var anyChecked = false;
         var classArray = this.className.split(/\s+/);

         for (idx in classArray) {
            if ($('#filter-' + classArray[idx]).is(":checked")) {
               anyChecked = true;
               break;
            }
         }

         if (!anyChecked) $(this).hide();
         else $(this).show();

      });
   }); // фильтр фоторабот


   // Все галочки
   $("#check-all").change(function(){
      var checked = $(this).is(':checked');
      if(checked){
        $(".filters__check").each(function(){
          $(this).prop("checked",true);
        });
      }else{
        $(".filters__check").each(function(){
          $(this).prop("checked",false);
        });
      }
    });
   // Changing state of CheckAll checkbox 
   $(".filters__check").click(function(){
  
     if($(".filters__check").length == $(".filters__check:checked").length) {
       $("#check-all").prop("checked", true);
     } else {
       $("#check-all").removeAttr("checked");
     }
 
   }); // Все галочки
});