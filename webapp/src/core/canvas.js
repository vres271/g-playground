import { create } from "./util";

export function createCanvas(parentElem) {
    const canvas = create('canvas', parentElem, {
        width: 1000, 
        height: 1000,
        className: 'canvas'
    })
    const ctx = canvas.getContext('2d');
    return [canvas, ctx];
}