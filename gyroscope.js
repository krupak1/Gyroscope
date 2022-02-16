//First we will add the deviceorientation events, and later we will intialize them into Javascript variables.

window.addEventListener('deviceorientation', function(gyro){


});





//This will be the main Gyroscope object, we can initialize it in the main (script.js) if we've confirmed a mobile device.
//That object can then use the functions within the class below.  
//
class Gyroscope{
    constructor(mobileUserId){
        this.player = mobileUserId;
    }
}