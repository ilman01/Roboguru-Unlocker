window.addEventListener("load", function() {
    window.setTimeout(main,1000)
}, false);

function main() 
{
    fetch('https://raw.githubusercontent.com/ilman01/Roboguru-Unlocker/main/css/bypasser.css')
    .then(response => response.text())
    .then((data) => {
        console.log(data)
        addStyle(data)
    })
}

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }