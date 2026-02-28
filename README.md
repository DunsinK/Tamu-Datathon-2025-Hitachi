# 67Security  
AI-Powered Regulatory Document Classification System  
TAMU Datathon 2025 – Hitachi Challenge  

🎥 Demo Video: https://youtu.be/GLMhoxUFbUg  
🏆 Award: Best Domain Name  
🔗 Devpost: https://devpost.com/software/6-to-7-security  

---

## Overview

This project is an AI-powered regulatory document classification system built for the Hitachi challenge at Texas A&M’s Datathon 2025.

The system automatically categorizes regulatory and compliance documents into sensitivity levels (Sensitive, Business, Non-Sensitive) using a hybrid AI pipeline that combines deterministic pattern matching with LLM ensembling.

The focus was not just accuracy — but **reliability, variance reduction, and production-minded AI system design**.

---

## Why This Project Matters

Enterprise compliance workflows involve high volumes of documents where misclassification can introduce legal and financial risk.

Single-LLM classification systems often:
- Hallucinate
- Produce inconsistent outputs
- Lack deterministic validation layers
- Provide no reliability guarantees

This system was designed to reduce those risks by combining structured preprocessing with multi-model validation.

---

## Technical Architecture

### 1. Document Processing Pipeline
- Extracted and parsed scanned PDFs using PyPDF  
- Sanitized and structured text for downstream inference  
- Prepared documents for deterministic + probabilistic analysis  

### 2. Hybrid Classification Engine
- Regex-based signal detection for compliance/legal indicators  
- GPT-based classification  
- Gemini-based classification  
- Cross-model agreement logic to reduce single-model bias  
- Final sensitivity assignment based on ensemble validation  

This hybrid architecture improves robustness compared to single-model pipelines.

### 3. Deployment
- Built using Flask  
- Exposed as a lightweight web-based classification interface  
- Designed for easy integration into enterprise document workflows  

---

## AI & Engineering Concepts Applied

- LLM Ensembling  
- Prompt Engineering  
- Deterministic + Probabilistic Hybrid Modeling  
- Decision Variance Reduction  
- Structured Preprocessing for AI Reliability  
- Risk-Aware Classification Design  

---

## Tech Stack

**Language:**  
Python  

**Framework:**  
Flask  

**AI & Processing:**  
LLM APIs (GPT + Gemini)  
Regex Pattern Matching  
PyPDF  


---

Built for TAMU Datathon 2025 – Hitachi Challenge.
