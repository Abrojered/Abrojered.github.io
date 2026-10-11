<p align="center">
  <img src="assets/icons/favicon.svg" width="72" height="72" alt="">
</p>

<h1 align="center">Jered [Nachname] – Portfolio</h1>

<p align="center">
  Embedded Systems · Digitaltechnik · Machine Learning
</p>

<p align="center">
  <a href="https://DEIN-NAME.github.io/portfolio/"><strong>→ Live ansehen</strong></a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-0f2f26?style=flat-square&logo=html5&logoColor=d3ae5b">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-0f2f26?style=flat-square&logo=css3&logoColor=d3ae5b">
  <img alt="Ohne Framework" src="https://img.shields.io/badge/ohne_Framework-0f2f26?style=flat-square">
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub_Pages-0f2f26?style=flat-square&logo=github&logoColor=d3ae5b">
  <img alt="Lizenz: MIT" src="https://img.shields.io/badge/Lizenz-MIT-d3ae5b?style=flat-square">
</p>

---

## Über diese Seite

Persönliche Portfolio-Website mit Studienarbeiten und Hardware-Projekten rund um
Kamera-Erkennung, Signalverarbeitung und Mikrocontroller. Die Seite besteht aus
einer HTML-Datei und nach Bereichen aufgeteilten CSS-Dateien, ohne Build-Schritt,
ohne JavaScript und ohne Abhängigkeiten außer Google Fonts.

## Projekte im Überblick

| Projekt | Status | Technik |
| --- | --- | --- |
| **Autonomes Beobachten mit Kameras** – Zwei-Kamera-System, das Reptilien an einer Mauer erkennt und per PTZ-Kamera die Art bestimmt | Studienarbeit, in Arbeit | Raspberry Pi 5, AI-/HQ-Kamera, IP-Kamera, Objekterkennung |
| **Herz- und Lungengeräusche klassifizieren** – Signalverarbeitung und Klassifikation auf dem HLS-CMDS-Datensatz | Studienarbeit, in Arbeit | Python, Signalverarbeitung, Machine Learning |
| **Ein Mikrocontroller-Projekt pro Monat** – von der Umweltmessstation bis zum Drohnen-Flugcontroller | Laufende Serie | STM32 L476RG, ESP32, FreeRTOS |

## Design

- Dunkles „Platinen“-Grün mit goldenen Akzenten, angelehnt an Leiterbahnen
- Mikrocontroller-Hintergrundbild im Einstieg, links abgedunkelt und unten weich in die Seitenfarbe übergehend
- Schriften: IBM Plex Sans und IBM Plex Sans Condensed
- Responsiv bis Smartphone-Breite, respektiert `prefers-reduced-motion`
- Semantisches HTML mit sichtbaren Fokus-Zuständen für Tastaturnutzung

## Aufbau

```
.
├── index.html              # Seitenstruktur (nur HTML)
├── 404.html                # Fehlerseite für GitHub Pages
├── css/
│   ├── base.css            # Farben, Schriften, Reset, Links
│   ├── layout.css          # Kopfzeile, Abschnitte, Fußzeile
│   └── sections/
│       ├── hero.css        # Einstieg mit Hintergrundbild
│       ├── projekte.css    # Bereich „Projekte“
│       ├── kenntnisse.css  # Bereich „Kenntnisse“
│       └── kontakt.css     # Bereich „Kontakt“
├── assets/
│   ├── hero/
│   │   └── Microcontroller_pic.png  # Hintergrundbild im Einstieg
│   ├── icons/
│   │   └── favicon.svg     # Icon: Mikrochip auf Platinengrün
│   └── projekte/           # Fotos und Videos, ein Ordner pro Projekt
│       ├── kamera-beobachtung/
│       ├── herz-lungen-geraeusche/
│       └── mikrocontroller-serie/
├── .nojekyll               # GitHub Pages liefert Dateien unverändert aus
├── LICENSE
└── README.md
```

## Fotos und Videos hinzufügen

1. Datei in den Ordner des Projekts unter `assets/projekte/` legen, z. B.
   `assets/projekte/kamera-beobachtung/aufbau.jpg`.
2. In `index.html` im `<div class="media">` des Projekts eintragen
   (eine Vorlage steht dort als Kommentar):

   ```html
   <figure>
     <img src="assets/projekte/kamera-beobachtung/aufbau.jpg" alt="Kameraaufbau an der Mauer" loading="lazy">
     <figcaption>Aufbau im Garten</figcaption>
   </figure>
   <figure class="wide">
     <video src="assets/projekte/kamera-beobachtung/demo.mp4" controls preload="metadata" playsinline></video>
     <figcaption>Die PTZ-Kamera fährt auf eine Eidechse zu</figcaption>
   </figure>
   ```

3. Committen und pushen. GitHub Pages veröffentlicht die Dateien automatisch.

Hinweise:

- Fotos als `.jpg` oder `.webp`, auf etwa 1600 px Breite verkleinert.
- Videos als `.mp4` (H.264). GitHub lehnt Dateien über 100 MB ab, unter 20 MB lädt die Seite deutlich schneller.
  Längere Videos besser auf YouTube hochladen und dort verlinken.
- `class="wide"` lässt ein Foto oder Video über die ganze Breite laufen (16:9).
- Ohne Einträge bleibt die Galerie unsichtbar.

## Lokal ansehen

`index.html` einfach im Browser öffnen. Oder mit einem kleinen lokalen Server:

```bash
python -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Veröffentlichen mit GitHub Pages

1. Repository auf GitHub anlegen (z. B. `portfolio`) und den Inhalt dieses Ordners pushen.
2. Unter **Settings → Pages** als Quelle **Deploy from a branch**, Branch `main`, Ordner `/ (root)` wählen.
3. Nach etwa einer Minute ist die Seite unter `https://DEIN-NAME.github.io/portfolio/` erreichbar.

> Tipp: Heißt das Repository `DEIN-NAME.github.io`, liegt die Seite direkt unter `https://DEIN-NAME.github.io/`.

## Kontakt

Ich suche ein Praktikum oder eine Werkstudentenstelle im Bereich Embedded Systems oder Computer Vision.

- E-Mail: deine@email.de
- GitHub: [@DEIN-NAME](https://github.com/DEIN-NAME)
- LinkedIn: [DEIN-NAME](https://www.linkedin.com/in/DEIN-NAME)

## Lizenz

Der Quellcode steht unter der [MIT-Lizenz](LICENSE). Texte, Projektbeschreibungen
und Fotos sind davon ausgenommen.
