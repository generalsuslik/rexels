const header = document.querySelector('#header');


window.onscroll = function(){
    let top = window.scrollY;

    if(top >= 600){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    
    console.log(top);
}

