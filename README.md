# CI-CD repository
Flerstegs-Dockerfile
Det finns en optimerad flerstegs-Dockerfile för docker-app.

Varför ett flerstegsbygge är bättre:

Mindre bild: byggberoenden och filer som inte behövs i produktion hamnar inte i slutimagen.
Snabbare CI-byggen: genom att kopiera package*.json först kan Docker använda cache för beroendeinstallation när paketfilerna inte ändrats.
Klar uppdelning: en builder-fas kan köra tester och skapa byggartefakter, medan produktionsfasen endast innehåller körbar kod och produktionsberoenden.