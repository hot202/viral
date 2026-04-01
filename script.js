const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // কার্ডের ইন্টারফেস
    card.innerHTML = `
        <h3>ভিডিও ক্লিপ #${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
        </video>
        <div class="ad-slot">
            <span class="ad-label">Sponsored Ad</span>
            <div id="ad_slot_${i}" class="banner-box">
                </div>
        </div>
    `;

    videoGrid.appendChild(card);

    // অ্যাড স্ক্রিপ্ট ইনজেক্ট করার সঠিক পদ্ধতি
    const adContainer = document.getElementById(`ad_slot_${i}`);
    
    // Adsterra Configuration Script
    const scriptConfig = document.createElement('script');
    scriptConfig.type = 'text/javascript';
    scriptConfig.text = `
        atOptions = {
            'key' : 'b834076c7c87de1ecdfca19c7cd0b23b',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    `;
    adContainer.appendChild(scriptConfig);

    // Adsterra Invoke Script
    const scriptInvoke = document.createElement('script');
    scriptInvoke.type = 'text/javascript';
    scriptInvoke.src = 'https://www.highperformanceformat.com/b834076c7c87de1ecdfca19c7cd0b23b/invoke.js';
    adContainer.appendChild(scriptInvoke);

    // ভিডিও প্লে হলে Direct Link ওপেন হওয়ার লজিক
    const videoElement = card.querySelector('video');
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}
