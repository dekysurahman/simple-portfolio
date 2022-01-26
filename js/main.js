const idName = document.querySelector("#name");
const idGender = document.querySelector("#gender");

let i = 0;
const txtName = "Deky Surahman";
const txtGender = "Male";
const speed = 120;

function typeWriter() {
  if (i < txtName.length) {
    idName.innerHTML += txtName.charAt(i);
    idGender.innerHTML += txtGender.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
