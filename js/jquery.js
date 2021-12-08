$(document).ready(function() {
	//name check
	var txtTen= $("#txtname");
    var tbten = $("#tbname");

    function kiemtraten(){
        var regexho = /^[A-Z]+[A-Za-z]*/;
        if((txtTen.val().trim()==="")){
            tbten.html("Name cannot be left blank.");
            return false;
        }else{
            if((regexho.test(txtTen.val()))){
                tbten.html("")
                return true;
            }else{
                tbten.html("The first letter of the name must be capitalized.");
                return false;
            }
        }
    }
    txtTen.blur(kiemtraten);
    //Check mail

    var txtemail= $("#txtemail");
    var tbemail = $("#tbemail");

    function kiemtraemail(){
        var regexemail =/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/;
        if((txtemail.val().trim()==="")){
            tbemail.html("Email cannot be blank.");
            return false;
        }else{
            if((regexemail.test(txtemail.val()))){
                tbemail.html("")
                return true;
            }else{
                tbemail.html("Email in format:^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$ .");
                return false;
            }
        }
    }
    txtemail.blur(kiemtraemail);
    //check phone
    var txtsdt= $("#txtphone");
    var tbsdt = $("#tbphone");

    function kiemtrasdt(){
        var regexsdt =/^[0-9]{9,10}$/;
        if((txt.val().trim()==="")){
            tbpass.html("Số điện thoại không được để trống.");
            return false;
        }else{
            if((regexsdt.test(txtsdt.val()))){
                tbsdt.html("")
                return true;
            }else{
                tbsdt.html("Số điện thoại có 9-10 số");
                return false;
            }
        }
    }
    txtsdt.blur(kiemtrasdt);

    $("#btnsend").click(function() {
        if (!kiemtraten() || !kiemtraemail() || !kiemtrasdt) {
            $("#thongbao").html("Please enter correct and complete information");
            return false;
        }

        alert("Đăng kí thành công!");
        window.window.location.href = 'FOOD.html';
        return true;
        
    });

});
//menu
jQuery.fn.extend({
    setMenu:function () {
        return this.each(function() {
            var containermenu = $(this);

            var itemmenu = containermenu.find('dropdow');
            itemmenu.click(function () {
                var submenuitem = containermenu.find('dropdow1');
                submenuitem.slideToggle(500);

            });

            $(document).click(function (e) {
                if (!containermenu.is(e.target) &&
                    containermenu.has(e.target).length === 0) {
                     var isopened =
                        containermenu.find('dropdow1').css("display");

                     if (isopened == 'block') {
                         containermenu.find('dropdow1').slideToggle(500);
                     }
                }
            });
        });
    },
});
$('dropdow').setMenu()
