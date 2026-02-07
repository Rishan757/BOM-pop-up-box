
// this is a confirm popup box
function deleted(){
   let value =  confirm("Are you sure delete")
    if(value){
        console.log("Deleted")
    }else{
        console.log("Not delete")
    }
}

deleted();

// this is a prompt popup box
function welcomeMessage(){
    let h1 = document.createElement("h1");
    let text;

   let name =  prompt("Enter your name:")
   if(name== null || name==""){
    text = "No name found"
   }else{
     text = "Welcome " + name;
   }

   let textNode = document.createTextNode(text);
   h1.appendChild(textNode);
   document.body.appendChild(h1);
}

welcomeMessage();