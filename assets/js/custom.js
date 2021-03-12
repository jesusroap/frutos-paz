/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
$(document).ready(function() {

    // Start Custom Shipping Method

    $("#delivery-option-list-custom").each(function() {
        var classes = $(this).attr("class");

        if ($(this).find("input").is(":checked")) {
            var htmlDeliveryOption = $(this).find("input:checked").parents(".delivery-option").html();
        } else {
            var htmlDeliveryOption = "<div class='text-sm-center' style='width: 100%'><input type='radio' name='delivery_option[11]' style='opacity: 0' required>Seleccione una opción</div>";
        }      

        var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger-2 row delivery-option">' + htmlDeliveryOption + '</span>';
            template += '<div class="custom-options-2">';
            $(this).find(".delivery-option").each(function() {
              template += '<span class="custom-option-2 ' + $(this).attr("class") + '" style="' + $(this).attr("style") + '">' + $(this).html() + '</span>';
            });
            template += '</div></div>';
        
        $(this).wrap('<div class="custom-select-wrapper-2"></div>');
        $(this).hide();
        $(this).after(template);
    });
    
    $(".custom-option-2:first-of-type").hover(function() {
      $(this).parents(".custom-options-2").addClass("option-hover-2");
    }, function() {
      $(this).parents(".custom-options-2").removeClass("option-hover-2");
    });
    
    $(".custom-select-trigger-2").on("click", function() {
      $('html').one('click',function() {
        // $(".delivery-options").removeClass("opened");
      });
      $(this).parents(".delivery-options").toggleClass("opened");
      event.stopPropagation();
    });
    
    $(".custom-option-2").on("click", function() {
      $(this).parents(".custom-options-2").find(".custom-option-2").removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".delivery-options").removeClass("opened");
      $(this).parents(".delivery-options").find(".custom-select-trigger-2").html($(this).html());
    });
    
    // End Custom Shipping Method

});