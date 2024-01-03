// Attach the scroll event listener
window.onscroll = function () {
  scrollFunction();
};

const header = document.getElementById("header");
const buttonTop = document.getElementById("buttonTop");
const navigation = document.getElementById("navigation");
const projectTab = document.getElementById("tab");
const certifTab = document.getElementById("tab-certification");

function scrollFunction() {
  const nama = document.getElementById("nama");
  const link = document.getElementById("link");

  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
    nama.style.fontSize = "25px";
    link.style.fontSize = "17px";
    header.style.padding = "0px";
    nama.style.color = "black";
    buttonTop.style.display = "block";
    if (window.innerWidth <= 768) {
      link.style.fontSize = "15px";
    } else if (window.innerWidth <= 300) {
      link.style.fontSize = "5px";
    } else {
      link.style.fontSize = "17px";
    }
  } else {
    nama.style.fontSize = "30px";
    nama.style.color = "blue";
    buttonTop.style.display = "none";
    link.style.fontSize = "20px";
    header.style.padding = "15px 0px";

    if (window.innerWidth <= 768) {
      link.style.fontSize = "15px";
      header.style.padding = "10px 0px";
    } else if (window.innerWidth <= 300) {
      link.style.fontSize = "5px";
      header.style.padding = "5px 0px";
    } else {
      link.style.fontSize = "20px";
      header.style.padding = "15px 0px";
    }
  }
}

const homeReset = document.getElementById("homeReset");
let navLinks = navigation.querySelectorAll(".nav-list li a");
homeReset.addEventListener("click", function () {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
});

buttonTop.addEventListener("click", function () {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let current = document.querySelector(".nav-list li a.active");
    if (current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*window.onload = function () {
    topFunction();
};**/

function openProject(projectName) {
  let i;
  let x = document.getElementsByClassName("projectTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(projectName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const projectTabs = document.querySelectorAll(".bar-item-button");

  for (let i = 0; i < projectTabs.length; i++) {
    projectTabs[i].addEventListener("click", function () {
      let currentTab = document.querySelector(".bar-item-button.active");
      if (currentTab) {
        currentTab.classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});

function openCertif(certifName) {
  let i;
  let x = document.getElementsByClassName("certification-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.flexDirection = ""; // Menghapus properti flexDirection yang mungkin sudah ada
  }

  let certifElement = document.getElementById(certifName);
  certifElement.style.display = "flex"; // Mengatur tipe display menjadi flex
  certifElement.style.flexDirection = "row";
}

document.addEventListener("DOMContentLoaded", function () {
  const certifTabs = document.querySelectorAll(".bar-certification-button");

  for (let i = 0; i < certifTabs.length; i++) {
    certifTabs[i].addEventListener("click", function () {
      let currentTab = document.querySelector(".bar-certification-button.active");
      if (currentTab) {
        currentTab.classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});

let modalWeb = document.getElementById("web-modal");
let modaljavascript = document.getElementById("javascript-modal");
let modalFrontend = document.getElementById("frontend-modal");
let modalPython = document.getElementById("python-modal");
let modalMath = document.getElementById("math-modal");
let modalTensorflow = document.getElementById("tensorflow-modal");
let modalStructuring = document.getElementById("structuring-modal");
let modalProfessional = document.getElementById("professional-modal");
let modalKotlin = document.getElementById("kotlin-modal");
let modalAndroid = document.getElementById("android-modal");
let modalSolid = document.getElementById("solid-modal");

let imgWeb = document.getElementById("imgWeb");
let imgJavascript = document.getElementById("imgJavascript");
let imgFrontend = document.getElementById("imgFrontend");
let imgPython = document.getElementById("imgPython");
let imgMath = document.getElementById("imgMath");
let imgTensoflow = document.getElementById("imgTensoflow");
let imgStructuring = document.getElementById("imgStructuring");
let imgProfessional = document.getElementById("imgProfessional");
let imgKotlin = document.getElementById("imgKotlin");
let imgAndroid = document.getElementById("imgAndroid");
let imgSolid = document.getElementById("imgSolid");

function pdfOnClick(img, modal) {
  img.onclick = function () {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  };
}

pdfOnClick(imgWeb, modalWeb);
pdfOnClick(imgJavascript, modaljavascript);
pdfOnClick(imgFrontend, modalFrontend);
pdfOnClick(imgPython, modalPython);
pdfOnClick(imgMath, modalMath);
pdfOnClick(imgTensoflow, modalTensorflow);
pdfOnClick(imgStructuring, modalStructuring);
pdfOnClick(imgProfessional, modalProfessional);
pdfOnClick(imgKotlin, modalKotlin);
pdfOnClick(imgAndroid, modalAndroid);
pdfOnClick(imgSolid, modalSolid);

function pdfClose(modal, elemen) {
  let span = document.getElementsByClassName("close")[elemen];
  span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };
}

pdfClose(modalWeb, 0);
pdfClose(modaljavascript, 1);
pdfClose(modalFrontend, 2);
pdfClose(modalPython, 3);
pdfClose(modalMath, 4);
pdfClose(modalTensorflow, 5);
pdfClose(modalStructuring, 6);
pdfClose(modalProfessional, 7);
pdfClose(modalKotlin, 8);
pdfClose(modalAndroid, 9);
pdfClose(modalSolid, 10);

function openBookshelf() {
  window.open("https://github.com/fiennaalya/Bookshelf-App-Dicoding-Submission", "_blank");
}

function demoBookshelf() {
  window.open("https://fiennaalya.github.io/Bookshelf-App-Dicoding-Submission/", "_blank");
}

function openFreshSnap() {
  window.open("https://github.com/fiennaalya/freshsnap", "_blank");
}

function openHeartTune() {
  window.open("https://github.com/fiennaalya/HeartTune-Android-App-for-Heart-Sound-Identification-", "_blank");
}

function openGithub() {
  window.open("https://github.com/fiennaalya/Github-User-Android-App-Dicoding-Submission", "_blank");
}

function openCV() {
  window.open("https://docs.google.com/document/d/1FX3rHKEu_Dkpgudm9LjtMENCVj3XYtVI7gaFZ_sIrpc/edit?usp=sharing", "_blank");
}
function openContacts() {
  window.location.href = "./frontend-project/contacts.html";
}
