DAKAR AI — PROJET ANDROID DE DÉMARRAGE

Ce dossier contient une première version Android de Dakar AI.
L'interface est fonctionnelle en mode démonstration. Le vrai moteur IA,
la génération réelle d'images, les comptes et les paiements ne sont pas
encore branchés.

COMMENT OBTENIR L'APK SANS ORDINATEUR (AVEC UN COMPTE GITHUB)
1. Crée/connecte-toi à https://github.com
2. Crée un nouveau dépôt nommé dakar-ai (Public ou Private).
3. Téléverse tous les fichiers de ce ZIP en gardant leur arborescence.
4. Ouvre l'onglet Actions du dépôt.
5. Lance "Build Dakar AI Android APK" avec Run workflow.
6. Quand le travail est terminé, ouvre le résultat et télécharge
   l'artifact "Dakar-AI-debug-APK".
7. Décompresse l'artifact sur ton téléphone puis installe app-debug.apk.
   Android peut demander d'autoriser l'installation depuis cette source.

IMPORTANT
- Ceci est un APK de test (debug), pas encore une version Play Store.
- N'ajoute jamais ta clé OpenAI dans www/app.js, index.html ou GitHub.
- La clé API devra être conservée uniquement côté serveur, dans un secret.
- OpenAI API peut engendrer des frais distincts de ChatGPT.
- Pour une publication Play Store, il faudra préparer une version signée.
