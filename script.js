const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const adKey = "749353bf74da5e0e833cb6d506b3b614";
const videoGrid = document.getElementById('video-grid');

// যে যে ভিডিওর উপরে অ্যাড থাকবে
const adPositions = [1, 5, 9, 15];

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    let contentHTML = "";
    
    // ভিডিওর উপরে অ্যাড যোগ করার লজিক
    if (adPositions.includes(i)) {
        contentHTML += `
            <div class="ad-slot-top">
                <span class="ad-label">SPONSORED AD</span>
                <div id="ad_top_${i}"></div>
            </div>
        `;
    }

    // ভিডিওর মূল অংশ
    contentHTML += `
        <h3>ভাইরাল ভিডিও #${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
            আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
        </video>
    `;

    card.innerHTML = contentHTML;
    videoGrid.appendChild(card);

    // অ্যাড স্ক্রিপ্ট রান করানো (যদি পজিশনে থাকে)
    if (adPositions.includes(i)) {
        injectAdsterraBanner(`ad_top_${i}`);
    }

    // ভিডিও প্লে করলে Direct Link ওপেন হওয়া
    const videoElement = card.querySelector('video');
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}

// একদম শেষে (সব ভিডিওর নিচে) আর একটি অ্যাড যোগ করা
const mainContainer = document.querySelector('.container');
const bottomAdDiv = document.createElement('div');
bottomAdDiv.className = 'final-bottom-ad';
bottomAdDiv.innerHTML = `
    <span class="ad-label">SPONSORED CONTENT</span>
    <div id="final_bottom_ad_unit"></div>
`;
mainContainer.appendChild(bottomAdDiv);
injectAdsterraBanner('final_bottom_ad_unit');

// অ্যাড ইনজেক্ট করার ফাংশন
function injectAdsterraBanner(elementId) {
    const adContainer = document.getElementById(elementId);
    if (!adContainer) return;

    const conf = document.createElement('script');
    conf.type = 'text/javascript';
    conf.text = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
    adContainer.appendChild(conf);

    const invoke = document.createElement('script');
    invoke.type = 'text/javascript';
    invoke.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    adContainer.appendChild(invoke);
}
