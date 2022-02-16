//Javascript file script.js 
//CS321 Gyroscope project
//
//This file will be the script used to direct mobile users to the gyroscope file.
//Any non-mobile users are not supposed to be visiting this file.
//
//


//First check if the user is using a mobile device and put that into boolean mobileUser.
let mobileUser;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    mobileUser = true;
    alert("You are using a Mobile Device.");
  }
  else{
    mobileUser = false;
    alert("You are not using a Mobile Device.");
  }











