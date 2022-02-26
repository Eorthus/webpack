import '../css/style.css';
import '../css/style.scss';

import { drawItem } from './item'
import base from './base'

const gallery = document.querySelector('.gallery')

base.map(item => gallery.appendChild(drawItem(item)))

