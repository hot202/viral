const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');
const adKey = "749353bf74da5e0e833cb6d506b3b614";

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // ১ এবং ৩ নম্বর ভিডিওর জন্য আলাদা অ্যাড সেকশন ভেরিয়েবল
    let adHTML = "";
    if (i === 1 || i === 3) {
        adHTML = `
            <div class="ad-slot">
                <span class="ad-label">SPONSORED AD</span>
                <div id="ad_space_${i}"></div>
            </div>
        `;
    }

    // কার্ডের ভেতর ভিডিও সেট করা (বাকি ভিডিওগুলোর নিচে adHTML একদম খালি থাকবে)
    card.innerHTML = `
        <h3>ভিডিও ক্লিপ #${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
        </video>
        ${adHTML}
    `;

    videoGrid.appendChild(card);

    // শুধুমাত্র ১ ও ৩ নম্বরে অ্যাড স্ক্রিপ্ট ইনজেক্ট করা
    if (i === 1 || i === 3) {
        const container = document.getElementById(`ad_space_${i}`);
        
        const conf = document.createElement('script');
        conf.type = 'text/javascript';
        conf.text = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
        container.appendChild(conf);

        const invoke = document.createElement('script');
        invoke.type = 'text/javascript';
        invoke.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
        container.appendChild(invoke);
    }

    // ভিডিও প্লে করলে Direct Link ওপেন হওয়ার লজিক
    const videoElement = card.querySelector('video');
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}
