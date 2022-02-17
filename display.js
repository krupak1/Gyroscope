const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;


class displayCanvas{

    update(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.font = "20px Georgia";
        ctx.fillText("x: " + gyroObject.x, 10, 20);
        ctx.fillText("y: " + gyroObject.y, 10, 50);
        ctx.fillText("z: " + gyroObject.z, 10, 80);
        ctx.fillText("Updates: " + frameCounter, 10,120);

    }


}