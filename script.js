onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  setTimeout(() => {
    alert(
      "Em Hiếu và em Khánh mafia internet, ông trùm kéo view số 1 Việt Nam. Chúc tất cả các chị em 20/10 vui vẻ và hạnh phúc. Chúc các chị em 20/10 vui vẻ bên gia đình, sức khoẻ gia đình luôn bình an, đường chị em đi có quý nhân phụ trợ, việc chị em làm có quỷ dữ bảo kê, công việc thì tài lộc đồng hành thần tài dẫn lối. Chúc các chị có một bầu trời tình thương và một đại dương tình cảm. Chúc các chị em 83 86, vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ và ngập tràn hạnh phúc các chị em nhé. Chúc các chị em mãi đỉnh mãi đỉnh, mãi xinh mãi xinh, và mãi yêu mãi yêu!!! ❤️"
    );
    //   window.location.href = "index.html";
  }, 7000);
};
