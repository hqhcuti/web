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
    }, 1500); // Ẩn sau 1.5 giây
});

// Tạo bông tuyết
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";  // Bông tuyết (có thể thay đổi biểu tượng)

    // Vị trí và kích thước ngẫu nhiên
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    const size = Math.random() * 10 + 10; // Kích thước từ 10px đến 20px
    snowflake.style.fontSize = `${size}px`;

    // Tốc độ rơi và độ lắc lư ngẫu nhiên
    const fallDuration = Math.random() * 1 + 1;
    snowflake.style.animationDuration = `${fallDuration}s`;

    const swayDuration = Math.random() * 2 + 2;
    snowflake.style.animationDelay = `${Math.random()}s`;
    snowflake.style.animation = `fall ${fallDuration}s linear infinite, sway ${swayDuration}s ease-in-out infinite`;

    document.body.appendChild(snowflake);

    // Xóa bông tuyết sau khi rơi xong
    setTimeout(() => {
        snowflake.remove();
    }, fallDuration * 1000);
}

// Tạo bông tuyết mỗi 200ms
setInterval(createSnowflake, 200);
