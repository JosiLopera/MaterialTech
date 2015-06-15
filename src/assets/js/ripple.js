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

        init: function(){

            $(".ripple").ripple(self.basic);

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

            $(document).ready(function(){
                $("#navRight").animate({width: 20+'%'}, 800, 'easeOutBack');
                $(this).attr('state','on');
                $("#container").animate({width: 65+'%'}, 800, 'easeOutBack');
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

        setLayout: function(){
            $(".layout").on('click', function(){
                $(".ripple").off();
                $(".layout").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setRipple.layout = val;
                $("#limit").removeClass('active').attr('data', 'off').html('No');

                var code = self.setRipple;
                for (var prop in code) {
                    if(code.hasOwnProperty(prop)) {
                        if(prop !== "layout") {
                            code[prop] = undefined;
                            console.log(prop);
                        }
                    }
                };

                if(val == "basic"){
                    $(".ripple").off();
                    $(".style").removeClass('active');
                    $("#solid").addClass('active');
                    $(".action").removeClass('active');
                    $("#click").addClass('active');
                    $("#color").val(self.basic.color);
                    $("#speed").val(self.basic.speed);
                    $("#speedSet").html(self.basic.speed);
                    $("#opacity").val(self.basic.opacity);
                    $("#opacitySet").html(self.basic.opacity);
                    $("#border").val(self.basic.border);
                    $("#borderSet").html(self.basic.border);
                    $("#delay").val(self.basic.delay);
                    $("#delaySet").html(self.basic.delay);
                    $("#time").val(self.basic.time);
                    $("#timeSet").html(self.basic.time);
                    $(".ripple").ripple(self.setRipple);
                    console.log(self.setRipple);
                }else if(val == "watter"){
                    $(".ripple").off();
                    $(".style").removeClass('active');
                    $("#solid").addClass('active');
                    $(".action").removeClass('active');
                    $("#click").addClass('active');
                    $("#color").val(self.watter.color);
                    $("#speed").val(self.watter.speed);
                    $("#speedSet").html(self.watter.speed);
                    $("#opacity").val(self.watter.opacity);
                    $("#opacitySet").html(self.watter.opacity);
                    $("#border").val(self.watter.border);
                    $("#borderSet").html(self.watter.border);
                    $("#delay").val(self.watter.delay);
                    $("#delaySet").html(self.watter.delay);
                    $("#time").val(self.watter.time);
                    $("#timeSet").html(self.watter.time);
                    $(".ripple").ripple(self.setRipple);
                    console.log(self.setRipple);
                }else if(val == "light"){
                    $(".ripple").off();
                    $(".style").removeClass('active');
                    $("#solid").addClass('active');
                    $(".action").removeClass('active');
                    $("#click").addClass('active');
                    $("#color").val(self.light.color);
                    $("#speed").val(self.light.speed);
                    $("#speedSet").html(self.light.speed);
                    $("#opacity").val(self.light.opacity);
                    $("#opacitySet").html(self.light.opacity);
                    $("#border").val(self.light.border);
                    $("#borderSet").html(self.light.border);
                    $("#delay").val(self.light.delay);
                    $("#delaySet").html(self.light.delay);
                    $("#time").val(self.light.time);
                    $("#timeSet").html(self.light.time);
                    $(".ripple").ripple(self.setRipple);
                    console.log(self.setRipple);
                }else if(val == "strong"){
                    $(".ripple").off();
                    $(".style").removeClass('active');
                    $("#solid").addClass('active');
                    $(".action").removeClass('active');
                    $("#click").addClass('active');
                    $("#color").val(self.strong.color);
                    $("#speed").val(self.strong.speed);
                    $("#speedSet").html(self.strong.speed);
                    $("#opacity").val(self.strong.opacity);
                    $("#opacitySet").html(self.strong.opacity);
                    $("#border").val(self.strong.border);
                    $("#borderSet").html(self.strong.border);
                    $("#delay").val(self.strong.delay);
                    $("#delaySet").html(self.strong.delay);
                    $("#time").val(self.strong.time);
                    $("#timeSet").html(self.strong.time);
                    $(".ripple").ripple(self.setRipple);
                    console.log(self.setRipple);
                }
            });
        },

        setStyle: function(){
            $(".style").on('click', function(){
                $(".ripple").off();
                $(".style").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setRipple.style = val;
                $(".ripple").ripple(self.setRipple);

            });
        },

        setAction: function(){
            $(".action").on('click', function(){
                $(".ripple").off();
                $(".action").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setRipple.action = val;
                $(".ripple").ripple(self.setRipple);
                console.log(val);
            });
        },

        setColor: function(){
            $("#color").change(function(){
                $(".ripple").off();
                var val = $(this).val();
                self.setRipple.color = val;
                $(".ripple").ripple(self.setRipple);
                console.log(val);

            });
        },

        setOpacity: function(){
            $("#opacity").change(function(){
                $(".ripple").off();
                var val = $(this).val();
                self.setRipple.opacity = val;
                $("#opacitySet").html(val);
                $(".ripple").ripple(self.setRipple);
                console.log(val);
            });
        },

        setBorder: function(){
            $("#border").change(function(){
                $(".ripple").off();
                var val = $(this).val();
                self.setRipple.border = val;
                $("#borderSet").html(val);
                $(".ripple").ripple(self.setRipple);
                console.log(val);
            });

            $(".bStyle").on('click', function(){
                $(".ripple").off();
                $(".bStyle").removeClass('active');
                $(this).addClass('active');
                var val = $(this).attr('data');
                self.setRipple.borderStyle = val;
                $(".ripple").ripple(self.setRipple);

            });
        },

        setSpeed: function(){
            $("#speed").change(function(){
                $(".ripple").off();
                var val = $(this).val();
                self.setRipple.speed = val;
                $("#speedSet").html(val);
                $(".ripple").ripple(self.setRipple);
                console.log(val);
            });
        },

        setDelay: function(){
            $("#delay").change(function(){
                $(".ripple").off();
                var val = $(this).val();
                self.setRipple.delay = val;
                $("#delaySet").html(val);
                $(".ripple").ripple(self.setRipple);
                console.log(val);
            });
        },

        setTime: function(){
            $("#time").change(function(){
                $(".ripple").off();
                var val = $(this).val();
                self.setRipple.time = val;
                $("#timeSet").html(val);
                $(".ripple").ripple(self.setRipple);
                console.log(val);
            });
        },

        setLimit: function(){
            $("#limit").on('click', function(){
                $(".ripple").off();
                if($("#limit").attr('data')=='off'){
                    self.setRipple.limit = ".btn_circle_box";
                    $(this).html('Yes').addClass('active').attr('data', 'on');
                    $(".ripple").ripple(self.setRipple);
                }else{
                    self.setRipple.limit = undefined;
                    $(this).html('No').removeClass('active').attr('data', 'off');
                    $(".ripple").ripple(self.setRipple);

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
                    $("#showCodebox").html("$(my_target).ripple({});");
                }else{
                    $("#showCodebox").html('$(my_target).ripple({<br>"layout":"'+valText+'"});');
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

