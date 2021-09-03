$(".container__action--button2").click(function () {
    for(var i=0; i<$("input").length; i++){
        if ($("input")[i].value === "") {
            $(".error-" + i).css("display", "block");
            document.querySelectorAll("input")[i].classList.add("border-invalid");   
            document.querySelectorAll("input")[i].placeholder=' ';         
            // alert("empty");
            if (i ===2){
                document.querySelectorAll("input")[i].placeholder='email@example.com';
                $()
            }
          }
          else{
            $(".error-" + i).css("display", "none");
            document.querySelectorAll("input")[i].classList.remove("border-invalid");            
            // alert("remove");

          }
    }
});

