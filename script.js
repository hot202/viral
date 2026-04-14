const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    card.innerHTML = `
        <div class="video-container">
            <div id="ad_overlay_${i}" class="ad-overlay">
                <div class="ad-header">ভিডিও প্লে হচ্ছে <span id="timer_${i}">15</span> সেকেন্ড</div>
                <p style="text-align:center; padding:20px; font-weight:bold;">অ্যাডটি লোড হচ্ছে, দয়া করে অপেক্ষা করুন...</p>
            </div>
            
            <video id="video_${i}" controls preload="metadata" poster="tmb_${i}.jpg">
                <source src="video_${i}.mp4" type="video/mp4">
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

            // অ্যাডটি নতুন ট্যাবে ফুল স্ক্রিন ওপেন হবে (এতে আয় বেশি হবে)
            window.open(adDirectLink, '_blank');

            // আপনার পেজে টাইমার শুরু হবে
            adOverlay.style.display = "block";
            let timeLeft = 15;

            let countdown = setInterval(() => {
                timeLeft--;
                timerSpan.innerText = timeLeft;
                
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    adOverlay.remove(); 
                    videoElement.play(); 
                }
            }, 1000);
        }
    });
}
