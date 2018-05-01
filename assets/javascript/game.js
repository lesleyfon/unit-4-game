
        // creating some variables
        var wins = 0;
        var losses = 0;
        var userChoice = [];
        var randomComputer = [];

        var total = [];

        var choice1 = Math.floor(Math.random()*12) +1;             
        var choice2 = Math.floor(Math.random()*12) +1;             
        var choice3 = Math.floor(Math.random()*12) +1;             
        var choice4 = Math.floor(Math.random()*12) +1;             
        var choiceComp = Math.floor(Math.random()*100) +18; 
        
        
                
        


    
            //    this onClick is to generate a random number between 18 and 100
            $('#ranCompNum').on('click', function(){

                     var generateComputerChoice = [];
                document.getElementById("ranCompNum").innerHTML=choiceComp;
               
              
            });
            // $('#mydiv').attr("data-myval","20"); //setter
        // alert($('#outer').html());

               

            // $( '.crystals').on('click', function(){
            //     var generateUserChoice = ""
            //     var choice1 = Math.floor(Math.random()*12) +1;  
            //     generateUserChoice = generateUserChoice + choice1
            //     $('.crys1').append('<p>'+ generateUserChoice + '</p>')
            // })
                
         