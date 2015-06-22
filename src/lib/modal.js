(function($){

    $.fn.mt_modal=function(options){

        var the_dom,
            contWidth,
            contHeight,
            posEleWidth,
            posEleHeight,
            elemBackground,
            the_dom_width,
            the_dom_height,
            the_dom_position,
            the_dom_radius,
            the_dom_zIndex,
            toggle = "off",
            color = "";

        var center={
            "speed1": 500,
            "speed2": 800,
            "speed3": 2000,
            "animation1" : 'easeOutBack',
            "animation2" : 'easeOutSine',
            "animation3" : 'easeOutBounce',
            "zIndex" : 1000,
            "layout" : "center",
            "container" : "#container",
            "closeColor": "#484d4d",
            "closeSize" : 30,
            "splitClass" : "splitClass",
            "finalBackground" : undefined,
            "style" : undefined

        };

        var left={
            "speed1": 500,
            "speed2": 1000,
            "animation1" : 'linear',
            "animation2" : 'easeOutBounce',
            "zIndex" : 1000,
            "layout" : "left",
            "container" : "#container",
            "closeColor": "#484d4d",
            "closeSize" : 30,
            "splitClass" : "splitClass",
            "width" : undefined,
            "finalBackground" : undefined,
            "style" : undefined
        };

        var top={
            "speed1": 500,
            "speed2": 1000,
            "animation1" : 'easeOutBounce',
            "animation2" : 'easeOutSine',
            "zIndex" : 1000,
            "layout" : "top",
            "container" : "#container",
            "closeColor": "#484d4d",
            "closeSize" : 30,
            "splitClass" : "splitClass",
            "height" : undefined,
            "finalBackground" : undefined,
            "style" : undefined
        };

        var right={
            "speed1": 500,
            "speed2": 1000,
            "animation1" : 'easeOutBack',
            "animation2" : 'easeOutBounce',
            "zIndex" : 1000,
            "layout" : "right",
            "container" : "#container",
            "closeColor": "#484d4d",
            "closeSize" : 30,
            "splitClass" : "splitClass",
            "width" : undefined,
            "finalBackground" : undefined,
            "style" : undefined
        };

        var bottom={
            "speed1": 500,
            "speed2": 1000,
            "animation1" : 'easeOutElastic',
            "animation2" : 'linear',
            "zIndex" : 1000,
            "layout" : "bottom",
            "container" : "#container",
            "closeColor": "#484d4d",
            "closeSize" : 30,
            "splitClass" : "splitClass",
            "height" : undefined,
            "finalBackground" : undefined,
            "style" : undefined
        };

        var parametres=$.extend(center, options);

        if(parametres.layout == undefined || parametres.layout == "center"){
            parametres=$.extend(center, options);
        }else if(parametres.layout == "left"){
            parametres=$.extend(left, options);
        }else if(parametres.layout == "right"){
            parametres=$.extend(right, options);
        }else if(parametres.layout == "top"){
            parametres=$.extend(top, options);
        }else if(parametres.layout == "bottom"){
            parametres=$.extend(bottom, options);
        }

        var tClass = '"'+parametres.splitClass+'"';
        console.log(toggle);

        $(this).on('click', function (e) {
            e.preventDefault();
            the_dom = $(this);

            getElem(e);

            if (toggle == 'off') {
                if(e.target.className.split(" ")[0] != "splitClass") {
                    modalEvent(e);
                    toggle = "on";
                    console.log(toggle);
                }
            }
        });

        function hexc(colorval) {
            var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete(parts[0]);
            for (var i = 1; i <= 3; ++i) {
                parts[i] = parseInt(parts[i]).toString(16);
                if (parts[i].length == 1) parts[i] = '0' + parts[i];
            }
            color = '#' + parts.join('');
        }

        function modalEvent(){

            console.log(parametres.container);

            var eleWidth = the_dom.width()/2,
                eleHeight = the_dom.height()/ 2;

            elemBackground = the_dom.css('backgroundColor');

            console.log(eleWidth);
            console.log(contWidth);
            console.log(elemBackground);

            hexc(elemBackground);
            elemBackground = color;


            if(parametres.finalBackground == undefined){
                parametres.finalBackground = elemBackground;
            }

            console.log(parametres.finalBackground);

            if(parametres.layout == "center") {
                if(parametres.container == undefined){
                    contWidth = $(window).width();
                    contHeight = $(window).height();
                }else{
                    contWidth = $(parametres.container).width();
                    contHeight = $(parametres.container).height();
                }

                posEleWidth = (contWidth/2)-eleWidth;
                posEleHeight = (contHeight/2)-eleHeight;

                the_dom.animate({
                        top: posEleHeight
                    },
                    parametres.speed1,
                    parametres.animation1,
                    function () {
                        the_dom.animate({
                                left: posEleWidth
                            },
                            parametres.speed2,
                            parametres.animation2,
                            function () {
                                the_dom.animate({
                                        width: contWidth,
                                        height: contHeight,
                                        top: 0,
                                        left: 0,
                                        'border-radius': 0

                                    },
                                    parametres.speed3,
                                    parametres.animation3
                                ).css({zIndex: parametres.zIndex, 'backgroundColor': parametres.finalBackground});
                            }
                        );
                    }
                );

                setTimeout(function(){
                    if(close.length == 0){
                        closeBtn();
                    }
                }, 1000);



            }else if(parametres.layout == "left"){

                if(parametres.width == undefined){
                    contWidth = 300;
                }else{
                    contWidth = parametres.width;
                }

                if(parametres.container == undefined){
                    contHeight = $(window).height();
                }else{
                    contHeight = $(parametres.container).height();
                }

                posEleHeight = (contHeight/2)-eleHeight;

                the_dom.animate({
                        top: posEleHeight
                    },
                    parametres.speed1,
                    parametres.animation1,
                    function () {
                        the_dom.animate({
                                left: 0,
                                top: 0,
                                width: contWidth,
                                height: contHeight,
                                'border-radius': 0
                            },
                            parametres.speed2,
                            parametres.animation2
                        ).css({zIndex: parametres.zIndex, 'backgroundColor': parametres.finalBackground});
                    }
                );
                setTimeout(function(){
                    if(close.length == 0){
                        closeBtn();
                    }
                }, 1000);

            }else if(parametres.layout == "right"){

                var elementWidth;

                if(parametres.container == undefined){
                    contWidth = $(window).width();
                    contHeight = $(window).height();
                }else{
                    contWidth = $(parametres.container).width();
                    contHeight = $(parametres.container).height();
                }

                if(parametres.width == undefined){
                    elementWidth = 300;
                }else{
                    elementWidth = parametres.width;
                }

                posEleWidth = contWidth-elementWidth;
                posEleHeight = (contHeight/2)-eleHeight;

                the_dom.animate({
                        top: posEleHeight
                    },
                    parametres.speed1,
                    parametres.animation1,
                    function () {
                        the_dom.animate({
                                top: 0,
                                left: posEleWidth,
                                width: elementWidth,
                                height: contHeight,
                                'border-radius': 0
                            },
                            parametres.speed2,
                            parametres.animation2
                        ).css({zIndex: parametres.zIndex, 'backgroundColor': parametres.finalBackground});
                    }

                );
                setTimeout(function(){
                    if(close.length == 0){
                        closeBtn();
                    }
                }, 1000);


            }else if(parametres.layout == "top"){

                if(parametres.container == undefined){
                    contWidth = $(window).width();
                }else{
                    contWidth = $(parametres.container).width();
                }

                if(parametres.height == undefined){
                    contHeight = 200;
                }else{
                    contHeight = parametres.height;
                }

                posEleWidth = (contWidth/2)-eleWidth;
                posEleHeight = eleHeight-the_dom.height();

                the_dom.animate({
                        left: posEleWidth
                    },
                    parametres.speed1,
                    parametres.animation1,
                    function () {
                        the_dom.animate({
                                top:0,
                                left: 0,
                                width: contWidth,
                                height: contHeight,
                                'border-radius': 0
                            },
                            parametres.speed2,
                            parametres.animation2
                        ).css({zIndex: parametres.zIndex, 'backgroundColor': parametres.finalBackground});
                    }
                );
                setTimeout(function(){
                    if(close.length == 0){
                        closeBtn();
                    }
                }, 1000);

            }else if(parametres.layout == "bottom"){

                var elementHeight;

                if(parametres.container == undefined){
                    contWidth = $(window).width();
                    contHeight = $(window).height();
                }else{
                    contWidth = $(parametres.container).width();
                    contHeight = $(parametres.container).height();
                }

                if(parametres.height == undefined){
                    elementHeight = 200;
                }else{
                    elementHeight = parametres.height;
                }

                posEleWidth = (contWidth/2)-eleWidth;

                posEleHeight = contHeight-elementHeight;

                console.log(contHeight);
                console.log(elementHeight);
                console.log(posEleHeight);


                the_dom.animate({
                        left: posEleWidth
                    },
                    parametres.speed1,
                    parametres.animation1,
                    function () {
                        the_dom.animate({
                                top: posEleHeight - the_dom_height,
                                left: 0,
                                width: contWidth,
                                height: elementHeight,
                                'border-radius': 0
                            },
                            parametres.speed2,
                            parametres.animation2
                        ).css({zIndex: parametres.zIndex, 'backgroundColor': parametres.finalBackground});

                    }
                );

                setTimeout(function(){
                    if(close.length == 0){
                        closeBtn();
                    }
                }, 1000);
            }


        }

        function getElem(){
            if(toggle == 'off'){
                the_dom_width = the_dom.width();
                the_dom_height = the_dom.height();
                the_dom_position = the_dom.position();
                the_dom_radius = the_dom.css('border-radius');
                the_dom_zIndex = the_dom.css('z-index');
            }

        }

        function closeAni(){
            $("#close").on('click', function(){
                console.log(the_dom_zIndex);
                toggle = "off";
                $(this).remove();

                    the_dom.animate({
                            width: the_dom_width,
                            height: the_dom_height,
                            top: the_dom_position.top,
                            left: the_dom_position.left,
                            'border-radius': the_dom_radius,
                            'z-index':the_dom_zIndex
                        },
                        parametres.speed2,
                        parametres.animation2
                    ).css({'backgroundColor': elemBackground});
            });
        }

        function closeBtn(){

            var htmlClose = '<i id="close" class="'+parametres.splitClass+' fa fa-times"></i>';

            var styleClose = {
                position: 'relative',
                top: "15px",
                color: parametres.closeColor,
                cursor: 'pointer',
                'font-size': parametres.closeSize+"px",
                'z-index': parametres.zIndex + 1
            };


            the_dom.append(htmlClose);

            var close = $("#close");

            close.css(styleClose);


            var closeWidth = close.width();

            if(parametres.layout == "right"){
                closePosLeft = 15;
            }else{
                closePosLeft = (contWidth - closeWidth) - 15;
            }


            close.css({left:closePosLeft});

            closeAni();

        }


    };
})(jQuery);







