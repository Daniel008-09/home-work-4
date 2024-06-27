document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.quotable.io/random', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Status 200 received:', xhr.responseText);
            } else {
                console.log('Error:', xhr.status);
            }
        }
    };
    xhr.send();
});

function fetchQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.quotable.io/random', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Status 200 received:', xhr.responseText);
            } else {
                console.log('Error:', xhr.status);
            }
        }
    };
    xhr.send();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetch-quote-button').addEventListener('click', fetchQuote);
});