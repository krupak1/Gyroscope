//First we will add the deviceorientation events, and later we will intialize them into Javascript variables.
if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", function(event){

        controller.x = event.alpha;
        controller.y = event.beta;
        controller.z = event.gamma;

    });
}


//This is a struct that will follow the deviceorientation data
const controller = {
    x: 0,
    y: 0,
    z: 0
}

//This will be the main Gyroscope object, we can initialize it in the main (script.js) if we've confirmed a mobile device.
//That object can then use the functions within the class below.  
class Gyroscope{
    constructor(mobileUserId){
        this.player = mobileUserId;
        this.x = controller.x
        this.y = controller.y
        this.z = controller.z
    }

    //We will call this function recursively from script.  It will return the device orientation data.
    update(){
        this.x = controller.x
        this.y = controller.y
        this.z = controller.z

        if(this.z > 20) alert("z > 20");
        if(this.x > 20) alert ("x > 20");
        if(this.y > 20) alert ("y > 20");


    }
}