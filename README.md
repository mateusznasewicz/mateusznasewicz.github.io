# 🚀 Junior Java Fullstack Developer Portfolio

## ✨ Overview

To jest zaawansowane, kinetyczne i głębokie portfolio zaprojektowane, aby zaprezentować moje umiejętności w ekosystemie Java Fullstack. Aplikacja została zbudowana w Angularze i wykorzystuje **GSAP (GreenSock)** do zarządzania immersyjnymi animacjami, kładąc nacisk na czystą architekturę i wyjątkowe doświadczenie użytkownika.

### 🌐 Live Demo & Deployment Status

| Status | Szczegóły |
| :--- | :--- |
| **Live URL** | [Zobacz Live Portfolio](https://mateusznasewicz.github.io/) |
| **CI/CD Build** | [![GitHub Actions Workflow Status](https://github.com/mateusznasewicz/mateusznasewicz.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/mateusznasewicz/mateusznasewicz.github.io/actions/workflows/deploy.yml) |
---

## 🌟 Kluczowe Funkcje i Animacje

Projekt jest zoptymalizowany pod kątem wydajności i efektów wizualnych:

* **Kinetic Design:** Układ Dark Mode, zorientowany na głębię, z neonowymi akcentami (blue/purple).
* **GSAP: Stacked Cards:** Projekty są przypinane (pinned) i przesuwają się sekwencyjnie w górę, odsłaniając kolejny element.
* **GSAP: Parallax Streams:** Rzędy technologii przesuwają się w przeciwnych kierunkach podczas scrollowania.
* **GSAP: Curtain Footer Reveal:** Stopka jest płynnie odsłaniana jako "kurtyna" pod główną warstwą treści.
* **Clean Architecture:** Dedykowana sekcja "Code/IDE" przedstawiająca moją filozofię pisania czystego, architektonicznie solidnego kodu.
* **Angular Signals:** Wykorzystanie Signals do zarządzania aktualizacjami z GSAP, optymalizujące wydajność i omijające `NgZone`.

## 💻 Tech Stack

| Kategoria | Technologie |
| :--- | :--- |
| **Backend Core** | Java 21, Spring Boot, Hibernate, PostgreSQL |
| **Frontend/UI** | Angular 17, TypeScript, SCSS, GSAP |
| **DevOps/Tools** | Docker, AWS, Kafka, Git |

## ⚙️ Uruchomienie Lokalnie

### Wymagania

1.  Node.js (LTS version)
2.  Angular CLI (`npm install -g @angular/cli`)

### Instalacja i Uruchomienie

```bash
# 1. Sklonuj repozytorium
git clone [https://github.com/mateusznasewicz/mateusznasewicz.github.io.git](https://github.com/mateusznasewicz/mateusznasewicz.github.io.git)
cd mateusznasewicz.github.io

# 2. Zainstaluj zależności
npm install

# 3. Uruchom serwer developerski
ng serve
```