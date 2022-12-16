window.addEventListener("load", function() {
    window.setTimeout(main,1000)
}, false);

function main() 
{

    addStyle(`
    .chakra-stack{
        max-height: none;
        -webkit-mask-image: none;
    }
    
    .question-content.css-zmelcr {
        margin-bottom: 15rem;
    }
    
    .question-content{
        max-height: none !important;
        -webkit-mask-image: none !important;
    }
    
    .chakra-stack.css-ujz8lb{
        display: none;
    }
    
    .chakra-stack.css-1c77zrq{
        display: none;
    }
    `);
}

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }