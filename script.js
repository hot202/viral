const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // ভিডিও কার্ডের বেসিক স্ট্রাকচার
    let cardHTML = `
        <h3>ভিডিও ক্লিপ #${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
        </video>
    `;

    // ১ নম্বর এবং ৩ নম্বর ভিডিওর নিচে ব্যানার অ্যাড যোগ করা
    if (i === 1 || i === 3) {
        cardHTML += `
            <div class="ad-slot" style="min-height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #000; padding: 10px;">
                <span style="font-size: 10px; color: #444; margin-bottom: 5px;">SPONSORED AD</span>
                <div id="ad_container_${i}">
                    <script type="text/javascript">
                        atOptions = {
                            'key' : '749353bf74da5e0e833cb6d506b3b614',
                            'format' : 'iframe',
                            'height' : 250,
                            'width' : 300,
                            'params' : {}
                        };
                    </script>
                    <script type="text/javascript" src="https://www.highperformanceformat.com/749353bf74da5e0e833cb6d506b3b614/invoke.js"></script>
                </div>
            </div>
        `;
    } else {
        // বাকি ভিডিওর নিচে শুধু একটি বাটন (ঐচ্ছিক, চাইলে রাখতে পারেন)
        cardHTML += `
            <div class="ad-slot" style="padding: 15px; text-align: center;">
                <button class="ad-btn" onclick="window.open('${adDirectLink}', '_blank')" style="background: #e74c3c; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; width: 100%;">WATCH IN HD / DOWNLOAD</button>
            </div>
        `;
    }

    card.innerHTML = cardHTML;
    videoGrid.appendChild(card);

    // ভিডিও প্লে করলে Direct Link ওপেন হওয়ার লজিক
    const videoElement = card.querySelector('video');
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}
