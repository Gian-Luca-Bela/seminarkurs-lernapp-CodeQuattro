# Testkonzept

## Ziel

Tests sollen sicherstellen, dass zentrale Lernabläufe zuverlässig funktionieren und Änderungen keine bestehenden Funktionen beschädigen. Neben Technik werden Bedienbarkeit, fachliche Plausibilität und der verantwortungsvolle Umgang mit KI betrachtet.

## Prüfungen vor jedem Pull Request

```bash
npm run lint
npm run typecheck
npm run build
```

Zusätzlich wird mindestens der direkt betroffene Ablauf manuell vollständig durchgespielt.

## Kritische Testfälle

| Bereich | Test | Erwartetes Ergebnis |
|---|---|---|
| Anmeldung | gültiger Nutzer meldet sich an | App lädt ohne Endlosschleife |
| Onboarding | neues Profil wird vollständig angelegt | Weiterleitung zum Dashboard |
| Onboarding | Pflichtangabe fehlt | verständliche Validierung, kein unvollständiges Profil |
| Navigation | alle Hauptbereiche öffnen | korrekte Seite, keine leere Ansicht |
| Daily Plan | Aufgaben werden geladen | sinnvoller Lade- und Leerzustand |
| Lernaufgabe | richtige Antwort | korrektes Feedback und einmalige Fortschrittsbuchung |
| Lernaufgabe | falsche Antwort | hilfreiche Erklärung, keine falsche Erfolgsmeldung |
| XP | Aufgabe mehrfach absenden | XP werden nicht doppelt vergeben |
| Fortschritt | Aufgabe abschließen | betroffene Anzeige wird aktualisiert |
| KI-Inhalt | Dienst antwortet korrekt | Ausgabe ist lesbar und passt zum Schema |
| KI-Inhalt | Dienst antwortet fehlerhaft | kontrollierte Fehlermeldung statt Absturz |
| Netzwerk | Verbindung bricht ab | erneuter Versuch oder verständlicher Fehlerzustand |
| Mobilgerät | schmale Ansicht | Navigation und Inhalte bleiben bedienbar |
| Theme | Hell-/Dunkelmodus wechseln | Texte und Bedienelemente bleiben lesbar |
| Datenschutz | Browser/Logs prüfen | keine Schlüssel oder unnötigen persönlichen Daten |

## Fachliche Qualität von KI-Ausgaben

Eine Stichprobe generierter Aufgaben wird anhand folgender Kriterien geprüft:

- sprachlich korrekt,
- eindeutig lösbar,
- passender Schwierigkeitsgrad,
- Lösung stimmt mit Aufgabe überein,
- Erklärung ist fachlich nachvollziehbar,
- keine diskriminierenden oder ungeeigneten Inhalte,
- keine erfundenen Quellenbehauptungen,
- bei Unsicherheit wird kein falscher Eindruck absoluter Sicherheit erzeugt.

Auffällige Beispiele werden mit Eingabe, anonymisierter Ausgabe und Bewertung dokumentiert. Wiederkehrende Probleme führen zu einer Änderung des Prompts oder der Validierung, nicht nur zu einer manuellen Korrektur einzelner Antworten.

## Empfohlene automatisierte Tests

### Priorität 1

- XP wird pro Lernereignis nur einmal vergeben.
- abgeschlossene Aufgaben werden korrekt erkannt.
- Onboarding-Guard leitet abhängig vom Profil richtig weiter.
- Hilfsfunktionen berechnen Fortschritt konsistent.

### Priorität 2

- Seiten zeigen definierte Lade-, Fehler- und Leerzustände.
- Formulare validieren Pflichtfelder.
- KI-Antworten werden gegen ein festes Schema geprüft.

### Priorität 3

- End-to-End-Test: Anmeldung bis Abschluss einer Lernaufgabe.
- responsive Navigation auf typischen Bildschirmgrößen.
- grundlegende Barrierefreiheit mit Tastatur und Screenreader-Prüfung.

## Fehlerdokumentation

Ein Bug-Issue enthält:

1. kurze Beschreibung,
2. genaue Schritte zur Reproduktion,
3. erwartetes Verhalten,
4. tatsächliches Verhalten,
5. Gerät und Browser,
6. Screenshot ohne persönliche Daten,
7. vermutete betroffene Komponente.

Ein Fehler gilt erst als behoben, wenn der ursprüngliche Ablauf erneut geprüft wurde und ein sinnvoller Regressionstest dokumentiert ist.
