const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

// প্রতিটি ভিডিওর জন্য আলাদা থাম্বনেইল এখানে সেট করুন
const videoData = {
    1: { thumb: "thumb_1.jpg" },
    2: { thumb: "thumb_2.jpg" },
    // এভাবে আপনার ছবির নাম অনুযায়ী সাজান
};

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    const vThumb = videoData[i] ? videoData[i].thumb : `thumb_${i}.jpg`;

    card.innerHTML = `
        <h3>ভাইরাল ভিডিও #${i}</h3>
        <div class="video-container" style="position:relative;">
            <div id="ad_overlay_${i}" class="ad-overlay" style="display:none;">
                <div class="ad-header">অ্যাড শেষ হতে বাকি: <span id="timer_${i}">5</span>s</div>
                <iframe src="${adDirectLink}" frameborder="0" class="ad-frame"></iframe>
            </div>
            
            <video id="video_${i}" controls preload="metadata" poster="${vThumb}">
                <source src="video_${i}.mp4" type="video/mp4">
            </video>
        </div>
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

            // একই পেজে অ্যাড দেখানো
            adOverlay.style.display = "block";
            let timeLeft = 5;

            let countdown = setInterval(() => {
                timeLeft--;
                timerSpan.innerText = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    adOverlay.remove(); // ৫ সেকেন্ড পর অ্যাড সরিয়ে ফেলা
                    videoElement.play(); // ভিডিও প্লে করা
                }
            }, 1000);
        }
    });
}
