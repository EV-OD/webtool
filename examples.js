var codes = {
    Comment:{
        template:true,
        code:`
    // this is single line comment

    /*
        this is multi line comment
    */

    /*
    It is most common to use single line comments.
    Block comments are often used for formal documentation.
    */
        `
    },
    Variable:{
        template:true,
        code:`
        /*
        Using var
        Using let
        Using const
        */
       // using var
       var a = 1;
       var b = 2;
       var c = a + b;
       document.write(c)
       // used to break the line or go to new line
       document.write("</br>")

       // using let
       let num = 1;
       let num2 = 2;
       let num3 = a + b;
       document.write(num3)
       // used to break the line or go to new line
       document.write("</br>")

       const pi = 3.14
       document.write(pi + "</br>")

       var name = "rabin"
       document.write(name + "</br>")
       document.write(name + "123")

        `
    },
    Operator:{
        template:true,
        code:`
    //asignment operator
    let x = 5;         // assign the value 5 to x
    let y = 2;         // assign the value 2 to y

    //addition operator
    let z = x + y;     // assign the value 7 to z (5 + 2)
    document.write(z + "</br>")
    
    //increment operator
    let a = 1;
    a++
    document.write(a + "</br>");

    //addition assignment operator
    let x1 = 10;
    x1 += 5;
    document.write(x1 + "</br>");

    //String Operators
    let text1 = "John";
    let text2 = "Doe";
    let text3 = text1 + " " + text2;
    document.write(text3 + "</br>");

    //Comparison Operators
    let bool = 1 < 2
    document.write(bool + "</br>")

    let bool2 = 4 > 5
    document.write(bool2 + "</br>")

    //Logical Operators

    let l = 1 > 2 && 4 < 5
    let l2 = 1 > 2 && 4 > 5

    document.write(l + "</br>")
    document.write(l2 + "</br>")

    //JavaScript Type Operators eg. typeof
    //JavaScript Bitwise Operators eg. >>>


        `
    },
    "if else":{
        template:true,
        code:`
        // if
        var hour = 10
        if (hour < 18) {
            greeting = "Good day1";
            document.write(greeting + "</br>")
          }
        
        // if else
				var hour = 20
        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }
        document.write(greeting + "</br>")

        //if else if
        var time = 5
        if (time < 10) {
            greeting = "Good morning";
          } else if (time < 20) {
            greeting = "Good day";
          } else {
            greeting = "Good evening";
          }
          document.write(greeting + "</br>")
        `
    },
    switch:{
        template:true,
        code:`
        // new Date() create instance of today's date
        //getDay() method gives week name
        // new keyword used to create class instance (Concept from Object-oriented programming)
        //break is used to break from switch if case matched exit from switch statement
        switch (new Date().getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }
          document.write(day)
        `
    },
    "for loop":{
        template:true,
        code:`
        for (let i = 0; i < 5; i++) {
            document.write(i + "</br>")
          }
        `
    },
"while-loop":{
        template:true,
        code:`
          var x = 0;
          while (x!=5){
            document.write(x + "<br/>")
            x++;
          }
        `

    },
"do-while-loop":{
        template:true,
        code:`
          var x = 0;
          do{
            document.write(x + "<br/>")
            x++;
          }while (x!=5)
        `

    },
    array:{
      template:true,
      code:`
      var y = [4,3,7];
      document.write(y + "<br/>");
      var dons = ["Rabin", "Sugam", "Kirtan","Rohit","Atul","deekshit"];
      document.write(dons)
      `
    },
    "Accessing Array":{
      template:true,
      code:`

        var dons = ["Rabin", "Sugam", "Kirtan","Rohit","Atul","deekshit"];
        document.write(dons[0] + "<br/>");
        document.write(dons[2] + "<br/>") 
      `

    },
    
}
// "variable":{
//     template:true,
//     code:`
//     var a = 1; //any number
//     var b = "rabin1$5" // any alpha numeric string
//     var bool = true 
//     var bool2 = false
// `},

