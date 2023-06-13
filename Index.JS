$(document).ready(function(){
    //console.log("Document is ready");
    //navagation bar hovers
    $(".Aboutus").mouseenter(function(){
        $(".Aboutus").css(
        {
            "color": "black", 
        }
        );
    });

    $(".Aboutus").mouseleave(function(){
        $(".Aboutus").css(
        {
            "color": "white", 
        }
        );
    });

    $(".Trip_of_week").mouseenter(function(){
        $(".Trip_of_week").css(
        {
            "color": "black", 
        }
        );
    });

    $(".Trip_of_week").mouseleave(function(){
        $(".Trip_of_week").css(
        {
            "color": "white", 
        }
        );
    });

    
    $(".Tripspage").mouseenter(function(){
        $(".Tripspage").css(
        {
            "color": "black", 
        }
        );
    });

    $(".Tripspage").mouseleave(function(){
        $(".Tripspage").css(
        {
            "color": "white", 
        }
        );
    });
    
    $(".Cheak_out").mouseenter(function(){
        $(".Cheak_out").css(
        {
            "color": "black", 
        }
        );
    });

    $(".Cheak_out").mouseleave(function(){
        $(".Cheak_out").css(
        {
            "color": "white", 
        }
        );
    });

    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-lindex', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-lindex', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });

    $(".cart_button").click(function () {
        alert("Succsesfuly added to cart");
    });
    
    $("#logo").mouseenter(function(){
        $(".logo").attr("src","Img/Logo2.png");
    });

    $("#logo").mouseleave(function(){
        $(".logo").attr("src","Img/Logo.png");
    });

    var weatherResult = null;
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=pretoria&appid=cc7b70e086d4f6d6ffd7cb7e99ed706f",
        success: function(data){
            weatherResult = data;
        }
    }).done(function(){
        //console.log("details");
        $(".result").text((weatherResult.main.temp- 273,15) + "°C");
        $(".min").text( (weatherResult.main.temp_min- 273,15) + "°C");
        $(".max").text( (weatherResult.main.temp_max- 273,15) + "°C");
        $(".humidity").text( weatherResult.main.humidity + "%");
        $(".wind").text( weatherResult.wind.speed + "m/s");
    });

    $(".cart_button1").click(function () {
        $(innderbox7).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button2").click(function () {
        $(innderbox8).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button3").click(function () {
        $(innderbox9).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button4").click(function () {
        $(innderbox10).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button5").click(function () {
        $(innderbox12).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button6").click(function () {
        $(innderbox13).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button7").click(function () {
        $(innderbox14).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".cart_button8").click(function () {
        $(innderbox15).css(
            {
                "background-color": "#5a81ab"
            });
        alert("Succsesfuly added to cart");
    });

    $(".remove_all").click(function () {
        $( ".list" ).remove();
    });

    $(".remove1").click(function () {
        $("#trip1" ).remove();
    });

    $(".remove2").click(function () {
        $("#trip2" ).remove();
    });

    $(".remove3").click(function () {
        $("#trip3" ).remove();
    });

    $(".remove4").click(function () {
        $("#trip4" ).remove();
    });

    $(".remove5").click(function () {
        $("#trip5" ).remove();
    });

    $(".Purchase").click(function () {
        alert("Succsesfuly Purchase");
    });

});

var result1 = 0;
function adjustrow1_total(){
    var count = document.getElementById("quantity1").value;
    result1 = count * 30000;
    document.getElementById("total1").style.display - "block";
    document.getElementById("total1").innerHTML = result1 ; 
    //console.log("hi")
    };

var result2 = 0;
function adjustrow2_total(){
    var count = document.getElementById("quantity2").value;
    result2 = count * 20118;
    document.getElementById("total2").style.display - "block";
    document.getElementById("total2").innerHTML =   result2; 
    //console.log("hi")
    };

var result3 = 0;
function adjustrow3_total(){
    var count = document.getElementById("quantity3").value;
    result3 = count * 25520;
    document.getElementById("total3").style.display - "block";
    document.getElementById("total3").innerHTML =   result3; 
    console.log("hi1")
    };

var result4 = 0;
function adjustrow4_total(){
    var count = document.getElementById("quantity4").value;
    result4 = count * 46118;
    document.getElementById("total4").style.display - "block";
    document.getElementById("total4").innerHTML =   result4; 
    //console.log("hi")
    };

var result5 = 0;
function adjustrow5_total(){
    var count = document.getElementById("quantity5").value;
    result5 = count * 50118;
    document.getElementById("total5").style.display - "block";
    document.getElementById("total5").innerHTML =   result5; 
    //console.log("hi")
    };

function total(){
    var qty1 = $("#total1").text();
    var qty2 = $("#total2").text();
    var qty3 = $("#total3").text();
    var qty4 = $("#total4").text();
    var qty5 = $("#total5").text();

    var parseQty1 = parseInt(qty1);
    var parseQty2 = parseInt(qty2);
    var parseQty3 = parseInt(qty3);
    var parseQty4 = parseInt(qty4);
    var parseQty5 = parseInt(qty5);

    var totalqty = parseQty1 + parseQty2 + parseQty3 + parseQty4 + parseQty5;

    document.getElementById("Grandtotal").style.display - "block";
    document.getElementById("Grandtotal").innerHTML =  totalqty; 
    //console.log("welcome" + totalqty )
};