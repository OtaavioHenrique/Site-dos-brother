const firebaseConfig = {
  "apiKey": "AIzaSyC1aScuA-0jga2KrrKKLGmMGTD98ATdVZ0",
  "authDomain": "site-brothers-e9e5f.firebaseapp.com",
  "projectId": "site-brothers-e9e5f",
  "storageBucket": "site-brothers-e9e5f.firebasestorage.app",
  "messagingSenderId": "90053993106",
  "appId": "1:90053993106:web:d3e2d483f84c2633967c4b",
  "measurementId": "G-TRBP285LKH"
};
try {
  if(!firebaseConfig.apiKey||!firebaseConfig.projectId||!firebaseConfig.appId)throw Error('Preencha firebaseConfig em firebase-init.js com a configuração Web do seu Firebase.');
  const [{initializeApp},firestore]=await Promise.all([
    import('https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js')
  ]);
  const db=firestore.getFirestore(initializeApp(firebaseConfig));
  window.resolveFirebase({db,...firestore});
}catch(error){console.error('[Firebase] Inicialização:',error);window.resolveFirebase({error});}
delete window.resolveFirebase;
