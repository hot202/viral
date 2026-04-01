// আপনার সেটিংস
const totalVideos = 20; // আপনি চাইলে এখানে সংখ্যা বাড়াতে পারেন
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoContainer = document.getElementById('video-container');

// ভিডিও এবং অ্যাড জেনারেট করার লুপ
for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // কার্ডের ভেতর ভিডিও এবং ব্যানারের HTML তৈরি
    card.innerHTML = `
        <h3>বিশেষ ভিডিও - ${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
            আপনার ব্রাউজার সাপোর্ট করে না।
        </video>
        <div class="ad-slot">
            <div class="ad-placeholder" onclick="openAd()">
                <p>বিজ্ঞাপন দেখুন</p>
                <small>প্রিমিয়াম কন্টেন্ট আনলক করতে এখানে ক্লিক করুন</small>
            </div>
        </div>
    `;

    videoContainer.appendChild(card);

    // ভিডিও এলিমেন্টটি সিলেক্ট করা
    const videoElement = card.querySelector('video');

    // ভিডিওতে প্রথমবার ক্লিক বা প্লে করলে অ্যাড ওপেন হবে
    let adOpenedForThisVideo = false;

    videoElement.addEventListener('play', function() {
        if (!adOpenedForThisVideo) {
            window.open(adDirectLink, '_blank');
            adOpenedForThisVideo = true; // একবার প্লে করলে যেন বারবার পপ-আপ না হয়
        }
    });
}

// ব্যানার বা টেক্সটে ক্লিক করলে অ্যাড ওপেন করার ফাংশন
function openAd() {
    window.open(adDirectLink, '_blank');
}
