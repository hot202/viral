const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const adKey = "749353bf74da5e0e833cb6d506b3b614";
const videoGrid = document.getElementById('video-grid');

const adPositions = [1, 5, 9, 15];

// থাম্বনেইল ডাটাবেজ (এখানে আপনার থাম্বনেইল ইমেজের নাম দিন)
const videoData = {
    1: { src: "video_1.mp4", thumb: "thumb_1.jpg" },
    2: { src: "video_2.mp4", thumb: "thumb_2.jpg" },
    // বাকিগুলো ডিফল্টভাবে thumb_i.jpg হিসেবে লোড হবে
};

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    const vSrc = videoData[i] ? videoData[i].src : `video_${i}.mp4`;
    const vThumb = videoData[i] ? videoData[i].thumb : `thumb_${i}.jpg`;

    let contentHTML = `
        <h3>ভাইরাল ভিডিও #${i}</h3>
        <div class="video-container" style="position:relative; overflow:hidden;">
            <div id="timer_overlay_${i}" class="timer-overlay" style="display:none;">
                <div class="timer-box">
                    <p>ভিডিও শুরু হচ্ছে...</p>
                    <span id="count_${i}">5</span>s
                </div>
            </div>
            <video id="video_${i}" controls preload="metadata" poster="${vThumb}">
                <source src="${vSrc}" type="video/mp4">
            </video>
        </div>
    `;

    card.innerHTML = contentHTML;
    videoGrid.appendChild(card);

    const videoElement = document.getElementById(`video_${i}`);
    const overlay = document.getElementById(`timer_overlay_${i}`);
    const countSpan = document.getElementById(`count_${i}`);

    videoElement.addEventListener('play', function(e) {
        if (!this.dataset.played) {
            this.pause(); 
            this.dataset.played = "true";
            
            // নতুন ট্যাবে অ্যাড ওপেন করা
            window.open(adDirectLink, '_blank');

            // টাইমার দেখানো
            overlay.style.display = "flex";
            let timeLeft = 5;

            let countdown = setInterval(() => {
                timeLeft--;
                countSpan.innerText = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    overlay.style.display = "none";
                    videoElement.play(); // ৫ সেকেন্ড পর ভিডিও অটো-প্লে
                }
            }, 1000);
        }
    });
}
