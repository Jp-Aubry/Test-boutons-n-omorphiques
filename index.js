var modal = document.getElementById("myModal");
var i;

var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img");

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
