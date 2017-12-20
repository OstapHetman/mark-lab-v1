var modal1 = document.getElementById('imageModal1'),
    modal2 = document.getElementById('imageModal2'),
    modal3 = document.getElementById('imageModal3'),
    img1 = document.getElementById('myImg1'),
    img2 = document.getElementById('myImg2'),
    img3 = document.getElementById('myImg3'),
    modalImg1 = document.getElementById("image-1"),
    modalImg2 = document.getElementById("image-2"),
    modalImg3 = document.getElementById("image-3"),
    close1 = document.getElementsByClassName("close1")[0],
    close2 = document.getElementsByClassName("close2")[0],
    close3 = document.getElementsByClassName("close3")[0];

img1.onclick = function() {
    modal1.style.display = "block";
    modalImg1.src = this.src;
}
img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = this.src;
}
img3.onclick = function() {
        modal3.style.display = "block";
        modalImg3.src = this.src;
    }
    // When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    modal1.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
}
close3.onclick = function() {
    modal3.style.display = "none";
}