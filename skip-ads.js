(function() {
    let vids = document.querySelectorAll('video');
    vids.forEach(vid => {
        vid.currentTime = vid.duration;
    });
})();

if(window.location.hostname == 'youtube.com' || window.location.hostname == 'www.youtube.com') {
    let btn = document.querySelector('.ytp-skip-ad-button');
    if (btn != null) {
        btn.click();
    }
}
