var myButton = document.getElementById("myButton");
myButton.addEventListener("click", doTheStuff);


var theForm = document.getElementById("myForm");
//theForm.elements[0].value
var names = [];

function doTheStuff(){
    grabTheNames();
    shuffle(names);
    console.log(names);
    postTheNames();
}




// Write the HTML.  Should we use the elements array or put the values into a different array?  Figure out how to shuffle an array.  Then put the array values into the table.6// 

//document.getElementById("table" + i).innerHTML = ourArray

// THis function takes the user inputed information and stores it into a clean array. Write a for loop, that moves through theForm.elements and grabs the values, and pushes them into the names array.
function grabTheNames(){
    for(var i=0; i < theForm.elements.length;i++) 
        

        names.push(theForm.elements[i].value);
    
        //document.getElementById("debug").innerHTML = names;
    
}



// THis function shuffles the names in the array
/*function shuffle(o){ v1.0
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   return o;
};*/
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

// THis function posts the names to the different tables
function postTheNames(){
  var counter=0;
  var space = 0;
  var groupSize =
      document.getElementById("groupSize").value;
  console.log(groupSize);

  for(var i = 0; i < names.length; i++){
   if(counter===groupSize-1){
    counter = 0;
     var temp1 = document.createTextNode(names[i]);
     document.getElementById("spot" + space).appendChild(temp1);
     space++;
    } else{
      var temp2 = document.createTextNode(names[i] + ", ");
      document.getElementById("spot" + space).appendChild(temp2); 
      counter++;
    } 
    
    
    
  }
      


}//document.gEBI("spot"+place)i
