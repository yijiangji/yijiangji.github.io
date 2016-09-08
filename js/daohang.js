/**
 * Created by PC on 2016/8/28.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        var menu = $("#menu");
        var items = $("#content").find(".item");
        var currentId = "";
        items.each(function(){
            var m= $(this);
            var itemTop = m.offset().top;
            if(top>itemTop-200){
                currentId = "#" + m.attr("id");
            }else{
                return false;
            }
        });
        var currentLink = menu.find(".current");
        if(currentId && currentLink.attr("href") != currentId){
            currentLink.removeClass("current");
            menu.find("[href=" + currentId + "]").addClass("current");
        }
    });
});