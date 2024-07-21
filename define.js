window.focus();
let selection = window.getSelection();

if (selection != null) {
    window.open('https://www.dictionary.com/browse/' + encodeURIComponent(selection.toString()));
}
