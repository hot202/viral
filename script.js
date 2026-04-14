const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

// ভিডিও এবং থাম্বনেইল লজিক
for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // আপনার চাহিদা মতো থাম্বনেইল ফাইল নেম: tmb_1.jpg, tmb_2.jpg...
    const vThumb = `tmb_${i}.jpg`;
    const vSrc = `video_${i}.mp4`;

    card.innerHTML = `
        <div class="video-container">
            <div id="ad_overlay_${i}" class="ad-overlay">
                <div class="ad-header">ভিডিও প্লে হচ্ছে <span id="timer_${i}">15</span> সেকেন্ড</div>
                <iframe src="${adDirectLink}" class="ad-frame" loading="lazy"></iframe>
            </div>
            
            <video id="video_${i}" controls preload="metadata" poster="${vThumb}">
                <source src="${vSrc}" type="video/mp4">
            </video>
        </div>
        <h3 style="padding:10px; font-size:14px; margin:0;">ভিডিও #${i}</h3>
    `;

    videoGrid.appendChild(card);

    const videoElement = document.getElementById(`video_${i}`);
    const adOverlay = document.getElementById(`ad_overlay_${i}`);
    const timerSpan = document.getElementById(`timer_${i}`);

    videoElement.addEventListener('play', function(e) {
        if (!this.dataset.played) {
            e.preventDefault();
            this.pause(); 
            this.dataset.played = "true";

            // অ্যাড দেখানো
            adOverlay.style.display = "block";
            let timeLeft = 15;

            let countdown = setInterval(() => {
                timeLeft--;
                timerSpan.innerText = timeLeft;
                
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    adOverlay.remove(); // ১৫ সেকেন্ড পর অ্যাড পুরোপুরি ভ্যানিশ
                    videoElement.play(); // ভিডিও শুরু
                }
            }, 1000);
        }
    });
}
