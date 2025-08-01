let bannerIcon = document.getElementById("banner-icon");

bannerIcon.onclick = function(event) {
    event.preventDefault();
    let popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <img src="img/buff_steve.png" alt="Buff Steve" style="max-width: 70%; max-height: 80%;">
    `;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.style.height = "100%";
        popup.style.width = "100%";

        let audio = new Audio("audio/vine-boom.mp3");
        audio.play();
        audio.onended = audio.remove();
    });
    setTimeout(() => {
        popup.style.height = "0";
        popup.style.width = "0";
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    }, 1000);
}
