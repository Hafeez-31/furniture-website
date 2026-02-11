function goTopage(input) {
    console.log("myFunction was called.");
    let tablink = document.querySelector('a[href="#${input}"]');
    if (tablink) {
          tablink.show();
    }
}

function toggleMenu(element){
    document.querySelector(".navbar").classList.toggle("active");
    element.classList.toggle("open");
}