var frame = document.createElement('iframe');

var bodyHtml = document.body.innerHTML;
var headHtml = document.head.innerHTML;

frame.addEventListener('load', function() {
	var frameDoc = frame.contentWindow.document;

 	frameDoc.body.attributes = document.body.attributes;
	frameDoc.head.attributes = document.head.attributes;

	frameDoc.head.innerHTML = headHtml;
  frameDoc.body.innerHTML = bodyHtml;
});

var widthBox = document.createElement('input');
widthBox.type = 'number';
widthBox.value = 1000;
widthBox.style.width = "60px";
widthBox.style.height = "15px";
widthBox.style.fontSize = "14px";
widthBox.style.fontFamily = "sans-serif";

var xText = document.createElement('span');
xText.style.fontSize = "14px";
xText.innerHTML = " x ";
xText.style.fontFamily = "sans-serif";

var heightBox = document.createElement('input');
heightBox.type = 'number';
heightBox.value = 800;
heightBox.style.width = "60px";
heightBox.style.height = "15px";
heightBox.style.fontSize = "14px";
heightBox.style.fontFamily = "sans-serif";

function resizeFrame() {
	frame.width = widthBox.value;
    frame.height = heightBox.value;
}
resizeFrame();

widthBox.addEventListener('change', resizeFrame);
heightBox.addEventListener('change', resizeFrame);

document.body.appendChild(frame);
document.body.removeChild(frame);
document.body.innerHTML = '';

document.body.appendChild(widthBox);
document.body.appendChild(xText);
document.body.appendChild(heightBox);
document.body.appendChild(document.createElement('br'));
document.body.appendChild(frame);
