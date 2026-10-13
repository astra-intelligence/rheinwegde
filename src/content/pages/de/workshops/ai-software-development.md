---
title: KI-Agenten für End-to-End-Softwareentwicklung
description: "6-stündiger Vortrag: KI-Agenten wie Claude Code im gesamten Entwicklungsablauf einsetzen, von Anforderungen und Aufgabenzerlegung bis zu Umsetzung und Review."
order: 1
---

![Illustration: ein KI-Agent unterstützt Anforderungen, Design, Code, Tests und Deployment](/images/workshops/ai-software-development.svg)

KI-Agenten schreiben heute schon den Großteil des Codes. Viele Teams merken jedoch: Sobald eine Aufgabe groß wird, macht der Agent Flüchtigkeitsfehler, und bei unklaren Anforderungen läuft das Ergebnis aus dem Ruder. Dieser 6-stündige Vortrag stellt einen praxiserprobten End-to-End-Entwicklungsablauf vor, in dem KI-Agenten in jedem Schritt zuverlässig arbeiten: Anforderungen, Aufgabenzerlegung, Umsetzung, Review und Wartung. Der Schwerpunkt der Entwickler verlagert sich vom eigenen Programmieren hin zur Orchestrierung von Agenten.

Der Vortrag verbindet unsere eigene Entwicklungspraxis mit dem Workshop von Matt Pocock, [Full Walkthrough: Workflow for AI Coding](https://github.com/shanraisshan/claude-code-best-practice/blob/main/videos/claude-matt-pocock-24-apr-26.md). Die Kernidee: Grundlagen der Softwaretechnik wie kleine Schritte, testgetriebene Entwicklung und gutes Moduldesign sind im KI-Zeitalter genauso wichtig, wenn nicht wichtiger.

## Die vier Phasen des Ablaufs

- **Analyse und Spezifikation**: ein „Grill me“-Gespräch, in dem die KI so lange nachfragt, bis beide Seiten die Anforderungen gleich verstehen, anschließend festgehalten in einem Produktanforderungsdokument (PRD).
- **AFK-Umsetzung (away from keyboard)**: die Anforderungen in kleine, unabhängig bearbeitbare Aufgaben zerlegen und Agenten sie automatisch und testgetrieben in einer isolierten Umgebung umsetzen lassen, wo möglich parallel.
- **Architekturverbesserung**: die Gesamtform der Codebasis im Blick behalten und flache Module durch tiefe Module ersetzen, damit Menschen und KI den Code leichter verstehen und ändern können.
- **Wartung und Fehlerbehebung**: Probleme aus Review und Tests werden zu neuen Aufgaben auf dem Board, und der Kreislauf geht weiter.

## Was Sie lernen

- Zwei zentrale Grenzen großer Sprachmodelle: Sie werden mit wachsendem Kontext „dümmer“ und „vergessen“ in jeder neuen Sitzung alles, und wie Sie Aufgaben entsprechend zuschneiden
- Anforderungen mit der KI per „Grill me“-Gespräch abstimmen und ein knappes PRD schreiben
- Anforderungen in vertikale Aufgaben-Slices zerlegen, Abhängigkeiten klären und mehrere Agenten parallel arbeiten lassen
- Agenten AFK umsetzen lassen: Aufgabenschleifen, testgetriebene Entwicklung (Red, Green, Refactor), Feedback-Schleifen und Container-Isolation
- Die Code-Architektur mit tiefen Modulen verbessern und durch Review und Tests laufend neue Aufgaben erzeugen
- Agenten mit einem Second Brain ein dauerhaftes Gedächtnis und geteiltes Teamwissen geben sowie mit geplanten Aufgaben, Skills und Workflow-Werkzeugen automatisieren
- Die Rolle von Forward Deployed Engineers (FDE) und die Kultur von Entwicklungsteams im Zeitalter der KI-Agenten
- Praktische Tipps für die tägliche Entwicklung mit Claude

## Ablauf (6 Stunden inklusive Pausen)

1. **Der veränderte Entwicklungsablauf und Demo** (45 Min.): vom Programmieren zur Orchestrierung von Agenten, Überblick über die vier Phasen, Produktdemo
2. **Zwei Grenzen großer Sprachmodelle** (30 Min.): „Smart Zone“ und „Dumb Zone“ des Kontexts, Kontext leeren oder komprimieren, Aufgaben richtig zuschneiden
3. **Anforderungen abstimmen und zerlegen** (60 Min.): „Grill me“-Gespräche, das PRD, vertikale Aufgaben-Slices und Abhängigkeiten, praktische Übung
4. **AFK-Umsetzung** (75 Min.): Aufgabenschleifen für Agenten, testgetriebene Entwicklung, Isolation mit Containern und Worktrees, mehrere Agenten parallel, praktische Übung
5. **Architektur und Review** (45 Min.): tiefe und flache Module, Architektur verbessern, Code-Review und Qualitätsprüfung, Coding-Standards
6. **Gedächtnis, Automatisierung und Team** (45 Min.): Second Brain und geteiltes Wissen, drei Wege der Automatisierung, Forward Deployed Engineers, eine Teamkultur aus KI-First-Denken, kontinuierlichem Lernen und pragmatischer Umsetzung
7. **Praktische Tipps und Abschluss** (30 Min.): Sitzungen neu starten und übergeben, Plugins und Hooks, Tests, Git-Workflow, Container, Zusammenfassung und Fragen

## Für wen

Softwareentwicklerinnen und -entwickler sowie technische Leitungen, die KI-Agenten wie Claude Code systematisch in der täglichen Entwicklung einsetzen möchten. Sicherer Umgang mit Git und der Kommandozeile wird vorausgesetzt.

**Vergütung:** 800 EUR (6-stündiger Vortrag). Für Buchung oder Fragen [kontaktieren Sie uns](/de/contact/).
