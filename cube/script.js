/**
 * Created by my4637275 on 2017/2/18.
 */

    function rotate() {
        var faces = document.getElementById("facesGroup");
        let x = Math.floor(Math.random()*720-360);
        let y = Math.floor(Math.random()*720-360);
        let z = Math.floor(Math.random()*720-360);
    

        faces.style.webkitTransform = "rotateX(" + x + "deg)" + "rotateY(" + y + "deg)" + "rotateZ(" + z + "deg)";
        
    }


