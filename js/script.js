$(function(){

    var on_off = false;

    $('.menu_btn').click(function(){

        on_off =!on_off;

        if(on_off){

            $('aside').animate({left:'0'}, 1000,'easeOutBounce')

            $('.t_stick, .b_stick').animate({top:'24px'},500,'easeOutExpo').animate({rotate:'45deg'},500,'easeOutExpo');

            $('m_stick').animate({rotate:'-45deg'},500,'easeOutExpo')

        }else{

            $('aside').animate({left:'-250px'}, 1000,'easeOutBounce');

            $('.stick').animate({rotate:'0'},500,'easeOutExpo');

            $('t_stick').animate({top:'15px'},500,'easeOutExpo');

            $('b_stick').animate({top:'33px'},500,'easeOutExpo');

        }



    });

});