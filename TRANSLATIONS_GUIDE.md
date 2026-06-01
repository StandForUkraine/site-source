# Voice & translation guide

A reference for anyone editing translations on this site — future-you, future-me, and AI assistants. Read this before touching a `.yml` or `core/texts/*.ts`.

This site is a multi-language directory assembled in 2022 by different volunteers. There has been no codified voice. This document defines the voice we want everything to move toward. The companion `TRANSLATIONS_REVIEW.md` tracks what has been changed and what is flagged for native review.

We are not rewriting the site. We are making it less sloppy: calques, register mismatches, dead masculine generics, awkward proper names, false-friend prepositions. Larger work — refreshing dated 2022 framing, factual updates, full re-translation of weaker locales — is deferred.

## Voice

**Plain, direct, factual.** This is a directory — a wiki — not a campaign. Trust comes from looking like we know what we're doing, not from emotion. The war's gravity is the context; we don't dial it up. No melodrama, no marketing.

**Address the visitor as a person.** Informal "you" in every language: ти (UA), ты (RU), du (DE), tú (ES), tu (FR/IT), ty (PL/NL), 君/あなた (JA, with appropriate register). No formal Sie / usted / Pan / formal вы.

**One thought per sentence.** Short. Active voice. Concrete nouns. Lead with what an organisation *does*, not what it *is*. *"Supplies drones and medical kits to frontline units"* beats *"We are an organisation that supplies…"*.

**Inclusive by default.** Where a language has a clean inclusive form, use it (DE `:innen`). Where it doesn't (ES, PL, UA, RU, IT), reframe with neutral nouns — *tropas*, *quienes defienden*, *personal militar*, *особи*. Don't force `@`, `-e`, or contested markers.

**Proper names: don't translate unless the org uses a local name.** "Lifeline Ukraine" stays "Lifeline Ukraine". "Revived Soldiers Ukraine" stays English. Translate only when the org itself goes by a local name (*Ministerio de Salud de Ucrania*, *Державна податкова служба*).

## Avoid

- Marketing slop: *seamlessly*, *effortlessly*, *robust*, *world-class*, *comprehensive*.
- Exclamation marks (unless something genuinely warrants celebration).
- Hedging: *might*, *could potentially*, *perhaps*.
- Redundancies: *more than 20+*, *in order to*, *due to the fact that*.
- Calques. Repeat offenders, with the fix:
  - *on your terms* → "as it suits you" / "tak, jak ci wygodnie" / "як зручно тобі"
  - *in the face of* → "against / during / in the time of"
  - *reach us* → "write to us" / "get in touch"
  - *and more* → drop, or name the thing
  - *shelter* (as a noun for refugees) → mistranslated as the building in UA/RU (Притулки, Убежища). The people, not the place.
- False-friend prepositions. Always read twice. PL example caught: *"w oparciu o pełnoskalową inwazję"* means *"based on"* — opposite of the intended *"to resist"*.

## Card descriptions

- 1–3 sentences. Third person, present tense.
- First sentence: what the org does, where, since when (if it matters).
- Second sentence: how — named programs, equipment, geographic detail. Carry specifics verbatim from EN.
- Don't invent facts. If a sentence has something you can't confirm in the target language, leave it in English and flag in the review log.

## Chrome (`core/texts/*.ts`)

- Buttons: imperative — *Donate, Share, Suggest, Verify*.
- Hero / footer: second person, declarative. Address the visitor, never describe them.
- Tags: short noun phrases. Plural where the pattern is plural in the locale (UA: *Військові, Медичні, Громадські*).
- Tag canonical EN values: `All, Military, Medical, Humanitarian, Refugees, Press, Non-combat, NGO, Human Rights`. (`Veterancy` was removed — unused.)

## Numbers and dates

Canonical is EN unless the locale file has a fresher number, in which case it usually does (the org's native team updated it). When EN and a locale disagree on a fact, **flag, don't silently overwrite**. Track in the review log.

Known disagreement: org #14 Ukrainian Women's Guard — EN says 30,000 trained; UA/PL/FR independently say 40,000.

## Pre-existing content

Many cards carry 2022 framing — older numbers, older program names, references to programs that have evolved or ended. This is known. We are not refreshing it in this pass. Don't silently rewrite older cards unless the existing text is **broken** (grammar, factual error, calque, gendered exclusion) or you're filling a gap.

If you spot a stale fact you're sure about, **flag it in the review log**, don't quietly edit.

## Hidden organisations

If a donation YAML has `hidden: yes` or `hidden: true`, **don't touch it**. Don't draft new locale files for it; don't run drift fixes on it. Hidden orgs are either dead, untrustworthy, or paused — translating them is wasted effort and clutters the repo. If you spot one being un-hidden later, that's the trigger to translate.

## Proper-name calques — common-sense rule

If you find a non-EN file with a title that's a **literal translation of an English org name** (the org has no real local-language identity), revert it to the English original. Don't ask. Examples already caught:

- FR #1 `Retour en Vie` → `Come Back Alive`
- FR #23 `Agents Sanguins` → `Blood Agents`
- FR #30 `SOS Être` → `Vostok SOS`
- DE #29 `Wiederbelebte Soldaten Ukraine` → `Revived Soldiers Ukraine`

Caveat: orgs with genuine local names (e.g. `Ministerio de Salud de Ucrania`, `Державна податкова служба`) keep the local name.

## When you're not sure

- Flag, don't decide. A flagged sentence is more useful than a smooth invented one.
- Add `# AI-assisted draft, pending native review` to the top of any file you've drafted without native review.
- Log substantive uncertainties in `TRANSLATIONS_REVIEW.md`.

## Sweep checklist (per locale)

Before calling a locale "done for this round":

1. Tags match canonical EN values; `Refugees` and `Non-combat` use the locale's "aid" / "support" forms.
2. Chrome uses informal address consistently throughout the file.
3. Filter label (`filterTo`) means "cause" / "category", not "to" or "organisations".
4. No false-friend preposition reversing the meaning of `goal1` (resist, not based on).
5. Proper names: recognised local form OR English original. No literal-translation calques.
6. Inclusive forms applied per the policy above.
7. PL specifically: no `na Ukrainie` — use `w Ukrainie`.
8. No hidden orgs touched. No literal-translation org titles.

## Scope tracker (May 2026)

- **Fully aligned to this guide:** EN (canonical), UA (native sign-off).
- **Voice-passed AI drafts, pending native review:** DE, PL, ES, FR, SW, NL, IT, RU, JA, PT (pt-PT — chrome + all 42 cards, added on its own branch).
- **Tag/chrome touched only, cards untouched:** EL, TR, DK, NO, LV, RO.
- **Needs full pass (still partly English fallback):** AR.
- **Deferred until a later session:** PT-BR (Brazil) — we shipped pt-PT (Portugal); a Brazilian variant could follow if traffic warrants.
- **Out of scope, deferred:** team list (`About.tsx` `teamMembers` array), refreshing 2022-era card framing.
- **Out of scope permanently:** widget page (discontinued), share / social copy (discontinued), About page localisation (English-only by design).
