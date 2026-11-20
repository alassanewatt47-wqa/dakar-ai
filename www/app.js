const title = document.getElementById('modeTitle');
const prompt = document.getElementById('prompt');
const chat = document.getElementById('chat');
const modes = {
  chat: "Discuter avec Dakar AI",
  homework: "Corriger un devoir",
  image: "Studio de création d'images",
  pro: "Outils professionnels"
};
let mode = "chat";
document.querySelectorAll('.tool').forEach(button => button.addEventListener('click', () => {
  mode = button.dataset.mode;
  title.textContent = modes[mode];
  prompt.placeholder = mode === 'homework' ? "Colle l'énoncé de ton exercice..." :
    mode === 'image' ? "Décris l'image que tu souhaites créer..." :
    mode === 'pro' ? "Ex. : aide-moi à rédiger un CV..." : "Écris ton message ici...";
  document.getElementById('workspace').scrollIntoView({behavior:'smooth',block:'start'});
}));
document.getElementById('promptForm').addEventListener('submit', event => {
  event.preventDefault();
  const value = prompt.value.trim();
  if (!value) return;
  addBubble(value, 'user');
  prompt.value = '';
  const messages = {
    chat: "Merci pour ta question ! Le moteur IA sera connecté après la configuration sécurisée de la clé API.",
    homework: "J'ai bien reçu ton exercice. La correction détaillée sera disponible après la connexion du moteur IA. Pense à envoyer une photo nette ou à recopier l'énoncé.",
    image: "Ta description est prête. La génération réelle d'images sera activée lorsque le service IA sera connecté.",
    pro: "Je peux préparer ton CV ou ta lettre dès que le moteur IA sera connecté. Cette version est encore en démonstration."
  };
  setTimeout(() => addBubble(messages[mode], 'bot'), 350);
});
function addBubble(text, type) {
  const node = document.createElement('div');
  node.className = `bubble ${type}`;
  node.textContent = text;
  chat.appendChild(node);
  chat.scrollTop = chat.scrollHeight;
}
document.getElementById('premiumBtn').addEventListener('click', () => {
  alert("Dakar AI Premium : 3 000 FCFA/mois ou 30 000 FCFA/an. Les paiements seront activés dans une prochaine version.");
});
