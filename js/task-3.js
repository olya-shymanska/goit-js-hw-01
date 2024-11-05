'use strict';

function getElementWidth(content, padding, border) {
    content = parseInt(content);
    padding = parseInt(padding);
    border = parseFloat(border);

    const totalWidth = content + (padding * 2) + (border * 2);

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200