let query = prompt('Query');

if (query != null) {
    window.open(`https://www.google.com/search?q=site:${encodeURIComponent(window.location.hostname)} "${encodeURIComponent(query)}"`);
}
