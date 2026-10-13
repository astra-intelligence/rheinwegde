---
title: "KI: Eigenes LLM aufbauen"
description: "2-tägiger Praxisvortrag: ein kleines Sprachmodell von Grund auf trainieren, ein Open-Source-Modell feinabstimmen, bewerten und lokal betreiben."
order: 3
---

![Illustration: Ihre Daten werden auf einem Chip zu Ihrem eigenen Modell trainiert](/images/workshops/build-your-own-llm.svg)

Eine fertige KI-Schnittstelle aufzurufen ist bequem. Doch Ihre Unternehmensdaten gehen dabei an einen externen Dienst, und das Modell kennt Ihre Branche nicht. Dieser 2-tägige Praxisvortrag führt Sie durch den gesamten Weg zum eigenen großen Sprachmodell. Zuerst trainieren Sie ein kleines Modell von Grund auf und verstehen so, wie LLMs funktionieren. Danach stimmen Sie ein Open-Source-Modell mit Ihren eigenen Daten fein ab, bewerten die Ergebnisse und betreiben es auf Ihrem eigenen Server.

## Die zwei Tage im Überblick

- **Tag 1: Verstehen und von Grund auf trainieren**. Die Funktionsweise großer Sprachmodelle zerlegen, Daten vorbereiten, einen Tokenizer trainieren und ein kleines GPT-Modell selbst in PyTorch schreiben und trainieren.
- **Tag 2: Feinabstimmen, bewerten und bereitstellen**. Ein passendes Open-Source-Basismodell wählen, es mit LoRA kostengünstig feinabstimmen, die Ergebnisse systematisch bewerten und es schließlich quantisieren und lokal bereitstellen.

## Was Sie lernen

- Die Kernprinzipien großer Sprachmodelle: Tokenisierung, Embeddings, Transformer, Attention und Next-Token-Vorhersage
- Trainingsdaten sammeln, bereinigen und aufbereiten sowie einen eigenen Tokenizer trainieren
- Ein kleines GPT-Modell in PyTorch von Grund auf implementieren und trainieren, Trainingskurven lesen und Hyperparameter anpassen
- Ein passendes Open-Source-Basismodell nach Lizenz, Modellgröße und Hardware auswählen
- Einen Datensatz für Instruction-Tuning aufbauen und Modelle mit LoRA und QLoRA feinabstimmen
- Ergebnisse mit automatischen Metriken, menschlicher Bewertung und LLM-as-a-Judge prüfen
- Ein Modell quantisieren und lokal oder auf dem eigenen Server betreiben
- Entscheiden, wann sich ein eigenes Modell lohnt und wann Retrieval-Augmented Generation (RAG) oder eine fertige Schnittstelle besser passt, unter Berücksichtigung des Datenschutzes (DSGVO)

## Ablauf (2 Tage, je 6 Stunden inklusive Pausen)

### Tag 1: Verstehen und von Grund auf trainieren

1. **Wie große Sprachmodelle funktionieren** (60 Min.): Tokenisierung, Embeddings, Transformer und Attention, Next-Token-Vorhersage
2. **Datenvorbereitung und Tokenisierung** (60 Min.): Textdaten sammeln und bereinigen, einen BPE-Tokenizer trainieren
3. **Ein kleines GPT von Grund auf trainieren** (120 Min.): Modell und Trainingsschleife in PyTorch implementieren, Training auf einem kleinen Datensatz
4. **Training beobachten und optimieren** (60 Min.): Loss-Kurven, Overfitting, Hyperparameter, Rechenaufwand und Kosten abschätzen
5. **Zusammenfassung Tag 1 und Fragen** (30 Min.)

### Tag 2: Feinabstimmen, bewerten und bereitstellen

1. **Ein Open-Source-Basismodell wählen** (45 Min.): gängige Open-Source-Modelle im Vergleich, Lizenz, Modellgröße und Hardwareanforderungen
2. **Einen Datensatz für das Fine-Tuning aufbauen** (60 Min.): Formate für Instruktionsdaten, Datenqualität, Unternehmensunterlagen in Trainingsdaten umwandeln
3. **Fine-Tuning mit LoRA und QLoRA** (90 Min.): ein Open-Source-Modell praktisch feinabstimmen, Vergleich mit dem Basismodell
4. **Das Modell bewerten** (60 Min.): automatische Metriken, menschliche Bewertung, LLM-as-a-Judge
5. **Quantisierung und lokale Bereitstellung** (45 Min.): das Modell quantisieren, mit gängigen Inferenz-Werkzeugen lokal betreiben und als API anbieten
6. **Selbst bauen oder nicht, Abschluss und Fragen** (30 Min.): Abwägung zwischen eigenem Modell, RAG und fertigen Schnittstellen, Datenschutz

## Für wen

Entwicklerinnen und Entwickler, Data Engineers und technische Leitungen, die große Sprachmodelle im eigenen Unternehmen aufbauen oder anpassen möchten. Python-Grundkenntnisse sind erforderlich.

**Vergütung:** 1.500 EUR (2-tägiger Vortrag). Für Buchung oder Fragen [kontaktieren Sie uns](/de/contact/).
