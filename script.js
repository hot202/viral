const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // ভিডিও কার্ডের কন্টেন্ট
    card.innerHTML = `
        <h3>ভিডিও নং: ${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
            আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
        </video>
        <div class="ad-slot">
            <span class="ad-label">Sponsored Ad</span>
            <div id="ad_container_${i}">
                <script type="text/javascript">
                    atOptions = {
                        'key' : 'b834076c7c87de1ecdfca19c7cd0b23b',
                        'format' : 'iframe',
                        'height' : 60,
                        'width' : 468,
                        'params' : {}
                    };
                </script>
                <script type="text/javascript" src="https://www.highperformanceformat.com/b834076c7c87de1ecdfca19c7cd0b23b/invoke.js"></script>
                </div>
        </div>
    `;

    videoGrid.appendChild(card);

    const videoElement = card.querySelector('video');

    // ভিডিও প্লে করলে Direct Link ওপেন হবে
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}
