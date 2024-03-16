//  تمرین سنگ کاغذ قیچی
//  روش حل استاد
 var userMove = prompt("Inter Your Move");
 var RandomNumber = Math.floor(Math.random()*3);
 var computerMove = "rock";
 if (RandomNumber==0) {
     var computerMove = "rock" ;
 }
 else if(RandomNumber==1){
    var computerMove = "paper" ;
 }
 else if(RandomNumber==2){
    var computerMove = "sscissors" ;
 }
 if (userMove==computerMove) {
    alert(computerMove + " حرکت کامپوتر : ")
     alert("it's a tie ") ;
 }
 else if(userMove=="rock"){
   if(computerMove=="paper"){
    alert(computerMove + " حرکت کامپوتر : ")
    alert("computer wins !")
   }
   else if(computerMove=="scissors"){
    alert(computerMove + " حرکت کامپوتر : ")
    alert("user wins !")
   }
 }
 else if(userMove=="paper"){
    if(computerMove=="scissors"){
        alert(computerMove + " حرکت کامپوتر : ")
     alert("computer wins !")
    }
    else if(computerMove=="rock"){
        alert(computerMove + " حرکت کامپوتر : ")
     alert("user wins !")
    }
 }
 else if(userMove=="scissors"){
    if(computerMove=="rock"){
        alert(computerMove + " حرکت کامپوتر : ")
     alert("computer wins !")
    }
    else if(computerMove=="paper"){
        alert(computerMove + " حرکت کامپوتر : ")
     alert("user wins !")
    }
}
else{
    alert("somting went wrong?! ")
}



























//  روش حل من
// var user = prompt("inter your move :");
// var a = Math.floor(Math.random()*3);

// var commove  = "سنگ";
//  if (a==0) {

//     if(user=="کاغذ"){
//         alert(commove);
//         alert(" برنده کاربر است ") ;
//     }
//     else if(user=="قیچی"){
//         alert(commove);
//         alert(" کامپیوتر برنده است ") ;
//     }
//     else if(user=="سنگ"){
//         alert(commove);
//         alert(" مساوی شد ");
//     }

//  }
//  else if(a==1){

//     commove = "کاغذ" ;
//     if(user=="کاغذ"){
//         alert(commove);
//         alert("مساوی شد ");
//     }
//     else if(user=="قیچی"){
//         alert(commove);
//         alert("برنده کاربر است ");
//     }
//     else if(user=="سنگ"){
//         alert(commove);
//         alert("کامپیوتر برنده است ");
//     }

//  }
//  else if(a==2){

//     commove = "قیچی" ;
//     if(user=="کاغذ"){
//         alert(commove);
//         alert("کامپیوتر برنده است ");
//     }
//     else if(user=="قیچی"){
//         alert(commove);
//         alert("مساوی شد ");
//     }
//     else if(user=="سنگ"){
//         alert(commove);
//         alert("برنده کاربر است ");
//     }

//  }
//  else{
//     alert("please do it correct!");
//  }
