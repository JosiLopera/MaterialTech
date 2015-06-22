(function(ctx){

    var modal = {

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

        center:{
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
            "finalBackground" : "#EE5757",
            "style" : undefined
        },

        left:{
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
            "finalBackground" : "#EE5757",
            "style" : undefined
        },

        top:{
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
            "finalBackground" : "#EE5757",
            "style" : undefined
        },

        right:{
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
            "finalBackground" : "#EE5757",
            "style" : undefined
        },

        bottom:{
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
            "finalBackground" : "#EE5757",
            "style" : undefined
        },

        setModal:{
            "speed1": undefined,
            "speed2": undefined,
            "speed3": undefined,
            "animation1" : undefined,
            "animation2" : undefined,
            "animation3" : undefined,
            "zIndex" : undefined,
            "layout" : undefined,
            "container" : "#container",
            "closeColor": undefined,
            "closeSize" : undefined,
            "splitClass" : undefined,
            "width" : undefined,
            "finalBackground" : undefined,
            "style" : undefined
        },

        color: "",
        elemPosition: null,
        elemWidth: null,
        elemHeight: null,
        elemBackground: null,
        elemRadius: null,
        m_dom: "",
        toggle: "off",

        init: function(){

            $(".modal").mt_modal(self.center);

            this.ui();
            this.elemDom();
            this.setLayout();
            this.setBackgroundColor();
            this.setCloseColor();
            this.setAnis();
            this.setAni1();
            this.setAni2();
            this.setAni3();
            this.showCode();
        },

        ui: function(){
            $(document).ready(function(){
                var html = "";
                for (var i = 0; i < self.easing.length; i++) {
                    html = "<li class='elemEasing' data-easing='"+self.easing[i]+"'>"+self.easing[i]+"</li>";
                    $(".aniMenu").append(html);
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



        },

        elemDom: function(){

            $(".modal").on('click', function(e){
                $(".modal").addClass('hidden');
                $(this).removeClass('hidden');
                if (e.target.className.split(" ")[0] != "splitClass") {
                    if (self.toggle == 'off') {
                        self.toggle = "on";
                        console.log(self.toggle);
                        self.m_dom = $(this);
                        alert('hey');
                        console.log(self.m_dom);
                        self.elemPosition = self.m_dom.position();
                        self.elemWidth = self.m_dom.width();
                        self.elemHeight = self.m_dom.height();
                        self.elemBackground = self.m_dom.css('backgroundColor');
                        self.elemRadius = self.m_dom.css('border-radius');
                    }
                }

            });

            $("#close").on('click', function(){
                self.toggle = "off";
                console.log(self.toggle);
                $(".modal").removeClass('hidden');
            });

        },

        closeAni: function(){
            console.log(self.toggle);

            $(".modal").removeClass('hidden');

            if(self.toggle == "on"){
                $("#close").remove();
                self.toggle = "off";
                console.log(self.m_dom);

                $(self.m_dom).animate({
                        'width' : self.elemWidth,
                        'height' : self.elemHeight,
                        'left' : self.elemPosition.left,
                        'top' : self.elemPosition.top,
                        'border-radius' : self.elemRadius
                    }, 500, 'easeOutCirc'
                ).css({'backgroundColor': self.elemBackground});
                console.log(self.toggle);
            }

        },

        setLayout: function(){
            $(".layout").on('click', function(){
                $(".modal").off();
                $(".layout").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setModal.layout = val;

                self.closeAni();

                $("#thirdAni").fadeIn('fast');
                $("#background").val(self[val].finalBackground);
                $("#closeColor").val(self[val].closeColor);
                $("#ani1").prev("span").html(self[val].animation1);
                $("#speed1").val(self[val].speed1);
                $("#speedSet1").html(self[val].speed1);
                $("#ani2").prev("span").html(self[val].animation2);
                $("#speed2").val(self[val].speed2);
                $("#speedSet2").html(self[val].speed2);
                $("#ani3").prev("span").html(self[val].animation3);
                $("#speed3").val(self[val].speed3);
                $("#speedSet3").html(self[val].speed3);
                $(".modal").mt_modal(self.setModal);
                console.log(self.setModal);

                if(val == "center"){
                    $("#thirdAni").animate({'opacity': 1}, 200);
                }else{
                    $("#thirdAni").animate({'opacity': 0}, 200);
                }


                var code = self.setModal;
                for (var prop in code) {
                    if(code.hasOwnProperty(prop)) {
                        if(prop !== "layout") {
                            code[prop] = undefined;

                        }
                    }
                };


            });
        },

        setBackgroundColor: function(){
            $("#background").change(function(){
                $(".modal").off();
                self.closeAni();
                var val = $(this).val();
                self.setModal.finalBackground = val;
                $(".modal").mt_modal(self.setModal);
                console.log(val);
                console.log(self.setModal);

            });
        },

        setCloseColor: function(){
            $("#closeColor").change(function(){
                $(".modal").off();
                self.closeAni();
                var val = $(this).val();
                self.setModal.closeColor = val;
                $(".modal").mt_modal(self.setModal);
                console.log(val);
                console.log(self.setModal);
            });
        },

        setAnis: function(){
            $(".elemEasing").on('click', function(){
                var val = $(this).attr('data-easing'),
                    parentId = $(this).parent().attr('id'),
                    parent = $(this).parent(),
                    pSpan;

                $(".modal").off();

                self.closeAni();

                if(parentId == "ani1"){
                    self.setModal.animation1 = val;
                    pSpan = $(this).parent().parent().find("span");
                    pSpan.html(val);
                    $(".modal").mt_modal(self.setModal);
                }else if(parentId == "ani2"){
                    self.setModal.animation2 = val;
                    pSpan = $(this).parent().parent().find("span");
                    pSpan.html(val);
                    $(".modal").mt_modal(self.setModal);
                }else if(parentId == "ani3"){
                    self.setModal.animation3 = val;
                    pSpan = $(this).parent().parent().find("span");
                    pSpan.html(val);
                    $(".modal").mt_modal(self.setModal);
                }

                parent.fadeOut("fast");
                console.log(self.setModal);



            });


        },

        setAni1: function(){
            $("#speed1").change(function(){
                $(".modal").off();
                self.closeAni();
                var val = $(this).val();
                self.setModal.speed1 = val;
                $("#speedSet1").html(val);
                $(".modal").mt_modal(self.setModal);
                console.log(val);
                console.log(self.setModal);

            });
        },

        setAni2: function(){
            $("#speed2").change(function(){
                $(".modal").off();
                self.closeAni();
                var val = $(this).val();
                self.setModal.speed2 = val;
                $("#speedSet2").html(val);
                $(".modal").mt_modal(self.setModal);
                console.log(val);
                console.log(self.setModal);

            });
        },

        setAni3: function(){
            $("#speed3").change(function(){
                $(".modal").off();
                self.closeAni();
                var val = $(this).val();
                self.setModal.speed3 = val;
                $("#speedSet3").html(val);
                $(".modal").mt_modal(self.setModal);
                console.log(val);
            });
        },

        showCode: function(){
            $("#show_code").on('click', function(){
                md.code.getCodeModal();
                $("#showCodebox").html(md.code.textModal);
                console.log(md.code.textModal);
            });
            $(".layout").on('click', function(){
                var valText = $(this).attr('data');
                if(valText == "center"){
                    $("#showCodebox").html("$(my_target).mt_modal({});");
                }else{
                    $("#showCodebox").html('$(my_target).mt_modal({<br>"layout":"'+valText+'"});');
                }
            });

            $(".elemEasing, #speed1, #speed2, #speed3").on('click',function(){
                md.code.getCodeModal();
                $("#showCodebox").html(md.code.textModal);
            });
            $("#background, #closeColor").change(function(){
                md.code.getCodeModal();
                $("#showCodebox").html(md.code.textModal);
            });


        }




    };

    ctx.modal = modal;
    var self = modal;

})(md);