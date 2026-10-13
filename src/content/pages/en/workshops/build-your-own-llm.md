---
title: "AI: Build Your Own LLM"
description: "2-day hands-on lecture: train a small language model from scratch, fine-tune an open-source model, evaluate it and run it locally."
order: 3
---

![Illustration: your data is trained on a chip into your own model](/images/workshops/build-your-own-llm.svg)

Calling a ready-made AI API is convenient, but your company data goes to an external service and the model does not know your industry. This 2-day hands-on lecture takes you through the full process of building your own large language model. First you train a small model from scratch to understand how LLMs work. Then you fine-tune an open-source model on your own data, evaluate the results and run it on your own server.

## Overview of the two days

- **Day 1: Understand and train from scratch**. Take apart how large language models work, prepare data, train a tokenizer, and write and train a small GPT model in PyTorch yourself.
- **Day 2: Fine-tune, evaluate and deploy**. Choose a suitable open-source base model, fine-tune it at low cost with LoRA, evaluate the results systematically, and finally quantize and deploy it locally.

## What you will learn

- The core principles of large language models: tokenization, embeddings, Transformers, attention and next-token prediction
- Collecting, cleaning and organizing training data, and training your own tokenizer
- Implementing and training a small GPT model from scratch in PyTorch, reading training curves and tuning hyperparameters
- Choosing a suitable open-source base model based on license, model size and hardware
- Building an instruction fine-tuning dataset and fine-tuning models with LoRA and QLoRA
- Evaluating results with automatic metrics, human review and LLM-as-a-judge
- Quantizing a model and running it locally or on your own server
- Deciding when building your own model is worth it and when retrieval-augmented generation (RAG) or a ready-made API fits better, with data protection (GDPR) in mind

## Schedule (2 days, 6 hours per day, including breaks)

### Day 1: Understand and train from scratch

1. **How large language models work** (60 min): tokenization, embeddings, Transformers and attention, next-token prediction
2. **Data preparation and tokenization** (60 min): collecting and cleaning text data, training a BPE tokenizer
3. **Training a small GPT from scratch** (120 min): implementing the model and training loop in PyTorch, training on a small dataset
4. **Monitoring training and tuning** (60 min): loss curves, overfitting, hyperparameters, estimating compute and cost
5. **Day 1 wrap-up and Q&A** (30 min)

### Day 2: Fine-tune, evaluate and deploy

1. **Choosing an open-source base model** (45 min): comparing common open-source models, license, model size and hardware requirements
2. **Building a fine-tuning dataset** (60 min): instruction data formats, data quality, turning company documents into training data
3. **Fine-tuning with LoRA and QLoRA** (90 min): hands-on fine-tuning of an open-source model, comparison with the base model
4. **Evaluating the model** (60 min): automatic metrics, human review, LLM-as-a-judge
5. **Quantization and local deployment** (45 min): quantizing the model, running it locally with common inference tools and serving an API
6. **Build or not build, wrap-up and Q&A** (30 min): trade-offs between your own model, RAG and ready-made APIs, data protection

## Who it is for

Developers, data engineers and technical leads who want to build or customize large language models inside their company. Basic Python skills are required.

**Fee:** EUR 1,500 (2-day lecture). To book or ask questions, please [contact us](/en/contact/).
