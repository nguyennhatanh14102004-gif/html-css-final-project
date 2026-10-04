function upDate(element) {
  console.log("upDate() triggered");
  console.log("Alt:", element.alt);
  console.log("Source:", element.src);

  document.getElementById("image").innerHTML = element.alt;
  document.getElementById("image").style.backgroundImage = "url('" + element.src + "')";
}

function unDo() {
  console.log("unDo() triggered");

  document.getElementById("image").innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
  document.getElementById("image").style.backgroundImage = "url('')";
}
