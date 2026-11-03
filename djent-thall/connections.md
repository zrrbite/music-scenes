[← Djent & thall](README.md)

# Connections

## Family tree
Solid lines are shared members or production. Dotted lines are influence. Rounded boxes are
bands and people without a page in this section.

```mermaid
flowchart TD
    MESH["Meshuggah<br/>1987, Sweden"]
    subgraph FR["France"]
        GOJ["Gojira<br/>1996"]
        MIR["Mirar<br/>France / Norway"]
    end
    subgraph US["US djent"]
        BULB(["Misha Mansoor<br/>'Bulb' demos"])
        PER["Periphery<br/>2005"]
        AAL["Animals as Leaders<br/>2007"]
    end
    subgraph UK["UK"]
        TESS["TesseracT<br/>2003"]
        ST["Sleep Token<br/>2016"]
    end
    subgraph SE["Swedish thall"]
        VH["Vildhjarta<br/>2005"]
        HLB["Humanity's Last Breath<br/>2009"]
        BUS(["Buster Odeholm<br/>producer"])
    end
    subgraph CA["Canada"]
        SB["Spiritbox<br/>2017"]
        IWABO(["Iwrestledabearonce"])
    end
    CAV(["Cavalera Conspiracy"])

    MESH -. "polyrhythm" .-> GOJ
    MESH -. "the djent tone" .-> BULB
    BULB -- "Misha Mansoor" --> PER
    BULB -- "produced the debut" --> AAL
    MESH -. "influence" .-> TESS
    MESH -. "influence" .-> VH
    VH -- "Buster Odeholm" --- BUS
    BUS -- "founder" --- HLB
    BUS -. "production (verify)" .- MIR
    VH -. "thall" .-> MIR
    IWABO -- "Courtney LaPlante, Mike Stringer" --> SB
    PER -. "modern djent" .-> SB
    TESS -. "clean-vocal djent" .-> ST
    GOJ -- "Joe Duplantier" --- CAV
```

## Misha Mansoor
- [Periphery](bands/periphery.md): founder, guitar, producer
- Produced [Animals as Leaders](bands/animals-as-leaders.md)' debut; co-founded the gear company Horizon Devices

## Buster Odeholm
- [Humanity's Last Breath](../swedish-metal/bands/humanitys-last-breath.md), [Vildhjarta](../swedish-metal/bands/vildhjarta.md), production for [Mirar](bands/mirar.md) **(verify)**

## Courtney LaPlante and Mike Stringer
- Iwrestledabearonce → [Spiritbox](bands/spiritbox.md)

## Joe Duplantier
- [Gojira](bands/gojira.md): vocals/guitar
- Cavalera Conspiracy (bass on the first album)
