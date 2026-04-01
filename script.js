const totalVideos = 20; // আপনি চাইলে বাড়াতে পারেন
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096";

// আপনার Adsterra Banner Key এখানে বসান (Dashboard থেকে পাবেন)
const adsterraBannerKey = "YOUR_BANNER_KEY_HERE"; 

const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // ভিডিও কার্ডের ইন্টারফেস
    card.innerHTML = `
        <h3>ভিডিও ক্লিপ #${i}</h3>
        <video id="video_${i}" controls preload="metadata" poster="thumbnail.jpg">
            <source src="video_${i}.mp4" type="video/mp4">
        </video>
        <div class="ad-container">
            <span class="ad-label">Sponsored Ad</span>
            <div id="ad_slot_${i}">
                <p style="font-size:12px; color:#444;">ব্যানার লোড হচ্ছে...</p>
            </div>
        </div>
    `;

    videoGrid.appendChild(card);

    const videoElement = card.querySelector('video');

    // লজিক ১: ভিডিও প্লে করলেই আপনার Direct Link ওপেন হবে
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });

    // লজিক ২: ভিডিও ফুল স্ক্রিন করার অপশন (ডিফল্ট থাকে, জাস্ট নিশ্চিত করা)
    videoElement.addEventListener('dblclick', function() {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        }
    });
}

/** * Adsterra Banner Integration Note:
 * Adsterra-এর ব্যানার স্ক্রিপ্ট সাধারণত ডকুমেন্ট লোড হওয়ার পর 
 * নির্দিষ্ট ডিভে ইনজেক্ট করতে হয়। 
 * নিচের কোডটি আপনার ব্যানারের জন্য কাজ করবে:
 */
// (ব্যানার স্ক্রিপ্টটি প্রতিটি ভিডিওর নিচে কাজ করানোর জন্য আপনার Adsterra কোডটি এখানে পেস্ট করতে পারেন)
