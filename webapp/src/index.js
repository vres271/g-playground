import './style.css';
import * as util from './core/util.js';
import { program1 } from './playground/program1.js';

function component() {
  const element = util.create('div');
  element.className = 'main';
  program1(element);
  return element;
}

document.body.appendChild(component());