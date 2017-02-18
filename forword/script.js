/**
 * Created by my4637275 on 2017/2/18.
 */

var index = 1;

function next() {
    if(index == 6){
        return;
    }
    var nowPage = document.getElementById('page'+index);
    nowPage.style.webkitTransform = "rotateX(-90deg)";

    index++;
    var nextPage = document.getElementById('page'+index);
    nextPage.style.webkitTransform = "rotateX(0deg)";
}

function pres() {
    if(index == 1){
        return;
    }
    var nowPage = document.getElementById('page'+index);
    nowPage.style.webkitTransform = "rotateX(90deg)";

    index -- ;
    var nextPage = document.getElementById('page'+index);
    nextPage.style.webkitTransform = "rotateX(0deg)";
}