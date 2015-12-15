!function(a){a.CustomData={elements:a()},a.fn.extend({Custom:function(b){var c=this;a.CustomData.elements=a.CustomData.elements.add(c);var d={customStyleClass:"checkbox",customHeight:"16",enableHover:!1};b=a.extend(d,b);var e=function(){var c=a(this).children("input");c.prop("checked")?a(this).css("backgroundPosition","0px -"+3*b.customHeight+"px"):a(this).css("backgroundPosition","0px -"+b.customHeight+"px")},f=function(){var c=a(this),d=c.children("input");d.prop("checked")&&d.is(":checkbox")?(c.css("backgroundPosition","0px 0px"),d.prop("checked",!1).change()):(d.is(":checkbox")?c.css("backgroundPosition","0px -"+2*b.customHeight+"px"):(c.css("backgroundPosition","0px -"+2*b.customHeight+"px"),a('input[name="'+d.attr("name")+'"]').not(d).parent().css("backgroundPosition","0px 0px")),d.prop("checked",!0).change())},g=function(){a.CustomData.elements.each(function(){var b=a(this);b.prop("checked")?b.parent().css("backgroundPosition","0px -"+2*b.attr("data-height")+"px"):b.parent().css("backgroundPosition","0px 0px")})},h=function(){var b=a(this);b.parent()[b.prop("disabled")?"unbind":"bind"]({mousedown:e,mouseup:f})[b.prop("disabled")?"addClass":"removeClass"]("disabled"),b.prop("disabled")?a("label[for="+b.attr("id")+"]").unbind("mouseenter.label").unbind("mouseout.label"):i(b)},i=function(c){var d=c,e=d.parent();b.enableHover&&!d.prop("disabled")&&a("label[for="+d.attr("id")+"]").bind({"mouseenter.label":function(){d.prop("checked")?e.css("backgroundPosition","0px -"+3*d.attr("data-height")+"px"):e.css("backgroundPosition","0px -"+d.attr("data-height")+"px")},"mouseout.label":function(){d.prop("checked")?e.css("backgroundPosition","0px -"+2*d.attr("data-height")+"px"):e.css("backgroundPosition","0px 0px")}})};return this.each(function(){var c=a(this);if("1"!=c.attr("data-init")){c.attr({"data-init":"1","data-height":b.customHeight}).wrap("<span/>");var d=c.parent().addClass(b.customStyleClass);c.prop("checked")&&d.css("backgroundPosition","0px -"+2*b.customHeight+"px"),i(c),c.bind({change:g,"custom.refresh":h}),c.prop("disabled")?d.addClass("disabled"):d.parent("label").length?d.bind({mousedown:e}):d.bind({mousedown:e,mouseup:f})}})}})}(jQuery);



$(document).ready(function(){
    $(".radioY").Custom({
        customStyleClass:'radio',
        customHeight:'20',
        enableHover: true
    });
    $(".checkY").Custom({
        customStyleClass:'check',
        customHeight:'20',
        enableHover: true
    });
    $(".radioZ").Custom({
        customStyleClass:'radio2 greyRadBtn',
        customHeight:'15',
        enableHover: true
    });
    $(".radioQ").Custom({
        customStyleClass:'radio3 greyRadBtn',
        customHeight:'15',
        enableHover: true
    });

    $(".checkQ").Custom({
        customStyleClass:'check2',
        customHeight:'15',
        enableHover: true
    });
});