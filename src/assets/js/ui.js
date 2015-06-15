(function(ctx){

    var ui = {

        init: function(){

            this.pages();

        },

        pages: function(){

            $('.titleMenu > span').on('click', function(){
                if ($(this).attr('class') != 'active'){
                    $('.subMenu').slideUp();
                    $(this).next().slideToggle();
                    $('.titleMenu > span').removeClass('active');
                    $('.subMenu > li > span').removeClass('active');
                    $(this).addClass('active');
                }
            });

            $('.subMenu > li > span').on('click', function(){
                if ($(this).attr('class') != 'active'){
                    var dom = $(this).attr('id');
                    $( "#container" ).load( "src/assets/html/"+dom+".html" );
                    $( "#navRight" ).load( "src/assets/html/"+dom+"_menu.html" );
                    $('.subMenu > li > span').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }


    };

    ctx.ui = ui;
    var self = ui;

})(md);