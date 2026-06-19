var products=document.getElementById("dre")
var searc=document.getElementById("search")
var element=document.querySelectorAll(".imgg")
searc.addEventListener("keyup",function(event){
    var userenter=event.target.value.toUpperCase();
    for(var i=0;i<element.length;i++){
        var paragraph=element[i].querySelector("p").textContent
        if(paragraph.toUpperCase().indexOf(userenter)<0){
            element[i].style.display="none";
        }
        else{
            element[i].style.display="block";
        }
    }
})
// var search = document.getElementById("search");
// var element = document.querySelectorAll(".imgg");

// search.addEventListener("keyup", function(event) {
//     var userenter = event.target.value.toUpperCase();

//     for(var i = 0; i < element.length; i++) {
//         var productname = element[i].querySelector("p").textContent;

//         if(productname.toUpperCase().indexOf(userenter) < 0) {
//             element[i].style.display = "none";
//         } else {
//             element[i].style.display = "block";
//         }
//     }
// });