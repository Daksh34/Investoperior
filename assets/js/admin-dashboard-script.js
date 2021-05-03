/*var width = $(window).width(), height = $(window).height();
alert('width : ' +width + 'height : ' + height);*/
"use strict";

function AdminDashboardPageLoad() {
    var $window = $(window);
    //add id to main menu for mobile menu start
    var getBody = $("body");
    var bodyClass = getBody[0].className;
    $(".main-menu").attr('id', bodyClass);
    //add id to main menu for mobile menu end

    // card js start
    $(".card-header-right .close-card").on('click', function() {
        var $this = $(this);
        $this.parents('.card').animate({
            'opacity': '0',
            '-webkit-transform': 'scale3d(.3, .3, .3)',
            'transform': 'scale3d(.3, .3, .3)'
        });

        setTimeout(function() {
            $this.parents('.card').remove();
        }, 800);
    });
    $(".card-header-right .reload-card").on('click', function() {
        var $this = $(this);

        $this.parents('.card').addClass("card-load");
        $this.parents('.card').append('<div class="card-loader"><i class="icofont icofont-refresh rotate-refresh"></div>');
        setTimeout(function() {
            $this.parents('.card').children(".card-loader").remove();
            $this.parents('.card').removeClass("card-load");
        }, 3000);
    });
    $(".card-header-right .card-option .icofont-simple-left").on('click', function() {
        var $this = $(this);
        if ($this.hasClass('icofont-simple-right')) {
            $this.parents('.card-option').animate({
                'width': '35px',
            });
        } else {
            $this.parents('.card-option').animate({
                'width': '180px',
            });
        }
        $(this).toggleClass("icofont-simple-right").fadeIn('slow');
        // $this.children("li .icofont-simple-left").toggleClass("");
    });

    $(".card-header-right .minimize-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        var card = $(port).children('.card-block').slideToggle();
        $(this).toggleClass("icofont-plus").fadeIn('slow');
    });
    $(".card-header-right .full-card").on('click', function() {
        var $this = $(this);
        var port = $($this.parents('.card'));
        port.toggleClass("full-card");
        $(this).toggleClass("icofont-resize");
    });

    $(".card-header-right .icofont-spinner-alt-5").on('mouseenter mouseleave', function() {
        $(this).toggleClass("rotate-refresh").fadeIn('slow');
    });
    $("#more-details").on('click', function() {
        $(".more-details").slideToggle(500);
    });
    $(".mobile-options").on('click', function() {
        $(".navbar-container .nav-right").slideToggle('slow');
    });
    $(".main-search").on('click', function() {
        $("#morphsearch").addClass('open');
    });
    $(".morphsearch-close").on('click', function() {
        $("#morphsearch").removeClass('open');
    });

    $('[data-toggle="tooltip"]').tooltip()

    var $window = $(window);
    var nav = $('.fixed-button');
    $window.scroll(function() {
        if ($window.scrollTop() >= 200) {
            nav.addClass('active');
        } else {
            nav.removeClass('active');
        }
    });
};

// toggle full screen
function toggleFullScreen() {
    var a = $(window).height() - 10;

    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

//light box
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
// Upgrade Button

function MenuSetup() {
    $("#pcoded").pcodedmenu({
        themelayout: 'vertical',
        verticalMenuplacement: 'left', // value should be left/right
        verticalMenulayout: 'wide', // value should be wide/box/widebox
        MenuTrigger: 'click',
        SubMenuTrigger: 'click',
        activeMenuClass: 'active',
        ThemeBackgroundPattern: 'pattern2',
        HeaderBackground: 'theme1',
        LHeaderBackground: 'theme1',
        NavbarBackground: 'themelight1',
        ActiveItemBackground: 'theme4',
        SubItemBackground: 'theme2',
        ActiveItemStyle: 'style0',
        ItemBorder: true,
        ItemBorderStyle: 'none',
        SubItemBorder: true,
        DropDownIconStyle: 'style1', // Value should be style1,style2,style3
        menutype: 'st2', // Value should be st1,st2,st3
        freamtype: "theme1",
        layouttype: 'light',
        FixedNavbarPosition: true,
        FixedHeaderPosition: true,
        collapseVerticalLeftHeader: true,
        VerticalSubMenuItemIconStyle: 'style6', // value should be style1,style2,style3,style4,style5,style6
        VerticalNavigationView: 'view1',
        verticalMenueffect: {
            desktop: "shrink",
            tablet: "overlay",
            phone: "overlay",
        },
        defaultVerticalMenu: {
            desktop: "expanded", // value should be offcanvas/collapsed/expanded/compact/compact-acc/fullpage/ex-popover/sub-expanded
            tablet: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            phone: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
        },
        onToggleVerticalMenu: {
            desktop: "offcanvas", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            tablet: "expanded", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
            phone: "expanded", // value should be offcanvas/collapsed/expanded/compact/fullpage/ex-popover/sub-expanded
        },

    });

    function freamtype() {
        $('.theme-color > a.fream-type').on("click", function() {
            var value = $(this).attr("fream-type");
            $('.pcoded').attr('fream-type', value);

            $('.pcoded-header').attr("header-theme", "themelight" + value);
            $('.pcoded-navbar').attr("navbar-theme", "theme" + value);
            $('.navbar-logo').attr("logo-theme", "theme" + value);

        });
    };
    freamtype();
    /* layout type Change function Start */
    function handlelayouttheme() {
        $('.theme-color > a.Layout-type').on("click", function() {
            var layout = $(this).attr("layout-type");
            $('.pcoded').attr("layout-type", layout);
            if (layout == 'dark') {
                $('.pcoded-header').attr("header-theme", "theme6");
                $('.pcoded-navbar').attr("navbar-theme", "theme1");
                $('.navbar-logo').attr("logo-theme", "theme6");
            }
            if (layout == 'light') {
                $('.pcoded-header').attr("header-theme", "theme1");
                $('.pcoded-navbar').attr("navbar-theme", "themelight1");
                $('.navbar-logo').attr("logo-theme", "theme1");
            }
        });
    };
    handlelayouttheme();

    function handlemenutype() {
        $('#menu-effect').val('st1').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded').attr('nav-type', get_value);
        });
    };

    handlemenutype();

    /* Left header logo Change function Start */
    function handleogortheme() {
        $('.theme-color > a.logo-theme').on("click", function() {
            var logotheme = $(this).attr("logo-theme");
            $('.navbar-logo').attr("logo-theme", logotheme);
        });
    };
    handleogortheme();

    /* Left header Theme Change function Start */
    function handleleftheadertheme() {
        $('.theme-color > a.leftheader-theme').on("click", function() {
            var lheadertheme = $(this).attr("lheader-theme");
            $('.pcoded-navigatio-lavel').attr("menu-title-theme", lheadertheme);
        });
    };
    handleleftheadertheme();
    /* Left header Theme Change function Close */
    /* header Theme Change function Start */
    function handleheadertheme() {
        $('.theme-color > a.header-theme').on("click", function() {
            var headertheme = $(this).attr("header-theme");
            $('.pcoded-header').attr("header-theme", headertheme);
            $('.navbar-logo').attr("logo-theme", headertheme);
        });
    };
    handleheadertheme();
    /* header Theme Change function Close */
    /* Navbar Theme Change function Start */
    function handlenavbartheme() {
        $('.theme-color > a.navbar-theme').on("click", function() {
            var navbartheme = $(this).attr("navbar-theme");
            $('.pcoded-navbar').attr("navbar-theme", navbartheme);
        });
    };

    handlenavbartheme();
    /* Navbar Theme Change function Close */
    /* Active Item Theme Change function Start */
    function handleactiveitemtheme() {
        $('.theme-color > a.active-item-theme').on("click", function() {
            var activeitemtheme = $(this).attr("active-item-theme");
            $('.pcoded-navbar').attr("active-item-theme", activeitemtheme);
        });
    };

    handleactiveitemtheme();
    /* Active Item Theme Change function Close */
    /* SubItem Theme Change function Start */
    function handlesubitemtheme() {
        $('.theme-color > a.sub-item-theme').on("click", function() {
            var subitemtheme = $(this).attr("sub-item-theme");
            $('.pcoded-navbar').attr("sub-item-theme", subitemtheme);
        });
    };

    handlesubitemtheme();
    /* SubItem Theme Change function Close */
    /* Theme background pattren Change function Start */
    function handlethemebgpattern() {
        $('.theme-color > a.themebg-pattern').on("click", function() {
            var themebgpattern = $(this).attr("themebg-pattern");
            $('body').attr("themebg-pattern", themebgpattern);
        });
    };

    handlethemebgpattern();
    /* Theme background pattren Change function Close */
    /* Vertical Navigation View Change function start*/
    function handleVerticalNavigationViewChange() {
        $('#navigation-view').val('view1').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded').attr('vnavigation-view', get_value);
        });
    };

    handleVerticalNavigationViewChange();
    /* Theme Layout Change function Close*/
    /* Theme Layout Change function start*/
    function handlethemeverticallayout() {
        $('#theme-layout').val('wide').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded').attr('vertical-layout', get_value);
        });
    };

    handlethemeverticallayout();
    /* Theme Layout Change function Close*/
    /* Menu effect change function start*/
    function handleverticalMenueffect() {
        $('#vertical-menu-effect').val('shrink').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded').attr('vertical-effect', get_value);
        });
    };

    handleverticalMenueffect();
    /* Menu effect change function Close*/
    /* Vertical Menu Placement change function start*/
    function handleverticalMenuplacement() {
        $('#vertical-navbar-placement').val('left').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded').attr('vertical-placement', get_value);
            $('.pcoded-navbar').attr("pcoded-navbar-position", 'absolute');
            $('.pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'relative');
        });
    };

    handleverticalMenuplacement();
    /* Vertical Menu Placement change function Close*/
    /* Vertical Active Item Style change function Start*/
    function handleverticalActiveItemStyle() {
        $('#vertical-activeitem-style').val('style1').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded-navbar').attr('active-item-style', get_value);
        });
    };

    handleverticalActiveItemStyle();
    /* Vertical Active Item Style change function Close*/
    /* Vertical Item border change function Start*/
    function handleVerticalIItemBorder() {
        $('#vertical-item-border').change(function() {
            if ($(this).is(":checked")) {
                $('.pcoded-navbar .pcoded-item').attr('item-border', 'false');
            } else {
                $('.pcoded-navbar .pcoded-item').attr('item-border', 'true');
            }
        });
    };

    handleVerticalIItemBorder();
    /* Vertical Item border change function Close*/
    /* Vertical SubItem border change function Start*/
    function handleVerticalSubIItemBorder() {
        $('#vertical-subitem-border').change(function() {
            if ($(this).is(":checked")) {
                $('.pcoded-navbar .pcoded-item').attr('subitem-border', 'false');
            } else {
                $('.pcoded-navbar .pcoded-item').attr('subitem-border', 'true');
            }
        });
    };

    handleVerticalSubIItemBorder();
    /* Vertical SubItem border change function Close*/
    /* Vertical Item border Style change function Start*/
    function handleverticalboderstyle() {
        $('#vertical-border-style').val('solid').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded-navbar .pcoded-item').attr('item-border-style', get_value);
        });
    };

    handleverticalboderstyle();
    /* Vertical Item border Style change function Close*/

    /* Vertical Dropdown Icon change function Start*/
    function handleVerticalDropDownIconStyle() {
        $('#vertical-dropdown-icon').val('style1').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded-navbar .pcoded-hasmenu').attr('dropdown-icon', get_value);
        });
    };

    handleVerticalDropDownIconStyle();
    /* Vertical Dropdown Icon change function Close*/
    /* Vertical SubItem Icon change function Start*/

    function handleVerticalSubMenuItemIconStyle() {
        $('#vertical-subitem-icon').val('style5').on('change', function(get_value) {
            get_value = $(this).val();
            $('.pcoded-navbar .pcoded-hasmenu').attr('subitem-icon', get_value);
        });
    };

    handleVerticalSubMenuItemIconStyle();
    /* Vertical SubItem Icon change function Close*/
    /* Vertical Navbar Position change function Start*/
    function handlesidebarposition() {
        $('#sidebar-position').change(function() {
            if ($(this).is(":checked")) {
                $('.pcoded-navbar').attr("pcoded-navbar-position", 'fixed');
                $('.pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'fixed');
            } else {
                $('.pcoded-navbar').attr("pcoded-navbar-position", 'absolute');
                $('.pcoded-header .pcoded-left-header').attr("pcoded-lheader-position", 'relative');
            }
        });
    };

    handlesidebarposition();
    /* Vertical Navbar Position change function Close*/
    /* Vertical Header Position change function Start*/
    function handleheaderposition() {
        $('#header-position').change(function() {
            if ($(this).is(":checked")) {
                $('.pcoded-header').attr("pcoded-header-position", 'fixed');
                $('.pcoded-navbar').attr("pcoded-header-position", 'fixed');
                $('.pcoded-main-container').css('margin-top', $(".pcoded-header").outerHeight());
            } else {
                $('.pcoded-header').attr("pcoded-header-position", 'relative');
                $('.pcoded-navbar').attr("pcoded-header-position", 'relative');
                $('.pcoded-main-container').css('margin-top', '0px');
            }
        });
    };

    handleheaderposition();
    /* Vertical Header Position change function Close*/


    /*  collapseable Left Header Change Function Start here*/
    function handlecollapseLeftHeader() {
        $('#collapse-left-header').change(function() {
            if ($(this).is(":checked")) {
                $('.pcoded-header, .pcoded ').removeClass('iscollapsed');
                $('.pcoded-header, .pcoded').addClass('nocollapsed');
            } else {
                $('.pcoded-header, .pcoded').addClass('iscollapsed');
                $('.pcoded-header, .pcoded').removeClass('nocollapsed');
            }
        });
    };

    handlecollapseLeftHeader();
    /*  collapseable Left Header Change Function Close here*/
}