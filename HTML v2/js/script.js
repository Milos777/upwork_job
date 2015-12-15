

$(document).ready(function(){
    //tMenu
	$('.tNav .aMob').click(function(){
		$(this).next('ul').slideToggle(300).toggleClass('open');
    return false;
	});

    //for btnComm
    $('.btnComm').click(function(){
        if($(this).hasClass('act')){
            $(this).removeClass('act').closest('li').find('.commJaw').slideUp();
        } else{
            $(this).addClass('act').closest('li').find('.commJaw').slideDown();
        };
        return false;
    });



    //colorPicker

    $('.pickColor').delegate('.lColor:not(.act)', 'click', function() {
        $('.pickColor .lColor').removeClass('act');
        $(this).addClass('act');
    });

    //aSel button

    $('.aSel').click(function(){
        if($(this).hasClass('act')){
            $(this).removeClass('act').text('Select');
        } else{
            $(this).addClass('act').text('Selected');
        };
        return false;
    });

    //days select
    $('.days').delegate('a:not(.act)', 'click', function() {
        $('.days a').removeClass('act');
        $(this).addClass('act');
        return false;
    });

    //tabs select
    $('ul.uTabs').delegate('li:not(.act)', 'click', function() {
        $(this).addClass('act').siblings().removeClass('act').parents('div.jaw').find('div.box').hide().eq($(this).index()).fadeIn(150);
    });

    $('.greyRadBtn').click(function(){
        $(this).closest('.grayRad').find('.grey').removeClass('grey');
        $(this).closest('.grayRadIn').addClass('grey');
        return true;
    });

    $('ul.usMenu').delegate('li:not(.act)', 'click', function() {
        $(this).addClass('act').siblings().removeClass('act').closest('div.jaw').find('div.bam').hide().eq($(this).index()).fadeIn(150);

    });

    //like btn
    $('.comm .like').click(function(){
        $(this).toggleClass('act');
    });

    //interBopards
    $('ul.uITab').delegate('li:not(.act)', 'click', function() {
        $(this).addClass('act').siblings().removeClass('act').closest('div.jaw').find('div.box3').hide().eq($(this).index()).fadeIn(150);
    });

    //members

    $('.members .iDel').click(function(){
        $(this).closest('li').remove();
    });

    // openbox
    $('.btnComm').click(function(){
        $(this).parent().find('div').fadeIn(250);
    });
    $('.faClose').click(function(){
        $(this).parent().fadeOut(150);
    });

    //sort dropdown options

    $('.sortBy .by,.sortBy .to,.sortIt .by,.sortIt .to').click(function(){
        $(this).parent().find('ul').slideToggle(150);
    });
    $('.sortBy .sbDD,.sortIt .sbDD').delegate('li:not(.act)', 'click', function() {
        $(this).addClass('act').siblings().removeClass('act');
        $(this).closest('div').addClass('act').find('.to').text($(this).text());
        $(this).closest('ul').slideToggle(150);
    });

    // select job grid

    $('.uWorks .btnSelect').click(function(){
        $(this).closest('li').toggleClass('act');
        return false;
    });
    $('.uWorks2 .btnSelect2').click(function(){
        $(this).closest('li').toggleClass('act');
        return false;
    });

    $('.uWorks2 .btnSelect').click(function(){
        $(this).closest('li').toggleClass('open');
        return false;
    });
    $('.uWorks2 .btnMin').click(function(){
        $(this).closest('li').toggleClass('open');
        return false;
    });


    $('.seaHead').click(function(){
        $(this).parent().toggleClass('act');
        return false;
    });

    //select design
    $('.btnTrophy').click(function(){
        $(this).closest('li').toggleClass('banAct');
        return false;
    });



});
$(document).ready(function() {
$('.question1').click(function(){
	$('.new_member_box_display').html($('#answer1').html());
})

$('.question2').click(function(){
	$('.new_member_box_display').html($('#answer2').html());
})

$('.question3').click(function(){
	$('.new_member_box_display').html($('#answer3').html());
})

$('.question4').click(function(){
	$('.new_member_box_display').html($('#answer4').html());
})

});//end of ready
