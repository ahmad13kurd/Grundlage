


var button = document.getElementsByClassName("btn");


var i;


for (i = 0 ; i < button.length ; i++ ) {
    button[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var desc = this.nextElementSibling;
        if (desc.style.maxHeight){
            desc.style.maxHeight = null;
        } else {
            desc.style.maxHeight = desc.scrollHeight + "px";
        }
    });
}
