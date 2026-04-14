const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const adKey = "749353bf74da5e0e833cb6d506b3b614";
const videoGrid = document.getElementById('video-grid');

// অ্যাড পজিশন
const adPositions = [1, 5, 9, 15];

// ভিডিও অনুযায়ী থাম্বনেইল এবং ভিডিও সোর্স সেট করার জন্য অবজেক্ট
// এখানে আপনি আপনার ভিডিও এবং ইমেজের নাম পরিবর্তন করে নিতে পারবেন
const videoData = {
    1: { src: "video_1.mp4", thumb: "thumb_1.jpg" },
    2: { src: "video_2.mp4", thumb: "thumb_2.jpg" },
    // এভাবে ২০টি পর্যন্ত আলাদা থাম্বনেইল সেট করতে পারবেন
};

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // ডিফল্ট ডাটা যদি videoData তে না থাকে
    const vSrc = videoData[i] ? videoData[i].src : `video_${i}.mp4`;
    const vThumb = videoData[i] ? videoData[i].thumb : `thumb_${i}.jpg`;

    let contentHTML = "";
    
    if (adPositions.includes(i)) {
        contentHTML += `
            <div class="ad-slot-top">
                <span class="ad-label">SPONSORED AD</span>
                <div id="ad_top_${i}"></div>
            </div>
        `;
    }

    contentHTML += `
        <h3>ভাইরাল ভিডিও #${i}</h3>
        <div class="video-wrapper" style="position:relative;">
            <video id="video_${i}" controls preload="metadata" poster="${vThumb}">
                <source src="${vSrc}" type="video/mp4">
                আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
            </video>
        </div>
    `;

    card.innerHTML = contentHTML;
    videoGrid.appendChild(card);

    if (adPositions.includes(i)) {
        injectAdsterraBanner(`ad_top_${i}`);
    }

    const videoElement = card.querySelector('video');
    
    // ভিডিও প্লে লজিক (৫ সেকেন্ড অ্যাড ট্রিক)
    videoElement.addEventListener('play', function(e) {
        if (!this.dataset.playedOnce) {
            this.pause(); // ভিডিও পজ করে অ্যাড ওপেন করা
            window.open(adDirectLink, '_blank');
            
            // একটি ছোট নোটিশ বা ওভারলে দেখানো যেতে পারে
            alert("অ্যাডটি ওপেন হয়েছে। ৫ সেকেন্ড পর ভিডিওটি অটোমেটিক শুরু হবে।");

            setTimeout(() => {
                this.dataset.playedOnce = "true";
                this.play(); // ৫ সেকেন্ড পর ভিডিও প্লে হবে
            }, 5000);
        }
    });
}

// অ্যাড ইনজেক্ট ফাংশন
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
