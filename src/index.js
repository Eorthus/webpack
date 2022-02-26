import '../css/style.css';
import '../css/style.scss';
//../js/index.js

import { drawItem } from './item'
import base from './base'

const gallery = document.querySelector('.gallery')

base.map(item => gallery.appendChild(drawItem(item)))
/*for (let i = 0; i < 4; i++) {
return item[i] = ` <img class="image" src="${obj[i].img}" alt="">
<h3 class="title">${obj[i].title}</h3>
<p class="caption">${obj[i].caption}</p>`
}
main.innerHTML = item;*/

