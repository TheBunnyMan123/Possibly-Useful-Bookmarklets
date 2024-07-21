document.querySelector('html').style.filter = 'invert()';

setInterval(function() {
    let elems = document.querySelectorAll('a, img, video');

    for (let i = 0; i < elems.length; i++) {
        let elem = elems[i];
        if (elem.nodeName != 'A') {
            elem.style.filter = 'invert()';
        }else if (elem.nodeName == 'A' && (elem.style.background != '' || elem.style.backgroundImage != '')) {
            elem.style.filter = 'invert()';
        }
    }
}, 300);
