[← Doom](README.md)

# Connections

## Family tree
Solid lines are shared members. Dotted lines are influence or a label. Rounded boxes are
labels or bands outside the main list.

```mermaid
flowchart TD
    BS["Black Sabbath<br/>1968"]
    subgraph CULT["Traditional & epic doom (70s–80s)"]
        PEN["Pentagram<br/>1971"]
        OBS(["The Obsessed"])
        SV["Saint Vitus<br/>1979"]
        CAN["Candlemass<br/>1984"]
    end
    subgraph NINE["90s branches"]
        ND(["Napalm Death"])
        CAT["Cathedral<br/>1989"]
        RA(["Rise Above Records<br/>1988"])
        SLP["Sleep<br/>1990"]
        EW["Electric Wizard<br/>1993"]
        OM(["Om"])
        HOF(["High on Fire"])
    end
    subgraph SWE["Swedish retro wave (2000s–)"]
        NOR(["Norrsken"])
        WC["Witchcraft<br/>2000"]
        GY["Graveyard<br/>2006"]
        GHOST(["Ghost<br/>see Swedish metal"])
    end
    subgraph US2["US: desert, gothic, sludge"]
        KYUSS["Kyuss<br/>1987"]
        QOTSA(["Queens of the Stone Age<br/>see Seattle grunge"])
        TON["Type O Negative<br/>1989"]
        CARN(["Carnivore"])
        MAST(["Mastodon<br/>see Post-metal"])
        NEU(["Neurosis<br/>see Post-metal"])
    end

    BS -.-> PEN
    BS -.-> SV
    BS -.-> CAN
    BS -.-> SLP
    BS -.-> EW
    OBS -- "Wino" --> SV
    ND -- "Lee Dorrian" --> CAT
    CAT -- "Lee Dorrian" --> RA
    RA -.-> EW
    RA -.-> WC
    RA -. "reissues" .-> PEN
    SLP -- "Cisneros, Hakius" --> OM
    SLP -- "Matt Pike" --> HOF
    NOR -- "Magnus Pelander" --> WC
    NOR -- "Joakim Nilsson, Rikard Edlund" --> GY
    PEN -. "the template" .-> WC
    WC -. "same circle" .- GY
    RA -. "debut" .-> GHOST
    BS -. "desert haze" .-> KYUSS
    KYUSS -- "Josh Homme" --> QOTSA
    BS -. "slow riffs" .-> TON
    CARN -- "Peter Steele" --> TON
    NEU -- "Scott Kelly (guest)" --- MAST
    SLP -. "riff worship" .- MAST
```

## Norrsken → Witchcraft and Graveyard
Norrsken was a late-90s Swedish retro rock band. When it ended:
- **Magnus Pelander** formed [Witchcraft](bands/witchcraft.md) (2000)
- **Joakim Nilsson** and **Rikard Edlund** later formed [Graveyard](bands/graveyard.md) (2006)
- Drummer Axel Sjöberg (Graveyard) was also involved **(verify)**

## Lee Dorrian and Rise Above Records
- Napalm Death (vocals on *Scum*) → [Cathedral](bands/cathedral.md)
- Founded **Rise Above Records**, which released [Witchcraft](bands/witchcraft.md)'s first albums,
  [Electric Wizard](bands/electric-wizard.md), Pentagram compilations, Blood Ceremony, Uncle Acid and more

## Scott "Wino" Weinrich
- The Obsessed → [Saint Vitus](bands/saint-vitus.md) → Spirit Caravan, The Hidden Hand, many more

## Victor Griffin
- [Pentagram](bands/pentagram.md) (guitar, on and off since the early 80s), Place of Skulls

## Sleep's split
- Al Cisneros and Chris Hakius → **Om**
- Matt Pike → **High on Fire**

