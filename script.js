document.getElementById("showEffectBtn").addEventListener("click", function () {
    // Hiển thị hiệu ứng trái tim
    const heartElement = document.getElementById("heartEffect");
    heartElement.classList.remove("hidden");
    heartElement.classList.add("show");

    // Phát âm thanh
    const sound = document.getElementById("soundEffect");
    sound.play();

    // Ẩn hiệu ứng sau 1.5 giây
    setTimeout(() => {
        heartElement.classList.remove("show");
        heartElement.classList.add("hidden");
    }, 1500);
});