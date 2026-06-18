# Anwendungsordner

Dieser Ordner macht den Base44-Projektstand schrittweise als normal reviewbaren Quellcode sichtbar.

## Enthalten

- aktueller Abhängigkeits- und Skriptstand aus dem Base44-Repository,
- zentraler React-Einstieg mit Routing, Authentifizierung und Onboarding-Guard,
- sichere Beispielkonfiguration ohne Zugangsdaten.

## Migrationsstatus

Der vollständige frühere Anwendungsexport befindet sich weiterhin in `../english-boost-app.zip`. Er wurde bewusst nicht gelöscht oder überschrieben. Die derzeitige GitHub-Schnittstelle erlaubt keine zuverlässige serverseitige Entpackung beziehungsweise vollständige repoübergreifende Übernahme eines privaten Repository-Baums in einem einzigen Schritt. Deshalb wird in diesem Branch nichts als vollständig lauffähiger Export ausgegeben, solange Komponenten, Seiten, Base44 Functions und Konfigurationsdateien nicht vollständig gegengeprüft sind.

Für die endgültige Übernahme soll der aktuelle Inhalt von `english-boost-lernapp` lokal in diesen Ordner kopiert werden. Nicht übernommen werden:

- `.git/`,
- `node_modules/`,
- `dist/`,
- `.env` und `.env.local`,
- lokale Editor- und Cachedateien.

Danach müssen mindestens folgende Prüfungen erfolgreich sein:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Diese transparente Kennzeichnung verhindert, dass ein unvollständiger Zwischenstand versehentlich als produktionsbereit bewertet wird.
