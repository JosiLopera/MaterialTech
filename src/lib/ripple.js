(function($){

    $.fn.mt_ripple=function(options){

        var the_dom;

        var watter={
            "action": "click",
            "limit" : undefined,
            "color": "#000000",
            "speed": 10,
            "class": undefined,
            "Zindex": 10000,
            "border" : 40,
            "opacity": 0.2,
            "layout": "watter",
            "style": "double",
            "delay": 150,
            "time": 500,
            "borderStyle": "solid"
        };

        var basic = {
            "action": "click",
            "limit" : undefined,
            "color": "#000000",
            "speed": 10,
            "class": undefined,
            "Zindex": 10000,
            "border" : 40,
            "opacity": 0.2,
            "layout": "basic",
            "style": "solid",
            "delay": 150,
            "time": 1000,
            "borderStyle": "solid"
        };

        var light = {
            "action": "click",
            "limit" : undefined,
            "color": "#ffffff",
            "speed": 5,
            "class": undefined,
            "Zindex": 10000,
            "border" : 40,
            "opacity": 0.5,
            "layout": "light",
            "style": "solid",
            "delay": 150,
            "time": 5,
            "borderStyle": "solid"
        };

        var strong = {
            "action": "click",
            "limit" : undefined,
            "color": "#000000",
            "speed": 30,
            "class": undefined,
            "Zindex": 10000,
            "border" : 40,
            "opacity": 0.6,
            "layout": "strong",
            "style": "solid",
            "delay": 150,
            "time": 1500,
            "borderStyle": "solid"
        };

        var parametres=$.extend(basic, options);

        if(parametres.layout == undefined || parametres.layout == "basic"){
            parametres=$.extend(basic, options);
        }else if(parametres.layout == "watter"){
            parametres=$.extend(watter, options);
        }else if(parametres.layout == "light"){
            parametres=$.extend(light, options);
        }else if(parametres.layout == "strong"){
            parametres=$.extend(strong, options);
        };


        $(this).on(parametres.action, function (e) {
            e.preventDefault();
            the_dom = $(this);

            rippleEvent(e);

            console.log(parametres.borderStyle);

        });

        function rippleEvent(e) {
            console.log(parametres.limit);
            console.log(parametres.color);
            console.log(parametres.speed);
            console.log(parametres.layout);


            //var the_dom = $(this);

            console.log(the_dom);
            // Get custom color for ripple effect
            if (typeof parametres.color == 'undefined') {
                var color = '#000000';
            }

            // Get ripple radius
            if (typeof radius == 'undefined') {
                var radius = 0;
            }

            // Get the clicked element and the click positions
            if (typeof parametres.limit == 'undefined') {
                var the_dom_limit = the_dom;
            } else {
                var the_dom_limit = the_dom.closest(parametres.limit);
            }

            var the_dom_offset = the_dom_limit.offset(),
                click_x = e.pageX,
                click_y = e.pageY,
                radius = the_dom_limit.css('border-radius');

            console.log(radius);

            console.log(the_dom_offset);

            // Get the width and the height of clicked element
            var the_dom_width = the_dom_limit.outerWidth(),
                the_dom_height = the_dom_limit.outerHeight(),
                ripple_effect_wrap = $('<span class="ripple-effect-wrap"></span>');

            ripple_effect_wrap.css({
                'width': the_dom_width,
                'height': the_dom_height,
                'position': 'absolute',
                'top': the_dom_offset.top,
                'left': the_dom_offset.left,
                'z-index': parametres.Zindex,
                'overflow': 'hidden',
                'background-clip': 'padding-box',
                '-webkit-border-radius': radius,
                'border-radius': radius
            });

            // Adding custom class
            var ripple_effect_wrap_class = parametres.class;

            if (typeof ripple_effect_wrap_class != 'undefined') {
                ripple_effect_wrap.addClass(ripple_effect_wrap_class);
            }

            // Append the ripple effect wrap
            ripple_effect_wrap.appendTo('body');

            // Determine the position of the click relative to the clicked element
            var click_x_ripple = click_x - the_dom_offset.left,
                click_y_ripple = click_y - the_dom_offset.top,
                circular_width = 1000,
                ripple = $('<span class="ripple"></span>'),
                ripple2 = $('<span class="ripple2"></span>'),
                t = parametres.speed;

            var style = {
                'width': circular_width,
                'height': circular_width,
                'opacity': parametres.opacity,
                'position': 'absolute',
                'top': click_y_ripple - ( circular_width / 2 ),
                'left': click_x_ripple - ( circular_width / 2 ),
                'content': '',
                'background-clip': 'padding-box',
                '-webkit-border-radius': '50%',
                'border-radius': '50%',
                '-webkit-animation-name': 'ripple_animation',
                'animation-name': 'ripple_animation',
                '-webkit-animation-duration': t+"s",
                'animation-duration': t+"s",
                '-webkit-animation-fill-mode': 'both',
                'animation-fill-mode': 'both'
            };

            console.log(t);

            var solidStyle = {
                'background': parametres.color
            };

            var borderStyle = {
                'border': parametres.border+'px '+parametres.borderStyle+parametres.color
            };
            var borderStyle2 = {
                'border': parametres.border+'px '+parametres.borderStyle+parametres.color,
                'z-index': parametres.Zindex+1
            };
            var mix = {
                'background': parametres.color,
                'z-index': parametres.Zindex+1
            }

            ripple.css(style);
            ripple2.css(style);

            //style selector
            if(parametres.style == "single"){
                ripple.css(borderStyle);
                $('.ripple-effect-wrap:last').append(ripple);
            }else if(parametres.style == "solid"){
                ripple.css(solidStyle);
                $('.ripple-effect-wrap:last').append(ripple);
            }else if(parametres.style == "double"){
                ripple.css(borderStyle);
                $('.ripple-effect-wrap:last').append(ripple);
                setTimeout(function(){
                    ripple2.css(borderStyle2);
                    $('.ripple-effect-wrap:last').append(ripple2);
                }, parametres.delay);
            }else if(parametres.style == "mixed"){
                ripple.css(borderStyle);
                $('.ripple-effect-wrap:last').append(ripple);
                setTimeout(function(){
                    ripple2.css(mix);
                    $('.ripple-effect-wrap:last').append(ripple2);
                }, parametres.delay);
            };

            // Remove rippling component after half second
            setTimeout(function () {
                ripple_effect_wrap.fadeOut(function () {
                    $(this).remove();
                });
            }, parametres.time);

            // Get the href
            // Check target state and set default
            var href = the_dom.attr('href');
            var target = the_dom.attr('target');
            if (!target) {
                target = '_self';
            }
            // Safari appears to ignore all the effect if the clicked link is not prevented using preventDefault()
            // To overcome this, preventDefault any clicked link
            // If this isn't hash, redirect to the given link
            if (typeof href != 'undefined' && href.substring(0, 1) != '#') {
                setTimeout(function () {
                    window.open(href, target);
                }, parametres.time);
            }

            // Ugly manual hack to fix input issue
            if (the_dom.is('input') || the_dom.is('button')) {
                setTimeout(function () {
                    the_dom.removeClass('ripple-effect');
                    the_dom.trigger('click');
                    the_dom.addClass('ripple-effect');
                }, parametres.time);
            }
        };

    };
})(jQuery);