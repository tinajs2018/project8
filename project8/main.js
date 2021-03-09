function myFunction(){
     var input=document.getElementById("mySearch");
     var ul=document.getElementById("myMenu");
     var li = document.getElementsByTagName("li")
     var a, i;
     var filter=input.value .toUpperCase;
      for ( i = 0; i < li .length ;  i++){
          a = li[i].getElementsByTagName('a') [0];
          if( a  .innerHTML .toLowerCase().indexOf (filter) > -1){
              li[i] .style .display ="";
          }else { 
              li[i] .style .display = "none"
          } 
      }
}


// function myFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("mySearch");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myMenu");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }