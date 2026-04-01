// আপনার সেটিংস
const totalVideos = 20; // আপনি চাইলে এখানে সংখ্যা বাড়াতে পারেন
const adDirectLink = "https://www.profitablecpmratenetwork.com/your_link_here"; // আপনার Direct Link
const videoContainer = document.getElementById('video-container');

// ভিডিও এবং অ্যাড জেনারেট করার ফাংশন
for (let i = 1; i <= totalVideos; i++) {
    // ১. ভিডিও কার্ড তৈরি
    const card = document.createElement('div');
    card.className = 'video-card';

    // ২. ভিডিও এলিমেন্ট তৈরি
    // ভিডিওর নাম ভিডিওর সংখ্যা অনুযায়ী হবে (যেমন: video_1.mp4, video_2.mp4)
    card.innerHTML = `
        <h3>ভিডিও টাইটেল - ${i}</h3>
        <video id="video_${i}" controls preload="metadata" controlsList="nodownload">
            <source src="video_${i}.mp4" type="video/mp4">
            আপনার ব্রাউজার সাপোর্ট করে না।
        </video>
        <div class="ad-slot">
            <div class="ad-placeholder" onclick="openAd()">
                <p>বিজ্ঞাপন (Banner Ad ${i})</p>
                <small>এখানে আপনার Adsterra Banner Script টি বসাবেন</small>
            </div>
            </div>
    `;

    videoContainer.appendChild(card);

    // ৩. ভিডিওতে ক্লিক করলে অ্যাড ওপেন হওয়ার লজিক
    const videoElement = card.querySelector('video');
    
    videoElement.addEventListener('play', function(e) {
        // ভিডিও প্লে করার আগে অ্যাড ওপেন হবে
        window.open(adDirectLink, '_blank');
    });
}

// অ্যাড ওপেন করার ফাংশন
function openAd() {
    window.open(adDirectLink, '_blank');
}