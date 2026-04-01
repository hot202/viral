const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const adKey = "749353bf74da5e0e833cb6d506b3b614";
const videoGrid = document.getElementById('video-grid');

// Specific video numbers for ads
const adPositions = [1, 5, 9, 15];

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    let content = "";
    
    // Check if current video should have a banner on top
    if (adPositions.includes(i)) {
        content += `
            <div class="ad-slot-top">
                <span class="ad-label">SPONSORED</span>
                <div id="ad_top_${i}"></div>
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

    // Inject Script if it's an ad position
    if (adPositions.includes(i)) {
        injectAd(`ad_top_${i}`);
    }

    // Direct Link on Video Play
    const videoElement = card.querySelector('video');
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}

// 20-ti video shesh howar por ekdom niche final banner ad
const bottomAdContainer = document.createElement('div');
bottomAdContainer.className = 'final-bottom-ad';
bottomAdContainer.innerHTML = `
    <span class="ad-label">SPONSORED CONTENT</span>
    <div id="final_bottom_ad"></div>
`;
document.querySelector('.container').appendChild(bottomAdContainer);
injectAd('final_bottom_ad');

// Function to inject Adsterra Script safely
function injectAd(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const conf = document.createElement('script');
    conf.type = 'text/javascript';
    conf.text = `atOptions = { 'key' : '${adKey}', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };`;
    container.appendChild(conf);

    const invoke = document.createElement('script');
    invoke.type = 'text/javascript';
    invoke.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    container.appendChild(invoke);
}
