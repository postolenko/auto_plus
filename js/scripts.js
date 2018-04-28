var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;
var indexStep;
var activeStep;
var nextStepIndex;
var activeLiStepAttr;
var topCoord;

$(window).load(function() {

    getCenterPosition();

    $("select").each(function() {

        var parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    getTopPadding();
    getDescTrParams();
    getPoligonBg();   

});

$(window).resize(function() {

    getTopPadding();
    getDescTrParams();
    getPoligonBg();
    getCenterPosition();

    $("select").each(function() {

        var parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

});

$(document).ready(function() {

    $("input[type='tel']").mask("+7 (999) 999-99-99");

    $(".accordeon .accordeon-item").each(function() {

        if( !$(this).hasClass("active") ) {

            $(this).addClass("hidden");

        }

    });

    $(".accordeon-item .ac-title").click(function(e) {

        e.preventDefault();

        parentBlock = $(this).closest(".accordeon");

        parentItem = $(this).closest(".accordeon-item");        

        if( parentItem.hasClass("active") ) {

            parentItem.find(".sliding-box").slideUp(300);

            parentItem.removeClass("active");

        } else {

            parentItem.addClass("current");

            parentBlock.find(".accordeon-item").each(function() {

                if( $(this).hasClass("active")
                    &&  !$(this).hasClass("current")) {

                    $(this).find(".sliding-box").slideUp(300);
                    $(this).removeClass("active");

                }

            });

            parentItem.removeClass("current");

            parentItem.find(".sliding-box").slideDown(300);

            parentItem.addClass("active");

        }

    });

    // -----------------------------------------

    if( $(".steps-content-tabs").length > 0 ) {

        $(".steps-content-tabs .step-content").css({
            "display" : "none"
        });

        $(".steps-content-tabs .step-content").each(function() {

            if($(this).hasClass("active")) {

                indexStep = $(this).attr("data-index");

                activeStep = $(this);

                return false;

            } else {

                parentBlock = $(this).closest(".steps-content-tabs");

                activeStep = parentBlock.find(".step-content:eq(0)");

                indexStep = activeStep.attr("data-index");

            }

        });

        activeStep.addClass("active");

        activeStep.css({
            "display" : "block"
        })

        $(".steps li[data-index = '"+ indexStep +"']").addClass("active");

    }

    $(".next_step").click(function(e) {

        e.preventDefault();

        indexStep = $(this).closest(".step-content").attr("data-index");

        nextStepIndex = $(this).closest(".step-content").index() + 1;

        $(".steps-content-tabs .step-content").css({
            "display" : "none"
        });

        $(".steps-content-tabs .step-content:eq("+ nextStepIndex +")").css({
            "display" : "block"
        });

        $(".steps li").removeClass("active");

        activeLiStepAttr = $(".steps-content-tabs .step-content:eq("+ nextStepIndex +")").attr("data-index");

        $(".steps li[data-index = '"+ activeLiStepAttr +"']").addClass("active");

    });

    $(".back_link").click(function(e) {

        e.preventDefault();

        indexStep = $(this).closest(".step-content").attr("data-index");

        nextStepIndex = $(this).closest(".step-content").index() - 1;

        $(".steps-content-tabs .step-content").css({
            "display" : "none"
        });

        $(".steps-content-tabs .step-content:eq("+ nextStepIndex +")").css({
            "display" : "block"
        });

        $(".steps li").removeClass("active");

        activeLiStepAttr = $(".steps-content-tabs .step-content:eq("+ nextStepIndex +")").attr("data-index");

        $(".steps li[data-index = '"+ activeLiStepAttr +"']").addClass("active");

    });

    // ---------------------------------

    $(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.fadeIn(400);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

            }

        }

    });

    $(".close-popup").click(function() {

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

    });

    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").fadeOut(300);
        }

    });

});


function getTopPadding() {

    $("#promo").css({
        "padding-top" : $(".header-site").height() + "px"
    });

}

function getDescTrParams() {

    var triangle;

    $(".desc-item").each(function() {

        triangle = $(this).find(".tr");

        parentBlock = triangle.closest(".desc-item");

        triangle.css({
            "border-top-width" : ( parentBlock.outerHeight() / 2 ) + "px",
            "border-bottom-width" : ( parentBlock.outerHeight() / 2 ) + "px"
        });

    });

}


function getPoligonBg() {

    $(".clip-polygon").each(function() {

        var poligonHeight = $(this).height();
        var TRIANGLEHEIGHT = 80;

        var percentHeight =100 - ( 100 / poligonHeight * TRIANGLEHEIGHT );

        $(this).css({
            "-webkit-clip-path": "polygon(0 0, 100% 0, 100% "+ percentHeight +"%, 50% 100%, 0 "+ percentHeight +"%)",
            "clip-path": "polygon(0 0, 100% 0, 100% "+ percentHeight +"%, 50% 100%, 0 "+ percentHeight +"%)"
        });

    });

}


function getCenterPosition() {

    $(".center").addClass("active");

    $(".parent_center").css({
        "padding-top" : $(".header-site").outerHeight() + "px"
    });

    topCoord = ( $(window).height() - $(".center").height() ) / 2 - $(".header-site").height();

    if( topCoord <= $(".header-site").height() ) {

        topCoord = 10;

    }

    $(".center").css({
        "margin-top" : topCoord + "px"
    });

}
