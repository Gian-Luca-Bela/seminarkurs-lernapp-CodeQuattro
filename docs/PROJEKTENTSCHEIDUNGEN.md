# Projektentscheidungen und eigene Überlegungen

Dieses Dokument macht nicht nur sichtbar, **was** entwickelt wurde, sondern auch **warum** bestimmte Entscheidungen getroffen wurden. Die Überlegungen sollen im weiteren Projektverlauf ergänzt und bei neuen Erkenntnissen kritisch überarbeitet werden.

## 1. Eine gemeinsame Lernumgebung statt vieler Einzellösungen

Die App kombiniert mehrere Kompetenzbereiche, weil schulisches Englisch nicht nur aus Vokabellernen besteht. Reading, Writing, Listening, Speaking, Grammar und Mediation greifen ineinander. Eine gemeinsame Plattform kann Fortschritt bereichsübergreifend sichtbar machen und verhindert, dass Lernende für jede Aufgabe eine andere Anwendung benötigen.

**Abwägung:** Eine breite App ist attraktiver und realistischer, erhöht aber Komplexität und Testaufwand. Deshalb sollten Kernfunktionen verlässlich funktionieren, bevor weitere Bereiche ergänzt werden.

## 2. Personalisierung über Profil und Lernfortschritt

Das Onboarding erfasst notwendige Ausgangsdaten, damit Inhalte nicht vollständig allgemein bleiben. Personalisierung soll jedoch nicht bedeuten, möglichst viele persönliche Informationen zu sammeln. Sinnvoll sind nur Angaben, die tatsächlich die Schwierigkeit, Auswahl oder Reihenfolge von Übungen beeinflussen.

**Grundsatz:** So wenig personenbezogene Daten wie möglich, so viel pädagogisch relevante Anpassung wie nötig.

## 3. Motivation durch XP, Fortschritt und Erfolge

Gamification kann regelmäßiges Lernen unterstützen, weil kleine Fortschritte sichtbar werden. XP und Achievements dürfen jedoch nicht zum eigentlichen Lernziel werden. Sonst optimieren Nutzerinnen und Nutzer auf Punkte statt auf Verständnis.

Daraus folgen drei Anforderungen:

- Punkte werden nur für echte Lernhandlungen vergeben.
- Wiederholte Klicks dürfen keine unbegrenzten XP erzeugen.
- Feedback erklärt fachliche Stärken und Fehler zusätzlich zur Punkteanzeige.

## 4. KI als Unterstützung, nicht als Wahrheitsquelle

KI eignet sich besonders für vielfältige Übungsimpulse, Beispiele, Feedbackentwürfe und adaptive Aufgaben. Sie kann aber falsche Lösungen, unangemessene Schwierigkeitsgrade oder überzeugend formulierte Fehler erzeugen.

Deshalb sollte KI in der App:

- klar begrenzte Aufgaben erhalten,
- strukturierte Ausgaben liefern,
- möglichst mit Beispielen und Regeln im Prompt geführt werden,
- kritische Inhalte vor der Anzeige validieren,
- transparent als KI-Unterstützung erkennbar sein,
- keine endgültigen Notenentscheidungen treffen.

Die pädagogische Verantwortung bleibt beim Menschen.

## 5. Base44 als Entwicklungsplattform

Base44 beschleunigt Prototyping, Authentifizierung, Datenhaltung und serverseitige Funktionen. Das ist für einen Seminarkurs sinnvoll, weil mehr Zeit für Lernkonzept und Nutzererlebnis bleibt.

**Vorteile:** schneller funktionsfähiger Prototyp, integrierte Dienste, geringerer Infrastrukturaufwand.

**Risiken:** Plattformabhängigkeit, laufende Betriebskosten, eingeschränkte Kontrolle über Backend und Export sowie mögliche Änderungen am Anbieterprodukt.

Daraus folgt, dass Quellcode, Dokumentation und Datenmodelle regelmäßig außerhalb des Builders gesichert werden müssen. Das GitHub-Repository ist deshalb nicht nur Abgabeort, sondern ein wichtiger Teil der Nachhaltigkeit des Projekts.

## 6. Transparente GitHub-Historie statt einzelner ZIP-Dateien

Eine ZIP-Datei dokumentiert nur einen Zeitpunkt. Sie zeigt nicht, wer welche Änderung vorgenommen hat, wie Entscheidungen entstanden sind oder ob Änderungen geprüft wurden. Normal eingecheckte Dateien, kleine Commits, Branches und Pull Requests machen Entwicklung und Teamarbeit nachvollziehbar.

Der historische ZIP-Export bleibt als Archiv bestehen. Für die weitere Arbeit soll jedoch die normale Repository-Struktur maßgeblich sein.

## 7. Nutzerfreundlichkeit vor Funktionsmenge

Eine Lern-App ist nur hilfreich, wenn Schülerinnen und Schüler ohne lange Erklärung verstehen, was als Nächstes zu tun ist. Priorität haben daher:

- klare Navigation,
- sichtbare nächste Schritte,
- kurze und verständliche Rückmeldungen,
- funktionierende mobile Darstellung,
- konsistente Begriffe und Bedienmuster,
- sinnvolle Lade-, Fehler- und Leerzustände.

Eine zusätzliche Funktion ist nicht automatisch eine Verbesserung. Sie wird nur aufgenommen, wenn sie ein konkretes Lernproblem löst.

## 8. Umgang mit Fehlern und Grenzen

Das Projekt ist ein schulischer Prototyp und kein vollständig geprüftes kommerzielles Lernsystem. Diese Grenze soll nicht versteckt werden. Bekannte Einschränkungen werden dokumentiert, Fehler über Issues erfasst und KI-Inhalte kritisch getestet. Professionell bedeutet hier nicht, Fehlerfreiheit vorzutäuschen, sondern den Entwicklungsstand transparent und überprüfbar zu machen.

## 9. Kriterien für zukünftige Entscheidungen

Bei neuen Ideen prüfen wir:

1. Welches konkrete Lernproblem wird gelöst?
2. Für welche Zielgruppe ist die Funktion gedacht?
3. Welche Daten werden benötigt?
4. Kann die Funktion verständlich getestet werden?
5. Entsteht eine Abhängigkeit von externen Diensten?
6. Welche Fehler kann KI dabei verursachen?
7. Ist der Nutzen größer als zusätzliche Komplexität und Wartung?
