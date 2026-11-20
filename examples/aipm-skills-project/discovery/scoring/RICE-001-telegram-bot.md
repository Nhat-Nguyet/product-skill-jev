---
rice-id: RICE-001
fr-id: FR-001
title: RICE Score - Telegram Bot Integration
created: 02/05/2026
rice-score: 72
ice-score: 12
---

# RICE-001 - Telegram Bot Scoring

## RICE Calculation

RICE = (Reach x Impact x Confidence%) / Effort

| Input | Value | Reasoning |
|-------|-------|----------|
| Reach | 90 | All PMs use it daily (90% of target users) |
| Impact | 2 | High - reduces idea capture time from minutes to seconds |
| Confidence | 80% | Strong evidence from user interviews and competitor analysis |
| Effort | 2 person-weeks | Python bot + Docker deployment |

**RICE = (90 x 2 x 0.80) / 2 = 72**

## ICE Calculation

ICE = Impact x Confidence% x Ease

| Input | Value |
|-------|-------|
| Impact | 2 |
| Confidence | 80% |
| Ease | 7.5 |

**ICE = 2 x 0.80 x 7.5 = 12**

## Decision

RICE 72 >= 40 threshold. APPROVED for Discovery Gate.

## Recommendation

Proceed to gate review. Research on technical feasibility needed.
