(function($){

    $.fn.mt_social=function(options){

        var the_dom,
            the_dom_Width,
            the_dom_Height,
            the_dom_pos,
            the_dom_zindex,
            the_i_position,
            the_dom_Fsize,
            the_dom_radius,
            the_dom_background,
            eleWidth,
            eleHeight,
            elem_pos_top,
            elem_pos_left,
            iElem_pos_top,
            eleTotal,
            the_dom_size_ani_width,
            the_dom_size_ani_height,
            iClose,
            i_dom,
            btn_social,
            color = "";

        var top = {
            "animationIn": 'easeInElastic',
            "animationOut": 'easeOutElastic',
            "layout": "top",
            "fontSize": undefined,
            "facebook": "yes",
            "facebook_link": "",
            "twitter": "yes",
            "twitter_link": "",
            "gplus": "yes",
            "gplus_link": "",
            "linkedin": "no",
            "linkedin_link": "",
            "github": "no",
            "github_link": "",
            'speedIn': 500,
            'speedOut': 200,
            'background':"no"

        };

        var left = {
            "animationIn": 'easeInBounce',
            "animationOut": 'easeOutBounce',
            "layout": "left",
            "fontSize": undefined,
            "facebook": "yes",
            "facebook_link": "",
            "twitter": "yes",
            "twitter_link": "",
            "gplus": "yes",
            "gplus_link": "",
            "linkedin": "no",
            "linkedin_link": "",
            "github": "no",
            "github_link": "",
            'speedIn': 500,
            'speedOut': 200,
            'background':"yes"
        };

        var right = {
            "animationIn": 'easeInBack',
            "animationOut": 'easeOutBack',
            "layout": "right",
            "fontSize": undefined,
            "facebook": "yes",
            "facebook_link": "",
            "twitter": "yes",
            "twitter_link": "",
            "gplus": "yes",
            "gplus_link": "",
            "linkedin": "no",
            "linkedin_link": "",
            "github": "no",
            "github_link": "",
            'speedIn': 500,
            'speedOut': 200,
            'background':"no"
        };

        var bottom = {
            "animationIn": 'easeInSine',
            "animationOut": 'easeOutSine',
            "layout": "bottom",
            "fontSize": undefined,
            "facebook": "yes",
            "facebook_link": "",
            "twitter": "yes",
            "twitter_link": "",
            "gplus": "yes",
            "gplus_link": "",
            "linkedin": "no",
            "linkedin_link": "",
            "github": "no",
            "github_link": "",
            'speedIn': 500,
            'speedOut': 200,
            'background':"yes"
        };

        var parametres=$.extend(bottom, options),
            socialCont = $('<div id="socialCont"></div>'),
            facebook = $('<a id="btn-facebook" class="btn_social" href="'+parametres.facebook_link+'" target="_blank"><i class="fa fa-facebook"></i></a>'),
            twitter = $('<a id="btn-twitter" class="btn_social" href="'+parametres.twitter_link+'" target="_blank"><i class="fa fa-twitter"></i></a>'),
            gplus = $('<a id="btn-gplus" class="btn_social" href="'+parametres.gplus_link+'" target="_blank"><i class="fa fa-google"></i></a>'),
            linkedin = $('<a id="btn-linkedin" class="btn_social" href="'+parametres.linkedin_link+'" target="_blank"><i class="fa fa-linkedin"></i></a>'),
            github = $('<a id="btn-github" class="btn_social" href="'+parametres.github_link+'" target="_blank"><i class="fa fa-github"></i></a>'),
            all_btn= [];

        if(parametres.layout == undefined || parametres.layout == "bottom"){
            parametres=$.extend(bottom, options);
        }else if(parametres.layout == "left"){
            parametres=$.extend(left, options);
        }else if(parametres.layout == "right"){
            parametres=$.extend(right, options);
        }else if(parametres.layout == "top"){
            parametres=$.extend(top, options);
        }

        setDom();

        function setDom(){
            $('#container').append(socialCont);

            var code = parametres;
            for (var prop in code) {
                if(code.hasOwnProperty(prop)) {
                    if(prop == "facebook" || prop == "twitter" || prop == "gplus" || prop == "linkedin" || prop == "github") {
                        if(code[prop] == "yes"){
                            var eleProp = eval(prop);
                            all_btn.push(eleProp);
                        };
                    }
                }
            };
            console.log(all_btn);

            for (var i = 0; i < all_btn.length; i++) {
                $(all_btn[i]).css({'opacity':0});
                $('#socialCont').append(all_btn[i]);
            }
        }



        $(this).on('click', function (e) {
            e.preventDefault();
            the_dom = $(this);

            //setDom();

            if ($(the_dom).attr('data-status') !== undefined) {
                if(the_dom.attr('data-status')=="off"){
                    socialEvent(e);
                    the_dom.attr('data-status','on');
                    console.log('on');

                }else {
                    closeAni(e);
                    the_dom.attr('data-status', 'off');
                    console.log('off');
                }
            }else{
                the_dom.attr('data-status','off');
                socialEvent(e);
                the_dom.attr('data-status','on');
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

        function socialEvent(){

            if(parametres.fontSize == undefined){
                parametres.fontSize = 30;
            }

            the_dom_Width = the_dom.width();
            the_dom_Height = the_dom.height();
            the_dom_pos = the_dom.position();
            the_dom_zindex = the_dom.css('z-index');
            the_i_position = the_dom.find('i').position();
            the_dom_Fsize = parametres.fontSize;
            the_dom_radius = the_dom.css('border-radius');
            the_dom_background = the_dom.css('background-color');
            eleWidth = the_dom_Width - (the_dom_Width/3);
            eleHeight = the_dom_Height - (the_dom_Height/3);
            elem_pos_top = (the_dom_Height - eleHeight)/2;
            elem_pos_left = (the_dom_Width - eleWidth)/ 2;
            iElem_pos_top = (eleHeight - the_dom_Fsize)/ 2;
            btn_social = $(".btn_social");
            eleTotal = btn_social.length;
            the_dom_size_ani_width = (the_dom_Width - eleWidth) / eleTotal;
            the_dom_size_ani_height = (the_dom_Height - eleHeight) / eleTotal;
            iClose = '<i class="fa fa-times"></i>';
            i_dom  = the_dom.html();

            if(the_dom_zindex == 'auto' || the_dom_zindex == undefined){
                the_dom_zindex = 1000;
            }

            the_dom.css({'z-index': the_dom_zindex});

            console.log(the_dom_background);

            hexc(the_dom_background);
            the_dom_background = color;



            console.log(the_dom_background);
            console.log(the_dom_zindex - 1);
            console.log(the_dom_pos.left);
            console.log(eleHeight);


            var style = {
                'width': eleWidth,
                'height': eleHeight,
                'position': 'absolute',
                'display':'inherit',
                'border-radius': the_dom_radius,
                'opacity':1,
                'text-align': 'center',
                'left':elem_pos_left,
                'top': elem_pos_top/2,
                'z-index': the_dom_zindex - 1,
                'overflow': 'auto',
                'font-size': parametres.fontSize,
                'color': '#ffffff'
            };

            var iStyle={
                'top':iElem_pos_top,
                'position': 'relative'
            };


            if(parametres.background == "yes"){
                console.log(parametres.background);
                btn_social.css({'background-color':the_dom_background});
            }else{
                $("#btn-facebook").css('background-color', '#3b5998');
                $("#btn-twitter").css('background-color', '#55acee');
                $("#btn-gplus").css('background-color', '#d34836');
                $("#btn-linkedin").css('background-color', '#0077b5');
                $("#btn-github").css('background-color', '#555555');
            }

            btn_social.css(style);
            btn_social.find('i').css(iStyle);

            console.log(btn_social);

            $(btn_social).each(function(index) {
                (function(that, i) {
                    $(iClose).css(iStyle);
                    the_dom.html(iClose);
                    the_dom.find('i').animate(
                        {'top':iElem_pos_top },
                        parametres.speedOut*eleTotal,
                        'easeOutBack'
                    );
                    setTimeout(function() {
                        var cStyle = {
                            'height':the_dom_Height,
                            'width': the_dom_Width,
                            'position': 'absolute',
                            'top': the_dom_pos.top,
                            'left': the_dom_pos.left

                        };
                        socialCont.css(cStyle);

                        if(parametres.layout == 'bottom'){
                            $(that).animate(
                                {'top': the_dom_Height+eleHeight*i},
                                parametres.speedOut,
                                parametres.animationOut
                            );

                            $(the_dom).animate({
                                    'width': the_dom_Width - the_dom_size_ani_width *i,
                                    'height': the_dom_Height - the_dom_size_ani_height *i,
                                    'top':the_dom_pos.top + the_dom_size_ani_height *i,
                                    'left':the_dom_pos.left + (the_dom_size_ani_width/2) *i
                                },
                                parametres.speedOut,
                                parametres.animationOut
                            );
                        }else if(parametres.layout == 'right'){
                            $(that).animate(
                                {'left': the_dom_Width+eleWidth*i },
                                parametres.speedOut,
                                parametres.animationOut);
                            $(the_dom).animate({
                                    'width': the_dom_Width - the_dom_size_ani_width *i,
                                    'height': the_dom_Height - the_dom_size_ani_height *i,
                                    'top':the_dom_pos.top + (the_dom_size_ani_height/4) *i,
                                    'left':the_dom_pos.left + the_dom_size_ani_width *i
                                },
                                parametres.speedOut,
                                parametres.animationOut);
                        }else if(parametres.layout == 'top'){
                            $(that).animate(
                                {'top': -eleHeight-eleHeight*i },
                                parametres.speedOut,
                                parametres.animationOut);
                            $(the_dom).animate({
                                    'width': the_dom_Width - the_dom_size_ani_width *i,
                                    'height': the_dom_Height - the_dom_size_ani_height *i,
                                    'top':the_dom_pos.top,
                                    'left':the_dom_pos.left + (the_dom_size_ani_width/2) *i
                                },
                                parametres.speedOut,
                                parametres.animationOut);
                        }else if(parametres.layout == 'left'){
                            $(that).animate(
                                {'left': -eleWidth-eleWidth*i},
                                parametres.speedOut,
                                parametres.animationOut);
                            $(the_dom).animate({
                                    'width': the_dom_Width - the_dom_size_ani_width *i,
                                    'height': the_dom_Height - the_dom_size_ani_height *i,
                                    'top':the_dom_pos.top + (the_dom_size_ani_height/4) *i,
                                    'left':the_dom_pos.left
                                },
                                parametres.speedOut,
                                parametres.animationOut);
                        }

                    }, parametres.speedOut * i);
                })(this, index);
            });

        }

        function closeAni() {

            console.log(the_dom);

            $(btn_social.get().reverse()).each(function (index) {
                (function (that, i) {
                    the_dom.html(i_dom);
                    setTimeout(function () {
                        if(parametres.layout == undefined || parametres.layout == 'bottom' || parametres.layout == 'top') {
                            $(that).animate({
                                    'top': 0,
                                    'margin-top': 0
                                },
                                parametres.speedIn,
                                parametres.animationIn
                            );
                        }else if(parametres.layout == 'right' || parametres.layout == 'left'){
                            $(that).animate({
                                    'left': 0,
                                    'margin-left': 0
                                },
                                parametres.speedIn,
                                parametres.animationIn
                            );
                        }
                        $(the_dom).animate({
                                'width': the_dom_Width - eleTotal +i,
                                'height': the_dom_Height - eleTotal +i,
                                'top':the_dom_pos.top,
                                'left':the_dom_pos.left
                            },
                            parametres.speedIn,
                            parametres.animationIn);

                    }, parametres.speedIn * i);
                })(this, index);
            });

            setTimeout(function(){
                btn_social.attr('style', '');
                btn_social.css('display', 'none');
                socialCont.attr('style', '');
            },parametres.speedIn * eleTotal + 100);

        }
    }
})(jQuery);







