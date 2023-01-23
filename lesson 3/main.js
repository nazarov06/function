let users = [
    obj1 = {name: "Alex"},
    obj2 = {name: "Lisa"},
    obj3 = {name: "Tom"},
    obj5 = {name: "Diyor"},
    obj6 = {name: "Akbar"},
    obj7 = {name: "John"},
    obj7 = {name: "Azamat"},
    obj8 = {name: "Aziz"},
    obj9 = {name: "Bilol"},
    obj10 = {name: "Begzod"}
 ]

 function userName (){
     for(let i = 0; i < users.length; i++){
         if(users[i].name.length < 5){
             console.log("Bu ism 5 dan kichik");
         }
         else{
             console.log("Bu ism 5 dan katta");
         }
     }
 }
 userName()