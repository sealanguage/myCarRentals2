
var car = {
            bizName: 'Enterprise Car Rental',
            economy: 90,
            economyPrice: "$50",
            economyType: "Pinto",
            midsize: 180,
            midsizePrice: "$75",
            midsizeType: "Accord",
        };
        //function getCars() {
            //document.getElementById("name").innerHTML = car.bizName;
            //document.getElementById("econ").innerHTML = car.economy;
            //document.getElementById("mid").innerHTML = car.midsize;
            //};
        //function rentEcon () {
            //document.getElementById("econ").innerHTML = car.economy--;
            //return car.economy;
        // };
        //function rentMid () {
            //document.getElementById("mid").innerHTML = car.midsize--;
            //return car.midsize;
         //};
         //onClick getCars();
         
         
         
         function priceAvail () {
            var listCars = document.getElementById("cars").value;
            if (listCars === "economy") {
                document.getElementById("econ").innerHTML = car.economy;
                document.getElementById("mid").innerHTML = "";
                document.getElementById("economyPrice").innerHTML = car.economyPrice;
                document.getElementById("midsizePrice").innerHTML = "";
                document.getElementById("economyType").innerHTML = car.economyType;
                document.getElementById("midsizeType").innerHTML = "";
            } else if (listCars === "midsize") {
                document.getElementById("mid").innerHTML = car.midsize;
                document.getElementById("econ").innerHTML = "";
                document.getElementById("midsizePrice").innerHTML = car.midsizePrice;
                document.getElementById("economyPrice").innerHTML = "";
                document.getElementById("midsizeType").innerHTML = car.midsizeType;
                document.getElementById("economyType").innerHTML = "";
            } else if (listCars === "choose") {
                document.getElementById("econ").innerHTML = "";
                document.getElementById("mid").innerHTML = "";
                document.getElementById("midsizePrice").innerHTML = "";
                document.getElementById("midsizeType").innerHTML = "";
                document.getElementById("economyPrice").innerHTML = "";
                document.getElementById("economyType").innerHTML = "";
//look for a way to get choose to zero out all the values on one line of code
            }
         };
         function rentValid () {
            //if listCars is econ, do something 
            //or if listCars is midsize do same thing
            //or if lisCars is nothing, alert: select a car
            var carSelection = document.getElementById("cars").value;
            var nameField = document.getElementById("name").value;
        //console.log("success1");
             if (nameField == "") {
                alert("Please add your name");
               
             }
                //console.log("success");
            if (carSelection == "choose") {
                alert("Please choose a car");
                //console.log("success");
            }
            if (carSelection == "economy") {
                document.getElementById("econ").innerHTML = car.economy--;
                return car.economy;
                }
            if (carSelection == "midsize") {
                document.getElementById("mid").innerHTML = car.midsize--;
                return car.midsize;
                }
            
            console.log("success");
         };
         