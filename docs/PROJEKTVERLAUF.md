# Projektverlauf und Roadmap

## Ausgangslage

English Boost wurde zunächst im Base44 Builder entwickelt. Dadurch konnte schnell ein umfangreicher Prototyp mit Authentifizierung, Datenhaltung, Lernbereichen und KI-Funktionen entstehen. Im Team-Repository lag zeitweise nur ein komprimierter Export. Dieser sicherte zwar Dateien, machte Entwicklungsschritte, Reviews und Zuständigkeiten jedoch kaum nachvollziehbar.

## Professionalisierung des Repositorys

Im Juni 2026 wurde deshalb eine strukturierte Überführung begonnen:

- professionelles README mit Ziel, Funktionen, Technik und Installation,
- eigener Anwendungsordner statt alleiniger ZIP-Ablage,
- Trennung von Code, Dokumentation und GitHub-Vorlagen,
- dokumentierter Branch- und Pull-Request-Workflow,
- Architektur-, Test- und Entscheidungsdokumentation,
- Beispielkonfiguration ohne Zugangsdaten,
- nachvollziehbare Beschreibung von Risiken und offenen Aufgaben.

Der frühere ZIP-Export bleibt zunächst unverändert als historisches Artefakt bestehen. Er soll nach erfolgreicher Prüfung des strukturierten Projektstands nicht mehr als primäre Arbeitsgrundlage verwendet werden.

## Aktueller fachlicher Umfang

Die Anwendung umfasst bereits:

- Nutzer-Onboarding und Profil,
- Dashboard und Tagesplanung,
- Wortschatz- und Grammatiktraining,
- Reading, Writing, Listening, Speaking und Mediation,
- Test- und Prüfungsbereiche,
- Fortschritt, XP und Achievements,
- automatische Lernunterstützung und Lernstrategien,
- KI-gestützte serverseitige Funktionen.

## Kurzfristige nächste Schritte

1. vollständigen Base44-Export im Ordner `app/` gegen den produktiven Builder-Stand abgleichen,
2. lokale Installation mit echter, nicht committeter Testkonfiguration prüfen,
3. `lint`, `typecheck` und `build` ausführen und Befunde dokumentieren,
4. zentrale Nutzerwege anhand des Testkonzepts testen,
5. Screenshots mit anonymisierten Testdaten ergänzen,
6. Datenmodelle, Rollen und Berechtigungen dokumentieren,
7. bekannte Bugs als Issues erfassen.

## Mittelfristige Ziele

- automatisierte Tests für Fortschritt, XP und Routing,
- strukturierte Validierung von KI-Antworten,
- einheitliche Fehler- und Ladezustände,
- barriereärmere Bedienung,
- Performance-Prüfung auf schwächeren Schulgeräten,
- klare Trennung administrativer und normaler Nutzerfunktionen,
- regelmäßige, versionierte Releases.

## Langfristige Leitfrage

Die technische Weiterentwicklung soll immer an der Frage ausgerichtet bleiben:

> Verbessert diese Änderung nachweisbar das selbstständige und fachlich sinnvolle Englischlernen der Zielgruppe?

Neue Funktionen werden nicht nur nach technischer Machbarkeit, sondern nach Lernnutzen, Datenschutz, Verständlichkeit und Wartbarkeit bewertet.

## Dokumentation von Beiträgen

Die tatsächlichen Beiträge der Teammitglieder werden nicht nachträglich pauschal zugeordnet. Sie sollen aus Issues, Branches, Commits, Reviews und Pull Requests hervorgehen. So bleibt die Teamleistung fair und überprüfbar dokumentiert.
