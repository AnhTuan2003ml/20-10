onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

window.addEventListener('load', function () {
  const audio = document.getElementById("backgroundMusic");

  // Cố gắng phát nhạc khi trang tải
  const playPromise = audio.play();

  // Nếu nhạc không thể tự động phát, do chặn chính sách tự động phát
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Nhạc đã phát thành công
      console.log("Nhạc đang phát tự động.");
    }).catch(error => {
      // Nhạc bị chặn, cần tương tác từ người dùng
      console.log("Nhạc bị chặn. Yêu cầu người dùng nhấp để phát nhạc.");

      // Tạo một sự kiện để yêu cầu nhấp để phát nhạc
      document.body.addEventListener('click', () => {
        audio.play();
        console.log("Nhạc đã phát sau khi nhấp chuột.");
      }, { once: true }); // Lắng nghe một lần duy nhất
    });
  }
});
