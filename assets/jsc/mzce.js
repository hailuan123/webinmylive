$(function(){
    var i = 1;
    var n = $('.ser-icon .process .item').length;
    var len = $('.ser-icon .process').width()/n;
    var pos = new WebKitCSSMatrix($('.ser-icon .process').css('transform'));
    $('.ser-icon').removeClass('unsee');
    function nextFrame() {
        if(i < n) {
            i++;
            var pos2=new WebKitCSSMatrix($('.ser-icon .process').css('transform'));
            $('.ser-icon .process').css('transform','translateX('+(pos2.m41-len)+'px)');
            setTimeout(nextFrame, 1000);
        }
        else{
            i=1;
            $('.ser-icon .process').css('transform','translateX('+(pos.m41)+'px)');
            setTimeout(beginFrame, 2000);
        }
    }
    function beginFrame(){
        $('.ser-icon').removeClass('unsee');
        setTimeout(nextFrame, 1000);
    }
    setTimeout(beginFrame, 2000);
    $('.close-icon').click(function(event) {
        $('.element').removeClass('unsee');
        $('.bg_fade').addClass('unsee');
    });
    $('.bg_fade').click(function(event) {
        $('.element').addClass('unsee');
        $('.bg_fade').removeClass('unsee');
    });
});
