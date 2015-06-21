(function(ctx){

    var ui;
    ui = {

        init: function () {

            this.aniBody();
            this.pages();
            this.hover();

        },

        pages: function () {

            $('.titleMenu > span').on('click', function () {
                if ($(this).attr('class') != 'active') {
                    $('.subMenu').slideUp();
                    $(this).next().slideToggle();
                    $('.titleMenu > span').removeClass('active');
                    $('.subMenu > li > span').removeClass('active');
                    $(this).addClass('active');
                } else {
                    $('.subMenu > li > span').removeClass('active');
                }
            });

            $('.subMenu > li > span').on('click', function () {
                if ($(this).attr('class') != 'active') {
                    var dom = $(this).attr('id');
                    $("#navRight").animate({width: 25 + '%'}, 800, 'easeOutBack');
                    $(this).attr('state', 'on');
                    $("#container").animate({width: 60 + '%'}, 800, 'easeOutBack');
                    $("#container").load("src/assets/html/" + dom + ".html");
                    $("#navRight").load("src/assets/html/" + dom + "_menu.html");
                    $('.subMenu > li > span').removeClass('active');
                    $(this).addClass('active');
                }
            });


            $("#nav > li > span ").on('click', function () {
                var dom = $(this).attr('id');
                $("#navRight").animate({width: 20 + '%'}, 800, 'easeOutBack');
                $(this).attr('state', 'off');
                $("#container").animate({width: 65 + '%'}, 800, 'easeOutBack');
                $("#container").load("src/assets/html/" + dom + ".html");
                $("#navRight").load("src/assets/html/" + dom + "_menu.html");

            });

            $(document).ready(function () {
                $("#navRight").animate({width: 20 + '%'}, 800, 'easeOutBack');
                $(this).attr('state', 'off');
                $("#container").animate({width: 65 + '%'}, 800, 'easeOutBack');
                $("#container").load("src/assets/html/intro.html");
                $("#navRight").load("src/assets/html/intro_menu.html");
            });


        },

        hover: function () {
            $(".menu_item").on('click', function () {
                if ($(this).attr('data') == 'off') {
                    var win_height = $(window).height();
                    $(".menu_item").attr('data', 'on');
                    $(".box_hover").css('height', win_height).addClass('box_hover_on');
                    $("#menu,#container,#navRight").css({'-webkit-filter': 'blur(5px)'});
                    $(".mInfo").each(function (index) {
                        (function (that, i) {
                            setTimeout(function () {
                                setTimeout(function () {
                                    $(that).animate({
                                            'opacity': 1,
                                            'padding': '40px 100px 40px 40px'
                                        },
                                        500,
                                        'easeOutBack',
                                        function () {
                                            $(that).animate({
                                                    'padding': '20px 50px 20px 20px'
                                                },
                                                500,
                                                'easeOutBack'
                                            );
                                        }
                                    );
                                }, 500 * i);
                            }, 300);
                        })(this, index);

                    });
                }

            });

            $("#onyva").on('click', function () {
                $(".box_hover").css('height', 0).removeClass('box_hover_on');
                $("#menu,#container,#navRight").css({'-webkit-filter': 'blur(0)'});
            });


        },

        aniBody: function(){
            $('a[href^="#"]').click(function(){
                console.log('a');
                var id = $(this).attr("href");
                var offset = $(id).offset().top
                $("html, body, #container").animate({scrollTop: offset}, 'slow');
                return false;
            });
        }


    };

    ctx.ui = ui;
    var self = ui;

})(md);