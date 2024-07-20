var dropdowns = document.querySelectorAll('.dropdown-trigger');
var iter = 0;
dropdowns[iter].click();setInterval(function() {
    var buttons = document.querySelectorAll('ytd-menu-service-item-renderer tp-yt-paper-item');
    for (let j = 0; j < buttons.length; j++) {
        var button = buttons[j];
        if (button.innerHTML.match('Remove from')) {
            button.click();
        }
    }
    iter++;
    dropdowns[iter].click();
}, 1000);
