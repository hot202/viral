const totalVideos = 20; 
const adDirectLink = "https://www.profitablecpmratenetwork.com/s9nugy8x?key=dd2e5c4514d4de7e660ab41c92673096"; 
const videoGrid = document.getElementById('video-grid');

for (let i = 1; i <= totalVideos; i++) {
    const card = document.createElement('div');
    card.className = 'video-card';

    // শুধুমাত্র ভিডিও এবং টাইটেল
    card.innerHTML = `
        <h3>ভিডিও ক্লিপ #${i}</h3>
        <video id="video_${i}" controls preload="metadata">
            <source src="video_${i}.mp4" type="video/mp4">
            আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
        </video>
    `;

    videoGrid.appendChild(card);

    const videoElement = card.querySelector('video');

    // ভিডিওতে ক্লিক করলে বা প্লে করলে Direct Link ওপেন হবে
    videoElement.addEventListener('play', function() {
        window.open(adDirectLink, '_blank');
    });
}
