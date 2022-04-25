"use strict";

// Обязательное задание

const root = document.querySelector('#root');

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createBlock = () => {
        const addStyleToTag = tag => {
            tag.style.cssText = `
                height: ${this.height}px;
                width: ${this.width}px;
                background-color: ${this.bg};
                font-size: ${this.fontSize}px;
                position: ${this.position};
            `;
        };

        if (this.selector[0] === '.') {
            const divTag = document.createElement('div');
            divTag.classList.add(`${this.selector.substr(1)}`);
            addStyleToTag(divTag);
            root.append(divTag);
        } else {
            const pTag = document.createElement('p');
            pTag.setAttribute('id', `${this.selector.substr(1)}`);
            addStyleToTag(pTag);
            root.append(pTag);
        }
    };
};

const block1 = new DomElement('#block', 200, 300, 'green', 22);
const block2 = new DomElement('.block', 100, 200, 'blue', 30);

block1.createBlock();
document.querySelector("#block").textContent = 'Create div';

block2.createBlock();
document.querySelector(".block").textContent = 'Create p';


// Усложненное задание

const Square = function (selector, height, width, bg, fontSize, position) {
    DomElement.call(this, selector, height, width, bg, fontSize);
    this.position = position;
};

Square.prototype = Object.create(DomElement.prototype);

const newSquare = new Square('.square', 100, 100, 'gray', 30, 'absolute');

const createNewSquare = () => {
    newSquare.createBlock();

    const squareToMovie = document.querySelector('.square');
    squareToMovie.style.top = '300px';
    squareToMovie.style.left = '300px';

    document.addEventListener('keydown', (event) => {
        let lastTop = parseFloat(squareToMovie.style.top);
        let lastLeft = parseFloat(squareToMovie.style.left);

        switch (event.key) {
            case 'ArrowDown': {
                squareToMovie.style.top = `${lastTop + 10}px`;
                break;
            }
            case 'ArrowUp': {
                squareToMovie.style.top = `${lastTop - 10}px`;
                break;
            }
            case 'ArrowLeft': {
                squareToMovie.style.left = `${lastLeft - 10}px`;
                break;
            }
            case 'ArrowRight': {
                squareToMovie.style.left = `${lastLeft + 10}px`;
                break;
            }
        }
    });
};

document.addEventListener("DOMContentLoaded", createNewSquare);
