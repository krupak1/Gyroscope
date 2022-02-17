//Javascript file script.js 
//CS321 Gyroscope project
//
//This file will be the script used to direct mobile users to the gyroscope file.
//Any non-mobile users are not supposed to be visiting this file.
//
//


//First check if the user is using a mobile device and run the script
//if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  
    //alert("Mobile device detected");
    //Initialize the Gyroscope object for the mobile user
    let gyroObject = new Gyroscope(0);
    let display = new displayCanvas();

    //This is the recursive function that will keep updating the gyroscope and display canvas
    function runGyroscope(){
      gyroObject.update();
      display.update();
      requestAnimationFrame(runGyroscope);
    }

    runGyroscope();
//}

  //Useless webpage if the user is not on a mobile device.  Send a print error message.
//  else{
//   alert("You are not using a Mobile Device.");
//}



