import '../styles/index.scss';
import isTouch from "./isTouch";

window.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (!isTouch()) document.documentElement.classList.add('no-touchevents');
else document.documentElement.classList.add('touchevents');
if (window.isIOS) document.documentElement.classList.add('ios');

window.addEventListener("load", () => {
    document.documentElement.classList.add('load');


    const gra = function(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    const gri = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const init = function(){
        let items = document.querySelectorAll('.gallery li');
        for (let i = 0; i < items.length; i++){
            items[i].style.minWidth = gra(20,20) + 'vw';
            items[i].style.background = randomColor({ luminosity: 'light' });
        }
        cssScrollSnapPolyfill()
    }
    init();

    
    
    const init2 = function(){
        let items = document.querySelectorAll('.scroller li');
        for (let i = 0; i < items.length; i++){
            items[i].style.minHeight = gra(20,30) + 'vh';
            items[i].style.background = randomColor({luminosity: 'light'});
        }        
        cssScrollSnapPolyfill()
    }
    init2();
});
