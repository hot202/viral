const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 

const videoGrid = document.getElementById('video-grid');
const fullAdModal = document.getElementById('full-screen-ad');
const adIframe = document.getElementById('ad-iframe');
const mainTimer = document.getElementById('main-timer');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // থাম্বনেইল ফরম্যাট tmb_1.jpg
    const vThumb = `tmb_${i}.jpg`;
    const vSrc = `video_${i}.mp4`;

    card.innerHTML = `
        <video id="video_${i}" controls preload="metadata" poster="${vThumb}">
            <source src="${vSrc}" type="video/mp4">
        </video>
        <h3 style="padding:10px; font-size:15px; text-align:center;">ভিডিও #${i}</h3>
    `;

    videoGrid.appendChild(card);

    const videoElement = document.getElementById(`video_${i}`);

    videoElement.addEventListener('play', function(e) {
        if (!this.dataset.played) {
            this.pause(); 
            this.dataset.played = "true";

            // ফুল স্ক্রিন অ্যাড চালু
            adIframe.src = adDirectLink;
            fullAdModal.style.display = "flex";
            
            let timeLeft = 15;
            mainTimer.innerText = timeLeft;

            let countdown = setInterval(() => {
                timeLeft--;
                mainTimer.innerText = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    // অ্যাড বন্ধ করা
                    fullAdModal.style.display = "none";
                    adIframe.src = ""; 
                    // ভিডিও প্লে করা
                    videoElement.play();
                }
            }, 1000);
        }
    });
}
