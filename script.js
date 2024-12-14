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
// script.js
document.getElementById('showEffectBtn').addEventListener('click', function () {
    // Hiển thị trái tim
    const heartEffect = document.getElementById('heartEffect');
    heartEffect.classList.remove('hidden'); // Hiện trái tim
    heartEffect.classList.add('fade-in'); // Thêm hoạt ảnh

    // Phát âm thanh
    const soundEffect = document.getElementById('soundEffect');
    soundEffect.play();

    // Thêm hiệu ứng ẩn trái tim sau 3 giây
    setTimeout(() => {
        heartEffect.classList.add('hidden');
    }, 5000); // Ẩn sau 3 giây
});