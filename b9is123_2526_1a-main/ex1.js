//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed
            let check=()=>{
             let weight=parseInt(document.getElementById("weight").value);
             if(weight>15){
              alert("Overweight! Current weight: " + weight);
              document.getElementById("removed").style.display="block";
              document.getElementById("remB").style.display="block";
             } else
             {
              alert("Weight is OK. You Can Proceed");
             }
            }
            let remove = ()=>{
              let weight=parseInt(document.getElementById("weight").value);
              let removed=parseInt(document.getElementById("removed").value);
              let newWeight=weight-removed;
              document.getElementById("weight").value=newWeight;
              if(newWeight<=15){
                alert("Now OK! New Weight : " + newWeight);
              }
              else{
                alert("Still overweight ! Current weight: " + newWeight);
              }
            }
            