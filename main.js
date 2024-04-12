const inpBox = document.querySelector(".inp_box");
const inpUrl = document.querySelector(".inp_url");
const alertBox = document.querySelector(".alert_box");
const closeBtn = document.querySelector(".close_btn");
const thumbnailBtn = document.querySelector(".thumbnail_btn");
const thumbnailImg = document.querySelectorAll(".thumbnail_img");
const descriptionButton = document.querySelector(".description_button");

descriptionButton.addEventListener("click", () => alertBox.showModal());
closeBtn.addEventListener("click", () => alertBox.close());

inpBox.addEventListener("input", (e) => {
  if (e.target.value.trim().length > 0) thumbnailBtn.disabled = false;
  else thumbnailBtn.disabled = true;
});

inpBox.addEventListener("click", (e) => {
  if (e.target.className === "thumbnail_btn") {
    let URL;
    URL = inpUrl.value;

    if (URL.includes("www")) {
      URL = URL.split("=")[1];
    } else {
      URL = URL.split("/")[3];
      URL = URL.split("?")[0];
    }

    for (let i = 0; i < 5; i++) {
      thumbnailImg[i].classList.add("show");
      // console.log(thumbnailImg[i].className);;
    }

    // 더 생각해서 코드 효율적으로 고치기
    document.querySelector(
      ".default"
    ).src = `https://img.youtube.com/vi/${URL}/default.jpg`;
    document.querySelector(
      ".mqdefault"
    ).src = `https://img.youtube.com/vi/${URL}/mqdefault.jpg`;
    document.querySelector(
      ".hqdefault"
    ).src = `https://img.youtube.com/vi/${URL}/hqdefault.jpg`;
    document.querySelector(
      ".sddefault"
    ).src = `https://img.youtube.com/vi/${URL}/sddefault.jpg`;
    document.querySelector(
      ".maxresdefault"
    ).src = `https://img.youtube.com/vi/${URL}/maxresdefault.jpg`;
  } else if (e.target.className === "thumbnail_btn_reset") {
    thumbnailBtn.disabled = true;
    inpUrl.value = "";

    for (let i = 0; i < 5; i++) {
      thumbnailImg[i].classList.remove("show");
    }
  }
});
