import './index.scss';
import 'normalize.css';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
console.log($);
console.log(jQuery);
// alert('test reload');

import test from '../../components/test'

test('Привет webpack')


    
    // var goTimer = document.getElementById("go");
    // var stopTimer = document.getElementById("stop");
    // var displeyTimer = document.getElementsByClassName("timer");
    // var tested = document.getElementsByClassName("tested");


    // var p = document.createElement("p");
    // var node = document.createTextNode("Новый заголовок");
    // p.appendChild(node);
    // console.log(p);
    // var wrapper = document.getElementsByClassName("wrapper");
    // document.getElementsByClassName("wrapper").appendChild(p);
    // console.log(wrapper);
    // wrapper.replaceChild(p, tested);
    // wrapper.appendChild(p);

var div = document.createElement('div');
div.className = "newdiv";
div.innerHTML = "Новый текст через innerHTML";
console.log(div);


// wrapper.appendChild(div);
// wrapper.insertBefore(div, wrapper.firstChild);
wrapper.replaceChild(div, tested);

