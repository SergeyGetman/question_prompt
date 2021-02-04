

document.querySelectorAll('.oops').forEach(oops => {
    const button = oops.querySelector('button');
    const input =  oops.querySelector('input');
    const p =  oops.querySelector('p');
    
    button.onclick = () => oops.innerHTML =  `- ${p.innerText} <br>- ${input.value}`;
    
    input.onkeydown = e => {
        if (e.keyCode == 13) { // enter
            button.click();
        }
    }
});
