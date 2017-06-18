$(document).ready(function() {
  $(".t-banner-top__close").click(function() {
    $(this).closest(".t-banner-top").addClass("t-banner-top_closed")
  });

  $(".o-catalogs__more .a-button").click(function(){
    var $catalog = $(this).closest(".t-catalog").find(".o-catalogs"),
        $text = $(this).find(".a-button__text"),
        toggle = $(this).data("textToggle");

    $(this).data("textToggle", $text.text())
    $text.text(toggle);


    $catalog.toggleClass("o-catalogs_more");

    return false;
  });

  $(".m-tabs__link").click(function(){
    if($(this).hasClass("m-tabs__link_active")) return false;

    $(this).closest(".m-tabs").find(".m-tabs__link_active").removeClass("m-tabs__link_active");
    $(this).addClass("m-tabs__link_active");
  });

  $(".m-button-menu, .t-header__burger").click(function() {
    var $menu = $($(this).data("open"));

    overlayLock(true);

    $menu.addClass("t-menu-phone_open")
  });

  $(".o-menu-phone__close").click(function() {
    var $menu = $($(this).data("close"));

    overlayLock(false);

    $menu.removeClass("t-menu-phone_open")
  });

  $(".m-choose__header").click(function() {
    var $list = $(this).closest(".o-menu-phone__list"),
        $item = $(this).closest(".o-menu-phone__item"),
        $sublist = $(this).closest(".m-choose").find(".m-choose__list");

      $list.toggleClass("o-menu-phone__list_opened");
      $item.toggleClass("o-menu-phone__item_open");
      $sublist.toggleClass("m-choose__list_open");
  });

  $(".m-choose__item").click(function() {
    var $choose = $(this).closest(".m-choose"),
        $chooseParent = $choose.parent(),
        $menu = $(this).closest(".o-menu-phone"),
        $button = $menu.find(".o-menu-phone__apply"),
        data = "",
        $list = "",
        hash = [];

    $(this).toggleClass("m-choose__item_active");

    var $list = $choose.find(".m-choose__item_active"),
        hash = [];

    for( var i = 0; i < $list.length; i++) {
      hash.push($($list[i]).html());
    }




    console.log($chooseParent.data('curent'), hash.join(','), $chooseParent.data('curent') == hash.join(','))

    if($chooseParent.data('curent') !== hash.join(',') ) {
      $button.removeClass("o-menu-phone__apply_hidden");
    } else {
      $button.addClass("o-menu-phone__apply_hidden");
    }

    $()
  });

  // $(".m-choose__header").click(function () {
  //   if($(this).closest(".o-catalog-filter__choose").hasClass("o-catalog-filter__choose_open")) {
  //     $(this).closest(".m-choose").find(".m-choose__list").toggleClass("m-choose__list_open");
  //     $(this).closest(".o-catalog-filter__choose").removeClass("o-catalog-filter__choose_open");
  //     $(this).closest(".o-catalog-filter").toggleClass("o-catalog-filter_open");
  //
  //   } else {
  //     $(this).closest(".m-choose").find(".m-choose__list").toggleClass("m-choose__list_open");
  //     $(this).closest(".o-catalog-filter").toggleClass("o-catalog-filter_open");
  //     $(this).closest(".o-catalog-filter__choose").addClass("o-catalog-filter__choose_open");
  //   }
  // })
  //
  // $(".m-choose__item").click(function() {
  //   $(this).closest(".m-choose").find(".m-choose__list").toggleClass("m-choose__list_open");
  //   $(this).closest(".o-catalog-filter__choose").removeClass("o-catalog-filter__choose_open");
  //   $(this).closest(".o-catalog-filter").toggleClass("o-catalog-filter_open");
  //
  //   $(this).closest(".m-choose").find(".m-choose__current").text($(this).text());
  //   $(this).closest(".t-catalog-filter").addClass("t-catalog-filter_choice")
  // });
  //
  // $(".m-button-menu__close").click(function() {
  //   $(".t-page").removeClass("t-page_overlay_lock");
  //   $(".t-catalog-filter__container").removeClass("t-catalog-filter__container_open")
  // });
  //
  // $(".m-button-menu__title").click(function() {
  //   if($(this).closest(".t-catalog-filter__container").hasClass("t-catalog-filter__container_open")) {
  //     return false
  //   }
  //
  //   $(".t-page").addClass("t-page_overlay_lock");
  //   $(".t-catalog-filter__container").addClass("t-catalog-filter__container_open")
  // });
});

function overlayLock(lock) {
  if(lock) {
    $(".t-page").addClass("t-page_overlay_lock")
  } else {
    $(".t-page").removeClass("t-page_overlay_lock")
  }
}
