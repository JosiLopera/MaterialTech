(function(ctx){

    var code = {

        textRipple:"",
        textModal:"",

        getCodeRipple: function(){
            var code = md.ripple.setRipple,
                textStart = "$(my_target).ripple({</br>",
                textEnd = "});",
                re = /".btn_circle_box"/gi,
                result = [];

            console.log(code);
            for (var prop in code) {
                if(code.hasOwnProperty(prop)) {
                    if(code[prop] !== undefined) {
                        var props = '"' +prop+ '": "'+ code[prop]+'"';
                        result.push(props);
                    }
                }
            }

            for (var i = 0; i < result.length; i++) {
                textStart += result[i]+",<br>";
            };

            console.log(textStart);
            self.textRipple = "";
            self.textRipple += textStart.substring(0, textStart.length -5);
            self.textRipple = self.textRipple.replace(re,"my_limit_target");
            self.textRipple += textEnd;

        },

        getCodeModal: function(){
            var code = md.modal.setModal,
                textStart = "$(my_target).modal({</br>",
                textEnd = "});",
                //re = /"#container"/gi,
                result = [];

            console.log(code);
            for (var prop in code) {
                if(code.hasOwnProperty(prop)) {
                    if(prop == "container") {
                        code[prop] = undefined;
                        console.log(prop);
                    }
                    if(code[prop] !== undefined) {
                        var props = '"' +prop+ '": "'+ code[prop]+'"';
                        result.push(props);
                    }

                }
            }

            for (var i = 0; i < result.length; i++) {
                textStart += result[i]+",<br>";
            };

            console.log(textStart);
            self.textModal = "";
            self.textModal += textStart.substring(0, textStart.length -5);
            //self.textModal = self.textModal.replace(re,"undefined");
            self.textModal += textEnd;

        }


    };

    ctx.code = code;
    var self = code;

})(md);