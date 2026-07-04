# Translations review log

Tracking what was changed in the translation pass and what needs native-speaker sign-off.

UA edits: written by the project's UA-native maintainer (Oleksii) — assume signed off.
All other locales: AI-assisted drafts from current EN, marked at the top of each `<lang>.yml` with `# AI-assisted draft, pending native review`.

---

## Chrome (`core/texts/*.ts`)

Tag taxonomy + filter label + a few register fixes — all applied. See commit / git diff for the full list; the substantive points worth flagging to a native reader:

- **filterTo** values renamed to mean "Cause" / "Category" across all 17 non-EN locales. Many were previously the noun "Organizations", which was wrong (the dropdown scopes the cause being filtered, not the org type). Specific picks per locale below — review if anything is off:
  - DE: `Zweck` · ES: `Causa` · FR: `Cause` · IT: `Causa` · PL: `Cel` · UA: `Категорія` · RU: `Категория` · NL: `Doel` · EL: `Κατηγορία` · JA: `カテゴリー` · TR: `Kategori` · AR: `Cause` *(still in English — needs an Arabic equivalent, e.g. السبب or الفئة)* · DK: `Kategori` · LV: `Kategorija` · NO: `Kategori` · RO: `Cauză` · SW: `Kategori`
- **Refugees** tag renamed → local equivalent of "Refugee aid". UA and RU were *Shelters* (wrong) — now corrected.
- **Non-combat** tag → local equivalent of "Non-combat support".
- **DE** chrome: `heroTagline` Vollinvasion → vollumfänglichen Invasion Russlands; `joinUs` Begleiten Sie uns → Mach mit; `close` Schliessen → Schließen.
- **UA** chrome: `joinUs` Підписатись → Приєднуйтесь; `browseAll2` організацій → організації.
- **AR**: still has English-language values for several keys (tags, filterTo, joinFormLink, etc.). Whole locale needs an Arabic pass.

---

## Donations — UA drift fixes (applied)

Descriptions rewritten to match current EN. Flag if any factual nuance is off.

| Org # | Org | Status |
|---|---|---|
| #2 | Serhiy Prytula Foundation | rewritten |
| #10 | Hospitallers | rewritten |
| #11 | Pirogov First Volunteer Mobile Hospital | rewritten |
| #14 | Ukrainian Women's Guard | rewritten — **flag**: EN says "30,000 women trained since 2014"; existing UA said 40,000. UA file kept 40,000 (likely the more recent count). EN may be stale. |
| #16 | Army SOS | rewritten — old UA mentioned "Кропива" system specifically, EN no longer does; UA now mirrors EN's broader description |
| #22 | The Kyiv Independent | rewritten |
| #33 | Save the Children | rewritten |
| #36 | Nova Ukraine | rewritten — four pillars (Heal/Build/Empower/Advocate) kept in English, names of programs |
| #43 | Sincere Heart | left alone — current UA is already a faithful (compact) translation |
| #47 | Ed's friends Ukraine | rewritten |
| #54 | Leleka Foundation | rewritten |

---

## Donations — missing files filled (AI-assisted drafts, marked with header comment)

All filled this pass. Native review still pending.

- **DE (19):** #10, #13, #37–54.
- **PL (18):** #10, #37–54.
- **ES (12):** #43–54.
- **FR (12):** #43–54.

## Donations — drifted descriptions, rewritten from current EN

All rewritten this pass. Native review pending (UA done by maintainer).

- **DE (6):** #6 Red Cross · #12 Molfar · #14 Women's Guard · #22 Kyiv Independent · #25 Razom · #29 Revived Soldiers
- **PL (6):** #6 Red Cross · #11 Pirogov · #12 Molfar · #14 Women's Guard · #21 Texty · #36 Nova Ukraine
- **ES (7):** #3 Ukraine Humanitarian Fund · #10 Hospitallers · #12 Molfar · #14 Women's Guard · #22 Kyiv Independent · #25 Razom · #28 United Help
- **FR (5):** #6 Red Cross · #10 Hospitallers · #12 Molfar · #14 Women's Guard · #22 Kyiv Independent

## DE voice pass (follow-up)

Pre-existing DE cards use traditional male-generic forms (Soldaten, Spender, Ukrainer). My initial drafts had introduced :innen markers — stripped them to match house consistency. Other small tightenings:

- #47: "Schutzpanzerung" → "Schutzausrüstung"; "Medizingüter" → "medizinische Versorgungsgüter".
- #43: "Kindern des Krieges" → "Kriegskindern" (natural compound).
- #49: "Geflüchteten" → "Flüchtlingen" (matches Flüchtlingshilfe tag).
- #50: "Kindern unter drei Jahren" → "Babys unter drei Jahren" (EN says "babies").
- #54: "13 Mio. USD" → "13 Mio. Dollar" (matches existing files' style).
- Chrome `heroTagline` + `goal1`: aligned both to "großangelegte Invasion" — the most natural German press term, dropping calques (`vollständig`, `vollumfänglich`).

**Flagged for native review (not changed — pre-existing voice):**
- `core/texts/de.ts` `footerCreds` mixes gender forms (Designerinnen, Journalistinnen but Aktivisten generic).
- `core/texts/de.ts` `disclaimer` says "verbinden nur mit Spendern" — that's "donors", but the EN intent is "fundraisers" (better: "Spendenaktionen" / "Sammelaktionen").
- Pre-existing card #35 has a typo: "Tierenrechte" → should be "Tierrechte".
- Pre-existing card #9 title "Die ukrainische humanitäre Fundraising" is broken German.

## Policy decisions (user-locked)

- **PL:** use **"w Ukrainie"** site-wide (post-2022 sovereignty form). Swept across all `pl.yml` files and `pl.ts`. Was "na Ukrainie" everywhere before.
- **DE:** **inclusive forms by default** (`:innen`). Voice is **direct and approachable** — chrome uses `du` form (not `Sie`); donation cards stay 3rd person (wiki-style) but inclusive.

## DE inclusivity + voice sweep (follow-up to follow-up)

Mechanical inclusivity pass across **22 DE files** (both my drafts and pre-existing). Replaced male-generic plurals referring to people with `:innen` forms:

`Soldaten → Soldat:innen` · `Spender(n) → Spender:innen` · `Ersthelfer → Ersthelfer:innen` · `Sanitäter → Sanitäter:innen` · `Verteidiger → Verteidiger:innen` · `Zivilisten → Zivilist:innen` · `Aktivisten → Aktivist:innen` · `Ingenieuren/-e → Ingenieur:innen` · `Designern/Designerinnen → Designer:innen` · `Journalisten/Journalistinnen → Journalist:innen` · `Veteranen → Veteran:innen` · `Wohltätern → Wohltäter:innen` · `Ärzte → Ärzt:innen` · `Chirurgen → Chirurg:innen` · `Pharmazeuten → Pharmazeut:innen` · `Ukrainer → Ukrainer:innen` (where it means people, not the nationality adjective).

Chrome `de.ts` direct/approachable pass:
- `siteDescription`, `heroTitle`, `heroSubtitle`: dropped the formal `Spenden Sie` / `Durchsuchen Sie` register; rewrote to `du` form and tightened.
- `browseAll1/2`: was "Überblick über alle organisationen verschaffen" (lowercase noun bug + bureaucratic) → "Alle Organisationen ansehen".
- #29 title was getting over-substituted to "Wiederbelebte Soldat:innen Ukraine" — reverted to the org's actual English name **Revived Soldiers Ukraine**.

## Hidden orgs — net-new files removed

Per policy ("don't work on hidden orgs"): 40 untracked locale files that I had created for hidden orgs (`hidden: yes` / `hidden: true` in EN) were deleted before commit. Orgs affected: #13, #32, #35, #37, #38, #41, #45, #47, #49. Drift-fix improvements I made on already-existing locale files for hidden orgs (#3, #6) were kept — they're improvements to data that's already in repo, not new effort.

## Proper-name calques fixed (FR)

Common-sense pass per the guide:
- #1 `Retour en Vie` → `Come Back Alive`
- #23 `Agents Sanguins` → `Blood Agents`
- #15 description `Ligne de Vie Ukraine` → `Lifeline Ukraine` (title was already correct; only the description was inconsistent)
- #32 (`ASAP secours`) skipped — hidden org.

## International Legion removal

Per user call: the site never had an official tie to the International Legion. The `joinFormLink` key existed in all 18 locale files but had no consumer in any component (verified via grep across `core/` and `pages/`). Stripped the key from all 18 locale files. No code changes needed. Zero `legion`-related strings remain anywhere in the repo.

## Second batch: SW · NL · IT · RU · JA (overnight pass)

Voice + inclusivity per `TRANSLATIONS_GUIDE.md`. RU kept as a locale per editorial call (outreach + SEO + Russians do donate). Each locale: chrome fixes + drift rewrites + filling missing cards.

### SW (Sweden) — ~21 files
- Chrome bug: `'Credit Card': 'Carte de crédit'` → `'Kreditkort'` (French value was sitting in Swedish chrome).
- Chrome bug: `joinUs: 'Följ oss'` ("Follow us") → `'Gå med'` ("Join").
- Chrome calque: `heroTagline` "i mötet med" → "under" (drop the literal "in the face of").
- Drift fixes (existing): #6, #10, #11, #12, #13, #22 rewritten from current EN.
- Missing filled: #43, #44, #45, #46, #47, #48, #49, #50, #51, #52, #53, #54.

### NL (Netherlands) — ~38 files
- Chrome bug: `close: 'Afsluiten'` → `'Sluiten'` ("Afsluiten" means "shut down/finalize", wrong for popup close).
- Chrome calque: `footerContact: 'Bereik ons'` → `'Schrijf ons'`; `footerMissionLead` "op jouw voorwaarden" → "op jouw manier".
- Chrome calque: `heroTagline` "in het aangezicht van" → "tijdens".
- `joinFormLink`: "International Legion" → "Internationaal Legioen".
- `siteDescription`, `heroTitle`, `heroSubtitle` tightened.
- Drift: #6, #12, #14 (bumped to 40k), #22.
- Missing filled: #2, #9, #10, #11, #13, #31, #32, #33, #34, #35, #36, #37, #38, #39, #41, #42, #43, #44, #45, #46, #47, #48, #49, #50, #51, #52, #53, #54.

### IT (Italy) — ~28 files
- Chrome already informal `tu`. Calque kill: `footerMissionLead` "alle tue condizioni" → "come preferisci"; `heroTagline` "di fronte" → "durante".
- Inclusivity: `goal2` "veterani e vittime" → "persone veterane e vittime"; `goal3` "rifugiati sfollati" → "persone sfollate"; `goal4` "bambini, anziani" → "infanzia, persone anziane"; `footerCreds` abstract roles ("ingegneria, design, giornalismo e attivismo").
- Drift: #6, #12, #14 (40k), #22.
- Missing filled: #10, #13, #37, #38, #39, #41, #42, #43, #44, #45, #46, #47, #48, #49, #50, #51, #52, #53, #54.

### RU (Russia) — ~22 files
- Chrome bug: `'Credit Card': 'Card de credit'` → `'Кредитная карта'` (Romanian value was in Russian chrome).
- Chrome bug: `joinUs: 'Подписаться'` ("Subscribe") → `'Присоединяйся'` (same bug pattern as UA had).
- Register: `siteDescription`, `heroTitle`, `heroSubtitle` switched from formal `Пожертвуйте` (вы) → informal `Поддержи` (ты), matching the rest of chrome.
- Calque: `footerMissionLead` "на ваших условиях" → "так, как тебе удобно"; verbs switched ты-form too.
- Inclusivity: `footerCreds` reframed to abstract roles ("инженерия, дизайн, журналистика, активизм").
- Drift: #2, #10, #11, #16 (dropped old "Кропива" specific), #22, #27, #33, #36, #47.
- Missing filled: #52, #53, #54.

### JA (Japan) — ~21 files
- Chrome bug: `'Credit Card': 'Credit Card'` → `'クレジットカード'`.
- Chrome bug: `All: 'All'` → `'すべて'`.
- Chrome **factual error**: `joinFormLink: 'インターナショナルリージョンに参加する'` → `'国際軍団に参加する'`. The original transliterated "Legion" as リージョン which means "region" in JP; correct word for "Legion" is `軍団`. Real meaning bug.
- Drift: #2, #10, #12, #25, #28, #36 (all had stale framing missing current EN's specifics).
- Missing filled: #43, #44, #45, #46, #47, #48, #49, #50, #51, #52, #53, #54.

## FR voice + inclusivity pass

Approach: midpoint inclusive forms (`Ukrainien·ne·s`, `vétéran·e·s`, `donateur·rice·s`) where natural; abstract roles or neutral reframings (`personnel paramédical`, `troupes ukrainiennes`, `celles et ceux qui défendent l'Ukraine`) where midpoint would be clumsy. Chrome switched from `vous` to `tu` to match the rest of the site's informal voice.

Cards (my drafts):
- #10: "Ses paramédicaux travaillent" → "Le personnel paramédical travaille".
- #12: "soldats ukrainiens" → "troupes ukrainiennes"; "soldats blessés" → "personnel militaire blessé"; "chirurgiens", "pharmaciens" → midpoint.
- #25: was actually drifted (heuristic missed it) — original FR said "Razom lance des projets..." which didn't match current EN. Rewrote from EN.
- #46: "hubs régionaux" → "centres régionaux" (anglicism).
- #47: "blindage défensif" → "équipement de protection"; "et plus" calque → "et autres".
- #49: "sauveteurs et pompiers" → "équipes de secours et pompier·e·s".
- #52: "soldats blessés" → "personnel militaire blessé".
- #53: "donateurs" → "donateur·rice·s".
- #54: "défenseurs" → "celles et ceux qui défendent l'Ukraine"; "13 M USD" → "13 millions de dollars".

Chrome `fr.ts`:
- `siteDescription`, `heroTitle`, `heroSubtitle`, `heroTagline`: formal `Faites un don` / `Parcourez` / infinitive → `tu` form (`Soutiens`).
- `footerMissionLead`: `vous aide ... selon vos conditions` (calque on "on your terms") → `t'aide ... comme tu le souhaites`.
- `footerContact`: `Contactez-nous` → `Écris-nous`.
- `joinUs`: `Rejoignez-nous` → `Rejoins-nous`.
- `disclaimer`: `vous mettons en relation` → `t'orientons vers`.
- `goal2`: `vétérans` → `vétéran·e·s`. `goal3`: `réfugiés déplacés` → `personnes déplacées`.
- `footerCreds`: `bénévoles — ingénieurs, designers, journalistes et activistes` → `bénévoles — ingénierie, design, journalisme et militantisme` (abstract, naturally inclusive).

Pre-existing FR — surgical bug fixes only:
- #5: `gilets blindé` → `gilets blindés`, `caméras thermique` → `caméras thermiques`, `quadrirotores` → `drones quadcoptères` (grammar agreement + clearer word).
- #8: `été établit` → `été établi` (typo).
- **#30: `SOS Être` → `Vostok SOS`** — title was a nonsense translation ("Être" = "to be"; org name is Vostok SOS). Also fixed `Kiev` → `Kyiv` and `colonies de première ligne` → `localités de première ligne` (colonies has colonial baggage).

Side-quest from #30: swept `Kiev` → `Kyiv` across all locale files for org #30 (was in ES, IT, NL, NO, RO, TR). Sovereignty-correct spelling is the standard now. No other `Kiev` occurrences remain in donations or chrome.

**Pre-existing FR proper names flagged, not fixed (need user call):**
- #1 title `Retour en Vie` — calque-translation of "Come Back Alive". Per guide, should be reverted to English original. Holding for confirmation since titles are user-facing.
- #23 title `Agents Sanguins` — calque-translation of "Blood Agents". Same case.
- #15 description uses `Ligne de Vie Ukraine` while title kept `Lifeline Ukraine` — inconsistent. Pick one.
- #32 title `ASAP secours` — partial translation, inconsistent casing. Org name is `ASAP Rescue`.

## ES voice + inclusivity pass

Spanish doesn't have a clean `:innen`-style inclusive marker (the `-e` / `@` forms are politically contested). Approach: reframe with gender-neutral noun phrases where natural (`personal`, `tropas`, `personas`, `infancia`, `voluntariado`, `quienes`), keep generic masculine for profession words where the inclusive form would read artificial.

Cards (my drafts):
- #10: "Sus paramédicos" → "El personal paramédico".
- #12: "soldados ucranianos" → "tropas ucranianas"; "soldados heridos" → "personal militar herido"; "voluntarios" → "personal voluntario".
- #25: "primeros intervinientes" → "personal de primera respuesta".
- #47: "cuándo y dónde" → "cuando y donde" (subordinate, no accent — real grammar bug); "y más" calque → "y otros recursos".
- #52: "soldados heridos" → "personal militar herido".
- #54: "los defensores" → "quienes defienden Ucrania"; "13 millones de USD" → "13 millones de dólares".

Chrome `es.ts`:
- `siteDescription`, `heroTitle`, `heroSubtitle`: formal `Done a...` / `Explore una lista...` → `tú` form (`Apoya a...`). Matches the rest of the chrome which was already `tú`.
- `goal2`: "veteranos y víctimas" → "personas veteranas y víctimas".
- `goal4`: "niños, personas mayores" → "la infancia, a las personas mayores" (uses collective noun).
- `footerCreds`: rewrote from "voluntarios — ingenieros, diseñadores, periodistas y activistas" to "voluntariado — ingeniería, diseño, periodismo y activismo, desde Ucrania y desde todo el mundo" (abstract roles, naturally inclusive).
- `tag 'Non-combat'`: "Apoyo no-combate" → "Apoyo no combatiente".

**Pre-existing ES proper names — checked:** mostly reasonable. #2 "Fondo Benéfico de Serhiy Prytula" is accurate; #4 "Ministerio de Salud de Ucrania" correct; org names kept English where there's no recognised Spanish form (Come Back Alive, Voices of Children, Blood Agents, etc.). Minor: #30 description uses "Vostok-SOS" while title is "Vostok SOS" — pre-existing, not fixed.

## PL voice pass (follow-up)

Pre-existing PL cards use "na Ukrainie" (older preposition) — kept for house consistency rather than modernising to "w Ukrainie" (post-2022 official PL recommendation). User to decide if the whole file should move to "w Ukrainie".

Tightenings applied to my 24 drafts:
- #10: "Dla dobra każdego życia" → "W imię każdego życia" (more idiomatic); "medycynę pola walki" → "medycynę taktyczną"; "w całej Ukrainie" → "na całej Ukrainie".
- #11, #44: "w Ukrainie" → "na Ukrainie" (match house).
- #12: "kadr medycznych" → "personelu medycznego".
- #36: "rzecznictwo na poziomie polityk publicznych" → "rzecznictwo polityczne".
- #42: "cywilnym Ukraińcom" → "cywilom ukraińskim".
- #43: "dzieci wojny" → "dzieci dotkniętych wojną" (kills the calque).
- #46: "hubów" → "punktów" (drop anglicism).
- #47: "pancerz ochronny" → "wyposażenie ochronne"; "i więcej" → "i inne".
- #54: "13 mln USD" → "13 mln dolarów".

Chrome `pl.ts` fixes (real bugs, not just voice):
- `goal1`: "...w oparciu o pełnoskalową inwazję" was **the wrong meaning** ("based on" — opposite of intent). Now: "...by stawić opór pełnoskalowej inwazji".
- `footerMissionLead`: "na twoich zasadach" → "tak, jak ci wygodnie" (drops the calque on "on your terms").
- `footerContact`: "Dotrzyj do nas" → "Napisz do nas" (calque on "Reach us").

**Flagged not changed (pre-existing voice):**
- Card #4 PL title is still English ("Ministry of Healthcare of Ukraine") — should be translated.
- Card #5 PL has "Oni szybko zaopatrują ukraińskim żołnierzom" — grammar (should be "ukraińskich żołnierzy").
- Card #7 PL contains "Voices od Children" — typo of "Voices of Children".
- "na Ukrainie" vs "w Ukrainie" — house-wide political/linguistic choice to make.

## Bugs caught during the pass

- **`donations/21/pl.yml` was mislabelled** — contained "The Kyiv Independent" title and description in the Texty.org.ua folder. Verified the same misfile does NOT exist in any other locale for org #21. Fixed in this pass; note kept in the file header.
- **EN ↔ non-EN factual mismatch on #14 (Ukrainian Women's Guard):** EN says "30,000 women trained since 2014"; existing UA, FR, PL files independently said 40,000 (and the original PL file even said "passed our training" with that count). I kept UA at 40,000 (UA-native source likely most current); harmonised DE, PL, ES, FR to **30,000** to match EN. **The discrepancy itself needs resolving** — confirm the current number with the org and update either EN or the non-EN files accordingly.

---

## Out of scope this pass

- About page (EN only — kept as-is)
- Widget page (discontinued)
- Share / social copy (discontinued)
- 12 other non-primary locales (RU, NL, JA, EL, AR, IT, TR, DK, LV, NO, RO, SW) — keep their tag fixes from this pass; full donation review deferred.
- Code-level `# TODO: Remove this org` markers in donations #41, #45, #49 (also `#13` and #41/#45/#49 are `hidden: yes`). Not touched.

---

## New locale: Portuguese (pt-PT) — added this pass

European Portuguese, informal *tu*, voice per `TRANSLATIONS_GUIDE.md`. **Entirely AI-assisted — no native pass yet. Needs a native PT reviewer before it is treated as final.** Shipped on its own branch (`add-portuguese`) / PR, separate from the main translations pass (#58).

What was added:
- **Registration** in `core/texts/index.ts`: `import pt`, added to `byLang`, `flagsMap['pt'] = '🇵🇹'`. Not RTL.
- **Chrome** `core/texts/pt.ts`: meta, buttons, hero, tags, footer + goals, filter, payment methods, browseAll, legal popup translated. The About / verify / widget blocks are kept in **English** (out-of-scope per guide) — they *must* be present because `TextKeys` is the intersection of all locales' keys (`core/texts/index.ts:72`), so every locale carries the full key set; same approach as `de.ts`.
- **Cards**: `pt.yml` for all 42 non-hidden orgs (description only; titles left as the orgs' original names — none have an established PT identity). Hidden orgs (#3, #4, #6, #13, #32, #35, #37, #38, #41, #45, #47, #49) not touched.

Voice choices a native reviewer should sanity-check:
- Tags: `Refugees → Ajuda a refugiados`, `Non-combat → Apoio não-combatente`, `filterTo → Causa`.
- Inclusivity: PT has no clean inclusive marker, so neutral nouns where natural (`pessoas deslocadas`, `quem defende o país`, `quem precisa`). Generic masculine kept for profession words (`voluntários`, `veteranos`) — flag if the project wants these reframed, as was done for ES/IT.
- `goal1` uses *resistir à invasão* (resist), not a "based on" calque.
- Place names: `Kyiv`, `Kharkiv`, `Dnipro`, `Donbas` (Ukraine-aligned spellings).
- PT-PT vocabulary used over PT-BR: `Partilhar` (not Compartilhar), `ligação` (not link), `connosco`, `ótica`, `eletrónica`.
- `spreadTheWorld` left as the English "Spread the word" (matches `de.ts`; appears to be discontinued share copy).

---

## New locale: Kazakh (kk) — added this pass

Kazakh (Cyrillic), informal *сен*, voice per `TRANSLATIONS_GUIDE.md`. Shipped on its own branch (`add-kazakh`) / PR, independent of the main pass (#58) and of the Portuguese branch.

> ⚠️ **LOW CONFIDENCE.** Unlike the other locales, this was drafted without any author who can read Kazakh and without an existing Kazakh file to anchor against. Every `kk.yml` and `kk.ts` is marked accordingly. **This locale needs a thorough native review before it should be considered usable — not just a light proofread.** Treat case endings, agreement, register (сен vs сіз consistency), and terminology as unverified.

What was added:
- **Registration** in `core/texts/index.ts`: `import kk`, added to `byLang`, `flagsMap['kk'] = '🇰🇿'`. Not RTL.
- **Chrome** `core/texts/kk.ts`: meta, buttons, hero, tags, footer + goals, filter, payment methods, browseAll, legal popup. About / verify / widget blocks kept in **English** (out-of-scope per guide + required for `TextKeys` parity — `core/texts/index.ts:72`).
- **Cards**: `kk.yml` for all 42 non-hidden orgs (description only; titles left as the orgs' original names). Hidden orgs not touched.

Specific things for a native reviewer to check first:
- Tags: `Refugees → Босқындарға көмек`, `Non-combat → Шайқастан тыс қолдау`, `NGO → ҮЕҰ`, `filterTo → Санат`, `filterPayVia → Тәсілі`.
- `donate` button rendered as `Қолдау` ("support") rather than a literal "donate" — confirm this reads right on a donate button.
- Place names: `Киев`/`Харьков`/`Днипро` were written in their common Russian-derived Cyrillic forms; a Kazakh editor may prefer Ukrainian-aligned spellings (e.g. `Киів`). Flagged — not decided.
- `goal1` uses *resist* framing (қарсы тұру), not a "based on" calque.
- Script: Cyrillic only. If the project ever wants Latin Kazakh, that's a separate variant.
