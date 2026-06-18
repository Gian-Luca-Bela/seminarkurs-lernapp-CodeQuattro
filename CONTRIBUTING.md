# Mitwirkung am Projekt

Dieses Dokument legt den gemeinsamen Entwicklungsablauf für English Boost fest. Ziel ist eine nachvollziehbare Zusammenarbeit, bei der `main` jederzeit einen geprüften Projektstand enthält.

## Vor jeder Arbeit

1. In GitHub Desktop `Fetch origin` und anschließend gegebenenfalls `Pull origin` ausführen.
2. Prüfen, ob bereits ein passendes Issue existiert.
3. Einen eigenen Branch vom aktuellen `main` erstellen.

## Branch-Namen

- `feature/kurze-beschreibung` für neue Funktionen
- `fix/kurze-beschreibung` für Fehlerbehebungen
- `design/kurze-beschreibung` für UI/UX-Arbeit
- `docs/kurze-beschreibung` für Dokumentation
- `refactor/kurze-beschreibung` für interne Verbesserungen

Beispiele:

```text
feature/vocabulary-trainer
fix/daily-plan-loading
 design/mobile-navigation
```

## Commits

Commits sollen klein, in sich verständlich und eindeutig benannt sein.

Empfohlenes Muster:

```text
<typ>: <konkrete Änderung>
```

Beispiele:

```text
feat: ergänze Grammatik-Übungssitzung
fix: verhindere doppelte XP-Vergabe
docs: beschreibe KI-Datenfluss
refactor: bündele Fortschrittsberechnung
```

Ungeeignet sind Nachrichten wie `Update`, `Fix`, `neu` oder `Sachen geändert`.

## Pull Requests

Jede größere Änderung wird über einen Pull Request in `main` übernommen. Die Beschreibung beantwortet mindestens:

- Was wurde geändert?
- Warum war die Änderung nötig?
- Wie wurde sie getestet?
- Welche Grenzen oder offenen Punkte gibt es?
- Gibt es Auswirkungen auf Daten, Datenschutz oder KI-Ausgaben?

Mindestens ein anderes Teammitglied soll die Änderung ansehen. Die Person, die den Code geschrieben hat, merged nicht ohne vorheriges Review.

## Definition of Done

Eine Aufgabe gilt als abgeschlossen, wenn:

- die Funktion im vorgesehenen Ablauf funktioniert,
- Fehler- und Ladezustände berücksichtigt sind,
- keine Zugangsdaten committet wurden,
- `npm run lint`, `npm run typecheck` und `npm run build` erfolgreich sind,
- relevante Tests aus `docs/TESTKONZEPT.md` durchgeführt wurden,
- Dokumentation bei Bedarf aktualisiert wurde,
- der Pull Request verständlich beschrieben und reviewed ist.

## Code-Stil

- vorhandene Komponenten und Muster wiederverwenden,
- verständliche Namen statt unnötiger Abkürzungen nutzen,
- komplexe Entscheidungen kommentieren, nicht offensichtlichen Code nacherzählen,
- lange Komponenten sinnvoll aufteilen,
- Datenzugriffe über klar erkennbare Funktionen und Query-Keys organisieren,
- Lade-, Leer- und Fehlerzustände in jeder datenabhängigen Ansicht bedenken,
- Benutzertexte einheitlich und altersgerecht formulieren.

## Sicherheit und Datenschutz

- `.env`, `.env.local`, Tokens und API-Schlüssel niemals committen,
- personenbezogene Daten nur verwenden, wenn sie für die Funktion erforderlich sind,
- KI-Eingaben nicht unnötig mit persönlichen Angaben anreichern,
- generierte Inhalte als potenziell fehlerhaft behandeln und plausibilisieren,
- vor öffentlichen Screenshots Testdaten statt echter Nutzerdaten verwenden.
