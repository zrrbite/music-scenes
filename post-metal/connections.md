[← Post-metal](README.md)

# Connections

## Family tree
Solid lines are shared members or collaborations. Dotted lines are influence or a label.
Rounded boxes are bands and labels outside the main list.

```mermaid
flowchart TD
    subgraph ROOTS["Roots"]
        MELV(["Melvins"])
        SWANS(["Swans"])
        PR(["Post-rock<br/>Mogwai, Godspeed You! Black Emperor"])
    end
    subgraph US["US origins"]
        NEU["Neurosis<br/>1985"]
        NR(["Neurot Recordings"])
        ISIS["Isis<br/>1997"]
        HH(["Hydra Head Records"])
        OMG(["Old Man Gloom"])
        SUMAC(["Sumac"])
        RC["Russian Circles<br/>2004"]
        BOTCH(["Botch"])
    end
    subgraph EU["European wave"]
        COL["Cult of Luna<br/>1998"]
        OCEAN["The Ocean<br/>2000"]
        AMEN["Amenra<br/>1999"]
        JC(["Julie Christmas"])
    end
    MESH(["Meshuggah<br/>also Umeå"])
    subgraph REL["Progressive & blackgaze relatives"]
        MAST["Mastodon<br/>2000"]
        TOOL["Tool<br/>1990"]
        DHV["Deafheaven<br/>2010"]
        ALC(["Alcest<br/>France"])
        DW(["Deathwish Inc."])
        PALMS(["Palms<br/>with Chino Moreno, Deftones"])
    end
    WOV(["Wovenhand<br/>see Dark folk"])

    MELV -. "slowness" .-> NEU
    SWANS -. "repetition" .-> NEU
    NEU -- "own label" --> NR
    NEU -. "the template" .-> ISIS
    PR -. "structure" .-> ISIS
    ISIS -- "Aaron Turner" --> HH
    ISIS -- "Aaron Turner" --- OMG
    ISIS -- "Aaron Turner" --- SUMAC
    BOTCH -- "Brian Cook" --> RC
    ISIS -. "influence" .-> COL
    NEU -. "influence" .-> COL
    NEU -. "influence" .-> AMEN
    ISIS -. "influence" .-> OCEAN
    COL -- "Mariner, 2016" --- JC
    MESH -. "same town" .- COL
    NEU -. "Neurot" .- AMEN
    NEU -- "Scott Kelly (guest vocals)" --- MAST
    ISIS -. "toured together (verify)" .- TOOL
    ISIS -- "Caxide, Harris, Meyer" --> PALMS
    ALC -. "blackgaze" .-> DHV
    DW -.-> DHV
    DW -. "Refractory Obdurate" .-> WOV
```

## Aaron Turner
- [Isis](bands/isis.md): vocals/guitar, main visual artist
- Hydra Head Records: founder
- Old Man Gloom, Sumac, Mamiffer

## Brian Cook
- Botch, These Arms Are Snakes → [Russian Circles](bands/russian-circles.md) (bass)

## Julie Christmas
- Made of Bees and Battle of Mice; solo
- [Cult of Luna](bands/cult-of-luna.md): the collaborative album *Mariner* (2016)

## Neurot Recordings
- Neurosis' own label. Has released [Amenra](bands/amenra.md) **(verify)** and many others
