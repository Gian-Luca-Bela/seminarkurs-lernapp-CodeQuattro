# English Boost

> KI-gestützte Lern-App für den Englischunterricht der Mittelstufe

English Boost ist im Seminarkurs **„KI – learn smart“** am Maria-von-Linden-Gymnasium entstanden. Die Web-App verbindet klassische Lernbereiche mit personalisierten Übungen, Fortschrittsauswertung und KI-gestützten Inhalten.

## Projektziel

Viele Lernangebote behandeln Wortschatz, Grammatik, Schreiben und Prüfungsvorbereitung getrennt. English Boost bündelt diese Bereiche in einer Anwendung und soll Lernenden dabei helfen,

- regelmäßig und zielgerichtet zu üben,
- ihren Lernfortschritt sichtbar zu machen,
- passende Aufgaben für ihren Leistungsstand zu erhalten,
- unmittelbares Feedback zu bekommen und
- selbstständiger auf Klassenarbeiten vorbereitet zu sein.

## Zentrale Funktionen

- persönliches Onboarding und Nutzerprofil
- individuelles Dashboard und täglicher Lernplan
- Vokabelbereich, Vokabeltrainer und Scan-Funktion
- Grammatikübungen mit Übungssitzungen
- Reading, Writing, Listening, Speaking und Mediation
- Testmodus und Prüfungsvorbereitung
- Fortschrittsanzeige, XP-System und Erfolge
- automatische Lernvorschläge und Lernstrategien
- KI-gestützte Generierung und Auswertung ausgewählter Inhalte
- Hell-/Dunkelmodus und responsives Layout

## Technologie

| Bereich | Umsetzung |
|---|---|
| Frontend | React 18, Vite, React Router |
| Oberfläche | Tailwind CSS, Radix UI / shadcn/ui, Lucide Icons |
| Datenabfragen | TanStack Query |
| Backend und Daten | Base44 SDK und Base44 Entities |
| Diagramme | Recharts |
| KI-Funktionen | serverseitige Base44 Functions |
| Qualität | ESLint, TypeScript-Check für JavaScript, GitHub Pull Requests |

## Repository-Struktur

```text
.
├── app/                      # nachvollziehbarer Stand der Base44-Anwendung
│   ├── src/                  # Einstieg, Routing und Anwendungscode
│   ├── .env.example          # benötigte Variablen ohne Zugangsdaten
│   └── package.json          # Abhängigkeiten und npm-Befehle
├── docs/
│   ├── ARCHITEKTUR.md
│   ├── PROJEKTENTSCHEIDUNGEN.md
│   ├── PROJEKTVERLAUF.md
│   └── TESTKONZEPT.md
├── .github/                  # Vorlagen für Issues und Pull Requests
├── CONTRIBUTING.md           # gemeinsamer GitHub-Workflow
└── english-boost-app.zip     # früher, unveränderter Export zu Archivzwecken
```

Die ZIP-Datei bleibt zunächst als historischer Export erhalten. Der langfristig maßgebliche und reviewbare Projektstand soll jedoch in der normalen Ordnerstruktur liegen.

## Lokale Installation

Voraussetzungen: Node.js 20 oder neuer und npm.

```bash
git clone https://github.com/Gian-Luca-Bela/seminarkurs-lernapp-CodeQuattro.git
cd seminarkurs-lernapp-CodeQuattro/app
npm install
cp .env.example .env.local
npm run dev
```

In `.env.local` müssen die Werte der zugehörigen Base44-App hinterlegt werden:

```env
VITE_BASE44_APP_ID=...
VITE_BASE44_APP_BASE_URL=...
```

**Wichtig:** Zugangsdaten, API-Schlüssel und echte `.env`-Dateien dürfen niemals committet werden.

## Qualitätsprüfung

```bash
npm run lint
npm run typecheck
npm run build
```

Zusätzlich werden neue Funktionen vor dem Merge anhand des [Testkonzepts](docs/TESTKONZEPT.md) geprüft.

## Team

- Lilli Lange
- Gian-Luca Bela
- Vin Stein
- Paul Stegmeyer

Die konkrete Aufgabenverteilung und Beiträge werden über Branches, Commits, Issues und Pull Requests dokumentiert, damit die gemeinsame Arbeit nachvollziehbar bleibt.

## Arbeitsweise

Wir arbeiten nicht direkt auf `main`:

1. aktuellen Stand holen,
2. aussagekräftigen Feature- oder Fix-Branch erstellen,
3. kleine, verständliche Commits schreiben,
4. Änderungen pushen,
5. Pull Request mit Testbeschreibung öffnen,
6. Code Review durchführen,
7. erst danach mergen.

Details stehen in [CONTRIBUTING.md](CONTRIBUTING.md).

## Dokumentation

- [Architektur und Datenfluss](docs/ARCHITEKTUR.md)
- [Eigene Projektentscheidungen und Abwägungen](docs/PROJEKTENTSCHEIDUNGEN.md)
- [Testkonzept](docs/TESTKONZEPT.md)
- [Projektverlauf und nächste Schritte](docs/PROJEKTVERLAUF.md)

## Projektstatus

Das Projekt befindet sich in der Weiterentwicklung. Die aktuelle Base44-App ist funktionsreich; die Überführung in ein dauerhaft wartbares Team-Repository, die Ergänzung systematischer Tests und die transparente Dokumentation sind Teil der laufenden Qualitätsarbeit.
