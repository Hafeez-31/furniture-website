function goTopage(input) {
    console.log("myFunction was called.");
    let tablink = document.querySelector('a[href="#${input}"]');
    if (tablink) {
          tablink.show();
    }
}
