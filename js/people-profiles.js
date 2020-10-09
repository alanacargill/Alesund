$(document).ready(function(){
    $ajaxContainerContent = $(".ajax-container-content");
    $closeAjaxButton = $(".ajax-close-button");
    $('.person-read-more').click(function () {
        $.ajax({
            url: "./person",
            success: function(result) {
                $ajaxContainerContent.html(result);
            }
        });
        $('.ajax-container').addClass('ajax-container-fill');
    });
    $closeAjaxButton.click(function () {
        $ajaxContainerContent.empty();
        $('.ajax-container').removeClass('ajax-container-fill');
    })
});