const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const adKey = "749353bf74da5e0e833cb6d506b3b614";
const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // ১ নম্বর ভিডিওর জন্য বিশেষ ভাবে অ্যাড এবং ভিডিও সেট করা
    let content = "";
    if (i === 1) {
        content += `
            <div class="top-ad-slot">
                <span style="font-size: 10px; color: #555; display: block; margin-bottom: 5px;">SPONSORED CONTENT</span>
                <div id="top_banner_ad"></div>
            </div>
        `;
    }

    content += `
        <h3>ভিডিও ক্লিপ #${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
        </video>
    `;

    card.innerHTML = content;
    videoGrid.appendChild(card);

    // ১ নম্বর ভিডিওর উপরের স্লটে অ্যাড স্ক্রিপ্ট ইনজেক্ট করা
    if (i === 1) {
        const adContainer = document.getElementById('top_banner_ad');
        
        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.text = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
        adContainer.appendChild(conf);

        const invoke = document.createElement('script');
        invoke.type = 'text/javascript';
        invoke.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
        adContainer.appendChild(invoke);
    }

    // ভিডিও প্লে হলে Direct Link ওপেন হওয়ার লজিক
    const videoElement = card.querySelector('video');
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}
