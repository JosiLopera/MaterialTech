(function(ctx){

    var ripple = {

        watter: {
            "action": "click",
            "limit" : undefined,
            "color": "#000000",
            "speed": 10,
            "border" : 40,
            "opacity": 0.2,
            "layout": "watter",
            "style": "double",
            "delay": 150,
            "time": 500,
            "borderStyle": "solid"
        },

        basic: {
            "action": "click",
            "limit" : undefined,
            "color": "#000000",
            "speed": 10,
            "border" : 40,
            "opacity": 0.2,
            "layout": "basic",
            "style": "solid",
            "delay": 150,
            "time": 1000,
            "borderStyle": "solid"
        },

        light: {
            "action": "click",
            "limit" : undefined,
            "color": "#ffffff",
            "speed": 5,
            "border" : 40,
            "opacity": 0.5,
            "layout": "light",
            "style": "solid",
            "delay": 150,
            "time": 100,
            "borderStyle": "solid"
        },

        strong: {
            "action": "click",
            "limit" : undefined,
            "color": "#000000",
            "speed": 30,
            "border" : 40,
            "opacity": 0.6,
            "layout": "strong",
            "style": "solid",
            "delay": 150,
            "time": 1500,
            "borderStyle": "solid"
        },


        setRipple:{
            "action": undefined,
            "limit" : undefined,
            "color": undefined,
            "speed": undefined,
            "border" : undefined,
            "opacity": undefined,
            "layout": undefined,
            "style": undefined,
            "delay": undefined,
            "time": undefined,
            "borderStyle": undefined

        },
        
        tRipple: ".ripple",
        val:"",

        init: function(){

            $($(self.tRipple)).mt_ripple(self.basic);

            this.ui();
            this.setLayout();
            this.setStyle();
            this.setAction();
            this.setColor();
            this.setOpacity();
            this.setBorder();
            this.setSpeed();
            this.setDelay();
            this.setTime();
            this.setLimit();
            this.showCode();
        },

        ui: function(){

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

        setLayout: function(){
            $(".layout").on('click', function(){
                $(self.tRipple).off();
                $(".layout").removeClass('active');
                $(this).addClass('active');
                self.val = $(this).attr('data');
                self.setRipple.layout = self.val;

                console.log(self.val);


                
                $("#limit").removeClass('active').attr('data', 'off').html('No');
                $(".style").removeClass('active');
                $("#solid").addClass('active');
                $(".action").removeClass('active');
                $("#click").addClass('active');
                $("#color").val(self[self.val].color);
                $("#speed").val(self[self.val].speed);
                $("#speedSet").html(self[self.val].speed);
                $("#opacity").val(self[self.val].opacity);
                $("#opacitySet").html(self[self.val].opacity);
                $("#border").val(self[self.val].border);
                $("#borderSet").html(self[self.val].border);
                $("#delay").val(self[self.val].delay);
                $("#delaySet").html(self[self.val].delay);
                $("#time").val(self[self.val].time);
                $("#timeSet").html(self[self.val].time);
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.setRipple);

                if(self.val == "watter"){
                    $(".style").removeClass('active');
                    $("#double").addClass('active');
                }

                var code = self.setRipple;
                for (var prop in code) {
                    if(code.hasOwnProperty(prop)) {
                        if(prop !== "layout") {
                            code[prop] = undefined;
                            console.log(prop);
                        }
                    }
                }
            });
        },

        setStyle: function(){
            $(".style").on('click', function(){
                $(self.tRipple).off();
                $(".style").removeClass('active');
                $(this).addClass('active');
                self.val = $(this).attr('data');
                self.setRipple.style = self.val;
                $(self.tRipple).mt_ripple(self.setRipple);

            });
        },

        setAction: function(){
            $(".action").on('click', function(){
                $(self.tRipple).off();
                $(".action").removeClass('active');
                $(this).addClass('active');
                self.val = $(this).attr('data');
                self.setRipple.action = self.val;
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);
            });
        },

        setColor: function(){
            $("#color").change(function(){
                $(self.tRipple).off();
                self.val = $(this).val();
                self.setRipple.color = self.val;
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);

            });
        },

        setOpacity: function(){
            $("#opacity").change(function(){
                $(self.tRipple).off();
                self.val = $(this).val();
                self.setRipple.opacity = self.val;
                $("#opacitySet").html(self.val);
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);
            });
        },

        setBorder: function(){
            $("#border").change(function(){
                $(self.tRipple).off();
                self.val = $(this).val();
                self.setRipple.border = self.val;
                $("#borderSet").html(self.val);
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);
            });

            $(".bStyle").on('click', function(){
                $(self.tRipple).off();
                $(".bStyle").removeClass('active');
                $(this).addClass('active');
                self.val = $(this).attr('data');
                self.setRipple.borderStyle = self.val;
                $(self.tRipple).mt_ripple(self.setRipple);

            });
        },

        setSpeed: function(){
            $("#speed").change(function(){
                $(self.tRipple).off();
                self.val = $(this).val();
                self.setRipple.speed = self.val;
                $("#speedSet").html(self.val);
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);
            });
        },

        setDelay: function(){
            $("#delay").change(function(){
                $(self.tRipple).off();
                self.val = $(this).val();
                self.setRipple.delay = self.val;
                $("#delaySet").html(self.val);
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);
            });
        },

        setTime: function(){
            $("#time").change(function(){
                $(self.tRipple).off();
                self.val = $(this).val();
                self.setRipple.time = self.val;
                $("#timeSet").html(self.val);
                $(self.tRipple).mt_ripple(self.setRipple);
                console.log(self.val);
            });
        },

        setLimit: function(){
            $("#limit").on('click', function(){
                $(self.tRipple).off();
                if($("#limit").attr('data')=='off'){
                    self.setRipple.limit = ".btn_circle_box";
                    $(this).html('Yes').addClass('active').attr('data', 'on');
                    $(self.tRipple).mt_ripple(self.setRipple);
                }else{
                    self.setRipple.limit = undefined;
                    $(this).html('No').removeClass('active').attr('data', 'off');
                    $(self.tRipple).mt_ripple(self.setRipple);

                }
            });
        },


        showCode: function(){
            $("#show_code").on('click', function(){
                md.code.getCodeRipple();
                $("#showCodebox").html(md.code.textRipple);
            });
            $(".layout").on('click', function(){
                var valText = $(this).attr('data');
                if(valText == "basic"){
                    $("#showCodebox").html("$(my_target).mt_ripple({});");
                }else{
                    $("#showCodebox").html('$(my_target).mt_ripple({<br>"layout":"'+valText+'"});');
                }
            });

            $(".style, .bStyle, .action, #color, #opacity, #border, #speed, #delay, #time, #limit").on('click',function(){
                md.code.getCodeRipple();
                $("#showCodebox").html(md.code.textRipple);
            });
            $("#color").change(function(){
                md.code.getCodeRipple();
                $("#showCodebox").html(md.code.textRipple);
            });


        }


    };

    ctx.ripple = ripple;
    var self = ripple;

})(md);

