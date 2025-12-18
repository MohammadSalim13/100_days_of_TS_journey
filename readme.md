# 100 Days of TypeScript Mastery

A structured, senior-level TypeScript learning and practice challenge designed for experienced JavaScript developers who want to **think in types**, eliminate runtime bugs, and perform confidently in **senior frontend interviews**.

---

## 🎯 Purpose of This Challenge

This is **not** a beginner TypeScript tutorial.

The purpose of this challenge is to:

- Transition from _“JavaScript with types”_ → _Type-driven design_
- Internalize **TypeScript mental models**
- Master **advanced typing patterns** used in large-scale React / Next.js applications
- Improve **interview performance** for senior and staff-level frontend roles
- Reduce runtime bugs through compile-time guarantees

This challenge is intentionally **slow, repetitive, and cumulative**.

Mistakes are expected — and revisited.

---

## 🧠 Learning Philosophy

### 1. TypeScript is a Design Tool

You will learn to:

- Model domains with types
- Encode business rules in the type system
- Prevent impossible states

### 2. Compile-Time > Runtime

Preference order:

- Exhaustiveness checks
- Discriminated unions
- `never`, `unknown`, `satisfies`
- Narrowing over assertions

### 3. No Cargo-Cult Typing

You will **not** blindly use:

- `as any`
- Unsafe type assertions
- Redundant generics

Every type must justify its existence.

---

## 📆 Structure of the 100 Days

Each day includes:

- **1–3 focused questions or exercises**
- A **single core concept**
- Optional stretch problems
- Real-world framing (React, API, state, DTOs)

Difficulty **increases every 10 days**.

---

## 🗂️ Folder Structure

```text
.
├── README.md
├── days/
│   ├── day-001.md
│   ├── day-002.md
│   ├── ...
│   └── day-100.md
├── mistakes/
│   ├── common-errors.md
│   └── my-mistakes.md
├── patterns/
│   ├── discriminated-unions.md
│   ├── exhaustive-switch.md
│   ├── dto-to-vm.md
│   └── utility-types.md
└── playground/
    ├── day-001.ts
    ├── day-002.ts
    └── ...
```
