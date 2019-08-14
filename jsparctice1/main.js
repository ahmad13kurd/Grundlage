


var Heading = document.getElementById("heading"),
    Ul = document.getElementById("List"),
    Button = document.getElementById("button"),
    Li = document.getElementById("List").getElementsByTagName("li");

    /* Li[0].addEventListener("click",()=>{
        Heading.innerHTML = Li[0].innerHTML
    }) */

    Ul.addEventListener("click", active)

    function active(e)
    {
        if(e.target.nodeName == "LI")
        {
            Heading.innerHTML = e.target.innerHTML;

            for (var i = 0; i < e.target.parentNode.children.length; i++)
            {
                e.target.parentNode.children[i].classList.remove("active");
            }
            
            e.target.classList.add("active");
        }
    }

   function List(){
       var Input = document.getElementById("input").value;
       var text = document.createTextNode(Input);
       var newItem = document.createElement("li");
       newItem.appendChild(text);
       document.getElementById("List").appendChild(newItem);
   }


    
