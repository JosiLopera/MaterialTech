(function(ctx){

    var social = {

        easingIn:[
            'linear',
            'easeInSine',
            'easeInBack',
            'easeInElastic',
            'easeInBounce'
        ],

        easingOut:[
            'linear',
            'easeOutSine',
            'easeOutBack',
            'easeOutElastic',
            'easeOutBounce'
        ],

        top: {
            "animationIn": 'easeInBack',
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

        },

        left: {
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
        },

        right: {
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
        },

        bottom: {
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
        },

        setSocial:{
            "animationIn": undefined,
            "animationOut": undefined,
            "layout": undefined,
            "fontSize": undefined,
            "facebook": undefined,
            "facebook_link": undefined,
            "twitter": undefined,
            "twitter_link": undefined,
            "gplus": undefined,
            "gplus_link": undefined,
            "linkedin": undefined,
            "linkedin_link": undefined,
            "github": undefined,
            "github_link": undefined,
            'speedIn': undefined,
            'speedOut': undefined,
            'background':undefined
        },

        s_dom: "",
        elemPosition: null,
        elemWidth: null,
        elemHeight: null,
        i_dom: "",
        expression: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,


        init: function(){

            this.ui();
            this.setLayout();
            this.setAni();
            this.setBackground();
            this.setButton();
            this.showCode();
            this.setInputs();
        },

        ui: function() {
            $(document).ready(function(){
                var html = "";
                for (var i = 0; i < self.easingIn.length; i++) {
                    html = "<li class='elemEasing' data-easing='"+self.easingIn[i]+"'>"+self.easingIn[i]+"</li>";
                    $("#aniIn").append(html);
                }
                for (var i = 0; i < self.easingOut.length; i++) {
                    html = "<li class='elemEasing' data-easing='"+self.easingOut[i]+"'>"+self.easingOut[i]+"</li>";
                    $("#aniOut").append(html);
                }

            });

            $(".titleAniEasing").on('mouseenter', function(){
                $(this).find(".aniMenu").fadeIn("slow");
                $(this).parent().next().css({'margin-top': 10});
            });
            $(".titleAniEasing").on('mouseleave', function(){
                $(this).find(".aniMenu").fadeOut("fast");
                $(this).parent().next().css({'margin-top': 0});
            });

            $("#show_code").on('click', function(event){
                event.preventDefault();
                if(event.target.className.split(" ")[0] != "tCode"){
                    if($(this).attr('data')=="off"){
                        $(".colCode").fadeIn(100);
                        $(this).attr('data', 'on');
                    }else{
                        $(".colCode").fadeOut(100);
                        $(this).attr('data', 'off');
                    }
                }
            });

            $(".social").mt_social({'layout':"bottom"});

            self.s_dom = $(".social");
            self.i_dom = $(self.s_dom).html();
            console.log(self.i_dom);


            self.elemPosition = $(self.s_dom).position();
            self.elemWidth = $(self.s_dom).width();
            self.elemHeight = $(self.s_dom).height();
        },


        closeAni: function(){

            $("#socialCont").remove();
            self.s_dom.attr('data-status','off');
            self.s_dom.css({
                'width':self.elemWidth,
                'height': self.elemHeight,
                'top': self.elemPosition.top,
                'left': self.elemPosition.left
            });
            self.s_dom.html(self.i_dom);

        },

        setLayout: function(){
            $(".layout").on('click', function(){
                $(".social").off();
                self.closeAni();
                $(".layout").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setSocial.layout = val;
                self.setSocial.facebook = "yes";
                self.setSocial.twitter = "yes";
                self.setSocial.gplus = "yes";

                console.log(self.setSocial.layout);

                $(".btn_social_menu").removeClass('active').attr('data', 'no');
                $("#btn-facebook-menu, #btn-twitter-menu, #btn-gplus-menu").addClass('active').attr('data', 'yes');

                var code = self.setSocial;
                for (var prop in code) {
                    if(code.hasOwnProperty(prop)) {
                        if(prop !== "layout") {
                            code[prop] = undefined;
                            console.log(prop);
                        }
                    }
                };

                $(".social").off();
                $("#ani").prev("span").html(self[val].animation);
                $("#easingAniIn span").html(self[val].animationIn);
                $("#speedIn").val(self[val].speedIn);
                $("#speedSetIn").html(self[val].speedIn);
                $("#easingAniOut span").html(self[val].animationOut);
                $("#speedOut").val(self[val].speedOut);
                $("#speedSetOut").html(self[val].speedOut);
                $("#background").addClass('active').attr('data', 'yes').html('Yes');
                $(".social").mt_social(self.setSocial);
                console.log(self.setSocial);

            });
        },

        setAni: function(){
            $(".elemEasing").on('click', function(){
                var val = $(this).attr('data-easing'),
                    parentId = $(this).parent().attr('id'),
                    parent = $(this).parent(),
                    pSpan;

                $(".social").off();
                self.closeAni();

                if(parentId == "aniIn") {
                    self.setSocial.animationIn = val;
                    pSpan = $(this).parent().parent().find("span");
                    pSpan.html(val);
                    $(".social").mt_social(self.setSocial);
                }else if(parentId == "aniOut"){
                    self.setSocial.animationOut = val;
                    pSpan = $(this).parent().parent().find("span");
                    pSpan.html(val);
                    $(".social").mt_social(self.setSocial);
                }
                parent.fadeOut("fast");
                console.log(self.setSocial);

            });

            $("#speedIn").change(function(){
                $(".social").off();
                self.closeAni();
                var val = $(this).val();
                self.setSocial.speedIn = val;
                $("#speedSetIn").html(val);
                $(".social").mt_social(self.setSocial);
                console.log(val);
                console.log(self.setSocial);

            });

            $("#speedOut").change(function(){
                $(".social").off();
                self.closeAni();
                var val = $(this).val();
                self.setSocial.speedOut = val;
                $("#speedSetOut").html(val);
                $(".social").mt_social(self.setSocial);
                console.log(val);
                console.log(self.setSocial);

            });


        },

        setBackground: function(){
            $("#background").on('click', function(){
                $(".social").off();
                self.closeAni();
                var val = "";
                if($(this).attr('data')=='yes'){
                    $(this).html('No').removeClass('active').attr('data', 'no');
                    val = $(this).attr('data');
                    self.setSocial.background = val;
                    $(".social").mt_social(self.setSocial);
                    console.log(self.setSocial);
                }else{
                    $(this).html('Yes').addClass('active').attr('data', 'yes');
                    val = $(this).attr('data');
                    self.setSocial.background = val;
                    $(".social").mt_social(self.setSocial);
                    console.log(self.setSocial);

                }
            });
        },

        setButton: function(){
            $(".btn_social_menu").on('click', function(){
                var val = $(this).attr('data'),
                    valName = $(this).attr('data-name'),
                    diNone = $(this).next(),
                    iChild = $(this).next().children(".inputs_url"),
                    bChild = $(this).next().children(".btn_url"),
                    tId = $(this).attr('id');

                $(".social").off();
                self.closeAni();

                if(val == 'no'){
                    $(this).addClass('active').attr('data', 'yes');
                    self.setSocial[valName] = "yes";
                    $(diNone).removeClass('diNone');

                }else{
                    $(this).removeClass('active').attr('data', 'no');
                    self.setSocial[valName] = "no";
                    $(diNone).addClass('diNone');
                    $(iChild).val('');
                    $(bChild).removeClass('active');
                }

                $(".social").mt_social(self.setSocial);


            });
        },

        setInputs: function(){

            $(".btn_url").on('click', function () {
                var val = $(this).prev().val(),
                    btn_p = $(this).parent().prev().attr('data-name'),
                    fData = btn_p+"_link",
                    regex = new RegExp(self.expression),
                    that = $(this);

                $(".social").off();
                self.closeAni();

                if (val.match(regex) ) {
                    $(this).addClass('active');
                    self.setSocial[fData] = val;
                    md.code.getCodeSocial();
                    $("#showCodebox").html(md.code.textSocial);
                } else {
                    $(this).css({'background-color': 'red'});
                    setTimeout(function(){
                        $(that).css({'background-color': '#494e59'});
                    }, 200);
                    setTimeout(function(){
                        $(that).css({'background-color': 'red'});
                    }, 400);
                    setTimeout(function(){
                        $(that).css({'background-color': '#494e59'});
                    }, 600);
                    setTimeout(function(){
                        $(that).attr('style', '');
                    }, 700)
                }

                $(".social").mt_social(self.setSocial);

                console.log(self.setSocial);

            });

            $(".inputs_url").change(function () {
                var val = $(this).val(),
                    t_next = $(this).next();
                    regex = new RegExp(self.expression);

                if (!val.match(regex) ) {
                    $(t_next).removeClass('active');
                } else {
                    console.log(val);

                }


            });

        },

        showCode: function(){
            $("#show_code").on('click', function(){
                md.code.getCodeSocial();
                $("#showCodebox").html(md.code.textSocial);
                console.log(md.code.textSocial);
            });
            $(".layout").on('click', function(){
                var valText = $(this).attr('data');
                if(valText == "bottom"){
                    $("#showCodebox").html("$(my_target).mt_social({});");
                }else{
                    $("#showCodebox").html('$(my_target).mt_social({<br>"layout":"'+valText+'"});');
                }
            });

            $(".elemEasing, .btn_social_menu, #background").on('click',function(){
                md.code.getCodeSocial();
                $("#showCodebox").html(md.code.textSocial);
            });
            $("#speedOut, #speedIn").change(function(){
                md.code.getCodeSocial();
                $("#showCodebox").html(md.code.textSocial);
            });


        }



    };

    ctx.social = social;
    var self = social;

})(md);