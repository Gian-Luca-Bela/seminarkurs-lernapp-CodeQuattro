# Architektur von English Boost

## 1. Überblick

English Boost ist als Single-Page-Webanwendung aufgebaut. React rendert die Oberfläche, React Router ordnet URLs den Lernbereichen zu und TanStack Query verwaltet asynchrone Daten. Base44 stellt Authentifizierung, persistente Entities und serverseitige Funktionen bereit.

```text
Nutzerin/Nutzer
      │
      ▼
React-Oberfläche ── React Router ── Lernbereiche
      │
      ├── TanStack Query ── Base44 Entities / Auth
      │
      └── Base44 Functions ── KI- und Hintergrundlogik
```

## 2. Anwendungsschichten

### Präsentation

Die Seiten und Komponenten bilden Dashboard, Lernbereiche, Navigation, Formulare, Rückmeldungen und Diagramme ab. Wiederkehrende UI-Elemente werden als Komponenten gekapselt, damit Gestaltung und Verhalten konsistent bleiben.

### Anwendungslogik

Hooks und Hilfsfunktionen bündeln unter anderem Fortschritt, XP, abgeschlossene Aufgaben und wiederkehrende Berechnungen. Dadurch sollen Seiten möglichst wenig fachliche Logik direkt enthalten.

### Datenzugriff

TanStack Query übernimmt Laden, Zwischenspeichern und Aktualisieren serverseitiger Daten. Eindeutige Query-Keys sind wichtig, damit Änderungen nur die tatsächlich betroffenen Ansichten neu laden.

### Backend

Base44 übernimmt:

- Anmeldung und aktuellen Nutzer,
- Speicherung fachlicher Entities,
- Berechtigungen,
- serverseitige Functions,
- Verbindung zu externen KI-Diensten.

Geheime Schlüssel gehören ausschließlich in serverseitige Konfiguration und niemals in den Browsercode.

## 3. Routing und Zugriff

Die App prüft zunächst Authentifizierung und öffentliche Einstellungen. Danach kontrolliert ein Onboarding-Guard, ob ein vollständiges Nutzerprofil vorhanden ist. Ohne abgeschlossenes Onboarding wird zur Einrichtungsseite weitergeleitet. Erst anschließend wird das gemeinsame App-Layout mit den geschützten Lernseiten angezeigt.

Diese Trennung verhindert, dass Komponenten unterschiedliche eigene Prüfungen implementieren und sorgt für einen einheitlichen Einstieg.

## 4. Lernbereiche

Die Navigation umfasst:

- Dashboard und täglichen Plan,
- Vocabulary und Vocabulary Trainer,
- Grammar,
- Reading, Writing, Listening, Speaking und Mediation,
- Testmodus und Exams,
- Progress, Achievements und Profile,
- Auto Learn und Lernstrategien,
- Einstellungen und administrative Seed-Seiten.

Jeder Bereich sollte langfristig nach demselben Muster arbeiten:

1. Daten und Profil laden,
2. verständlichen Lade- oder Leerzustand zeigen,
3. Übung durchführen,
4. Ergebnis speichern,
5. Fortschritt und XP genau einmal aktualisieren,
6. unmittelbares, fachlich begründetes Feedback anzeigen.

## 5. KI-Datenfluss

KI-Aufrufe werden nicht direkt aus einer UI-Komponente an einen externen Anbieter geschickt. Stattdessen ruft die Oberfläche eine Base44 Function auf. Diese Function:

1. validiert die Eingabe,
2. ergänzt einen kontrollierten Prompt,
3. ruft den KI-Dienst serverseitig auf,
4. prüft beziehungsweise strukturiert die Antwort,
5. gibt nur die benötigten Daten an die App zurück.

Dadurch bleiben Schlüssel geschützt und Prompts zentral wartbar. Trotzdem muss jede KI-Ausgabe als unsicher behandelt werden: Sie kann fachlich falsch, unpassend oder inkonsistent sein.

## 6. Sicherheitsgrenzen

- Clientcode ist grundsätzlich einsehbar und darf keine Geheimnisse enthalten.
- Berechtigungen müssen serverseitig durchgesetzt werden.
- Nutzereingaben werden validiert und nicht ungeprüft in Prompts übernommen.
- Persönliche Daten werden auf das notwendige Minimum reduziert.
- Fehlerprotokolle dürfen keine Tokens oder vollständigen sensiblen Eingaben enthalten.

## 7. Technische Schulden und nächste Architekturziele

- große Seiten in kleinere fachliche Komponenten zerlegen,
- Datenmodelle und Berechtigungen vollständig dokumentieren,
- gemeinsame Fehlerbehandlung vereinheitlichen,
- automatisierte Tests für XP, Fortschritt und zentrale Lernabläufe ergänzen,
- administrative Seed-Seiten in Produktionsumgebungen absichern,
- KI-Antworten mit festen Schemas validieren,
- Barrierefreiheit systematisch prüfen.
