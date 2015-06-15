(function(ctx){

    var social = {

        easing:[
            'linear',
            'easeInSine',
            'easeOutSine',
            'easeInBack',
            'easeOutBack',
            'easeInElastic',
            'easeOutElastic',
            'easeInBounce',
            'easeOutBounce'
        ],

        setSocial:{
            "animation": undefined,
            "layout": undefined,
            "fontSize": undefined,
            "facebook_link": "",
            "twitter": undefined,
            "twitter_link": "",
            "gplus": undefined,
            "gplus_link": "",
            "linkedin": undefined,
            "linkedin_link": "",
            "github": undefined,
            "github_link": "",
            'speed': undefined
        },

        s_dom: "",
        elemPosition: null,
        elemWidth: null,
        elemHeight: null,

        init: function(){
            $(".social").social({'layout':"bottom"});

            this.ui();
            this.setLayout();
            this.elemDom();


        },

        ui: function() {
            $(document).ready(function () {
                $("#navRight").animate({width: 20 + '%'}, 800, 'easeOutBack');
                $(this).attr('state', 'on');
                $("#container").animate({width: 65 + '%'}, 800, 'easeOutBack');
                var html = "";
                /*for (var i = 0; i < self.easing.length; i++) {
                    html = "<li class='elemEasing' data-easing='" + self.easing[i] + "'>" + self.easing[i] + "</li>";
                    $(".aniMenu").append(html);
                }*/

            });
        },

        elemDom: function(){

            $(".social").on('click', function(e){

                self.s_dom = $(this);

                self.elemPosition = $(this).position();
                self.elemWidth = $(this).width();
                self.elemHeight = $(this).height();

                console.log('pos:' + self.elemPosition);
                console.log('width :' + self.elemWidth);
                console.log('height :' + self.elemHeight);

            });

        },

        /*closeAni: function(){

            var t = self.m_dom.id;

            console.log(t);


            $('.mAct').animate({
                    width : self.elemWidth,
                    height : self.elemHeight,
                    left : self.elemPosition.left,
                    top : self.elemPosition.top,
                    'border-radius' : self.elemRadius
                }, 500, 'easeOutCirc',
                function(){
                    $(".modal").removeClass('mAct');
                }
            ).css({'backgroundColor': self.elemBackground});

        },*/

        setLayout: function(){
            $(".layout").on('click', function(){
                $(".social").off();
                $("#socialCont").remove();
                $(".layout").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setSocial.layout = val;
                //$("#limit").removeClass('active').attr('data', 'off').html('No');

                //self.closeAni();

                console.log(self.setSocial.layout);

                /*var code = self.setModal;
                for (var prop in code) {
                    if(code.hasOwnProperty(prop)) {
                        if(prop !== "layout") {
                            code[prop] = undefined;
                            console.log(prop);
                        }
                    }
                };*/

                if(val == "bottom"){
                    $(".social").off();
                    
                    $(".social").social(self.setSocial);
                    console.log(self.setSocial);


                }else if(val == "right"){
                    $(".social").off();
                    
                    $(".social").social(self.setSocial);
                    console.log(self.setSocial);

                }else if(val == "top"){
                    $(".social").off();
                    
                    $(".social").social(self.setSocial);
                    console.log(self.setSocial);

                }else if(val == "left"){
                    $(".social").off();

                    $(".social").social(self.setSocial);
                    console.log(self.setSocial);

                };
            });
        },



    };

    ctx.social = social;
    var self = social;

})(md);