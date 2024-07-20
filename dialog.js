var background = document.createElement('div');
background.class = 'darkreader';
background.style.background = 'rgba(0, 0, 0, 0.5)';
background.style.width = '100%';
background.style.height = '100%';
background.style.left = '0';
background.style.top = '0';
background.style.position = 'fixed';
background.style.zIndex = '9999999999';

var dialogBox = document.createElement('div');
dialogBox.style.height = '50%';
dialogBox.style.aspectRatio = '3.2/4';
dialogBox.style.position = 'absolute';
dialogBox.style.background = '#FFFFFF';
dialogBox.style.transform = 'translate(-50%, -50%)';
dialogBox.style.left = '50%';
dialogBox.style.top = '50%';
dialogBox.style.borderRadius = '5%';

var dialogTitle = document.createElement('p');
dialogTitle.style.margin = '1px';
dialogTitle.style.top = '5px';
dialogTitle.style.left = '50%';
dialogTitle.style.transform = 'translate(-50%)';
dialogTitle.style.position = 'absolute';
dialogTitle.style.fontFamily = 'sans-serif';
dialogTitle.style.fontSize = '30px';
dialogTitle.style.fontWeight = '600';
dialogTitle.style.color = '#000000';
dialogTitle.innerText = 'Dialog Box';

var closeButton = document.createElement('button');
closeButton.innerHTML = `
<svg class="icon top-right" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;" viewBox="0 0 390 390">
    <path d="M45 45 L345 345 M345 45 L45 345" style="fill:none;stroke: #000000; stroke-width:45" stroke-linecap="round" />
</svg>
`;
closeButton.style.position = 'absolute';
closeButton.style.width = '30px';
closeButton.style.height = '30px';
closeButton.style.right = '10px';
closeButton.style.top = '10px';
closeButton.style.background = '#F00';
closeButton.style.borderRadius = '10%';
closeButton.style.border = 'none';
closeButton.addEventListener('click', function() {background.remove();});

var line = document.createElement('hr');
line.style.color = '#000000';
line.style.marginTop = '50px';

var dialogContent = document.createElement('div');
dialogContent.style.overflow = 'scroll';
dialogContent.style.width = '100%';
dialogContent.style.maxWidth = '100%';

dialogBox.appendChild(dialogTitle);
dialogBox.appendChild(closeButton);
dialogBox.appendChild(line);
dialogBox.appendChild(dialogContent);
background.appendChild(dialogBox);
document.body.appendChild(background);
