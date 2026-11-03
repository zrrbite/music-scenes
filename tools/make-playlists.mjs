// Generates playlist.md for each scene folder from the track lists below.
// Usage (from the repo root): node tools/make-playlists.mjs .
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2];
// [artist, track (null = whole-album pick), album, year, verify?]
const scenes = {
  quebec: ["Quebec Death Metal", "From the modern tech-prog sound back to the roots.", [
    ["Beyond Creation", "Coexistence", "The Aura", 2011],
    ["Beyond Creation", "Earthborn Evolution", "Earthborn Evolution", 2014],
    ["Beyond Creation", "Algorythm", "Algorythm", 2018, true],
    ["First Fragment", "Pantheum", "single", null, true],
    ["Augury", "Simian Cattle", "Fragmentary Evidence", 2009, true],
    ["Quo Vadis", null, "Defiant Imagination", 2004],
    ["Martyr", null, "Warp Zone", 2000],
    ["Kataklysm", "In Shadows & Dust", "Shadows & Dust", 2002],
    ["Kataklysm", "As I Slither", "Serenity in Fire", 2004, true],
    ["Despised Icon", "Furtive Monologue", "The Ills of Modern Man", 2007],
    ["Cryptopsy", "Slit Your Guts", "None So Vile", 1996],
    ["Cryptopsy", "Phobophile", "None So Vile", 1996],
    ["Gorguts", "The Erosion of Sanity", "The Erosion of Sanity", 1993],
    ["Gorguts", "Obscura", "Obscura", 1998],
    ["Gorguts", "Colored Sands", "Colored Sands", 2013],
    ["Chthe'ilist", null, "Le Dernier Crépuscule", 2016],
    ["Voivod", "Killing Technology", "Killing Technology", 1987],
    ["Voivod", "Astronomy Domine", "Nothingface", 1989],
  ]],
  "seattle-grunge": ["Seattle Grunge", "The family tree in roughly chronological order.", [
    ["Malfunkshun", "With Yo' Heart (Not Yo' Hands)", "Deep Six (compilation)", 1986, true],
    ["Green River", "Swallow My Pride", "Come on Down", 1985],
    ["Mudhoney", "Touch Me I'm Sick", "single", 1988],
    ["Mother Love Bone", "Chloe Dancer / Crown of Thorns", "Apple", 1990],
    ["Nirvana", "Negative Creep", "Bleach", 1989],
    ["Alice in Chains", "Man in the Box", "Facelift", 1990],
    ["Temple of the Dog", "Say Hello 2 Heaven", "Temple of the Dog", 1991],
    ["Temple of the Dog", "Hunger Strike", "Temple of the Dog", 1991],
    ["Pearl Jam", "Alive", "Ten", 1991],
    ["Pearl Jam", "Black", "Ten", 1991],
    ["Soundgarden", "Rusty Cage", "Badmotorfinger", 1991],
    ["Nirvana", "Smells Like Teen Spirit", "Nevermind", 1991],
    ["Alice in Chains", "Would?", "Dirt", 1992],
    ["Screaming Trees", "Nearly Lost You", "Sweet Oblivion", 1992],
    ["Melvins", "Honey Bucket", "Houdini", 1993],
    ["Nirvana", "Heart-Shaped Box", "In Utero", 1993],
    ["Soundgarden", "Black Hole Sun", "Superunknown", 1994],
    ["Alice in Chains", "Nutshell", "Jar of Flies", 1994],
    ["Mad Season", "River of Deceit", "Above", 1995],
    ["Foo Fighters", "This Is a Call", "Foo Fighters", 1995],
    ["Foo Fighters", "Everlong", "The Colour and the Shape", 1997],
    ["Foo Fighters", "My Hero", "The Colour and the Shape", 1997],
  ]],
  "swedish-metal": ["Swedish Metal", "Stockholm, Gothenburg, the progressive line, then Meshuggah's descendants.", [
    ["Entombed", "Left Hand Path", "Left Hand Path", 1990],
    ["Dismember", "Override of the Overture", "Like an Ever Flowing Stream", 1991, true],
    ["Entombed", "Wolverine Blues", "Wolverine Blues", 1993],
    ["At the Gates", "Blinded by Fear", "Slaughter of the Soul", 1995],
    ["Dark Tranquillity", "Punish My Heaven", "The Gallery", 1995],
    ["Katatonia", "Brave", "Brave Murder Day", 1996, true],
    ["In Flames", "Only for the Weak", "Clayman", 2000],
    ["Opeth", "The Drapery Falls", "Blackwater Park", 2001],
    ["Opeth", "Windowpane", "Damnation", 2003],
    ["Katatonia", "My Twin", "The Great Cold Distance", 2006],
    ["Meshuggah", "Future Breed Machine", "Destroy Erase Improve", 1995],
    ["Meshuggah", "Bleed", "obZen", 2008],
    ["Vildhjarta", null, "Måsstaden", 2011],
    ["Humanity's Last Breath", null, "Välde", 2021],
  ]],
  "west-coast": ["West Coast Death Metal", "From the Bay Area's proto-death to Vancouver's hyper-speed.", [
    ["Possessed", "The Exorcist", "Seven Churches", 1985],
    ["Possessed", "Death Metal", "Seven Churches", 1985],
    ["Dark Angel", "Darkness Descends", "Darkness Descends", 1986],
    ["Autopsy", null, "Mental Funeral", 1991],
    ["Strapping Young Lad", "All Hail the New Flesh", "City", 1997],
    ["Strapping Young Lad", "Love?", "Alien", 2005],
    ["The Faceless", "Xenochrist", "Planetary Duality", 2008],
    ["The Faceless", "Coldly Calculated Design", "Planetary Duality", 2008, true],
    ["Decrepit Birth", null, "Polarity", 2010],
    ["Fallujah", "The Flesh Prevails", "The Flesh Prevails", 2014],
    ["Rings of Saturn", null, "Lugal Ki En", 2014],
    ["Zenith Passage", null, "Solipsist", 2016],
    ["Archspire", "Drone Corpse Aviator", "Relentless Mutation", 2017],
    ["Archspire", "Bleed the Future", "Bleed the Future", 2021],
  ]],
  "east-coast": ["US East Coast Death Metal", "Florida's first wave, New York's brutality, and the technical line to Revocation.", [
    ["Death", "Zombie Ritual", "Scream Bloody Gore", 1987],
    ["Death", "Pull the Plug", "Leprosy", 1988],
    ["Morbid Angel", "Chapel of Ghouls", "Altars of Madness", 1989],
    ["Obituary", "Slowly We Rot", "Slowly We Rot", 1989],
    ["Obituary", "Chopped in Half", "Cause of Death", 1990],
    ["Suffocation", "Effigy of the Forgotten", "Effigy of the Forgotten", 1991],
    ["Immolation", "Dawn of Possession", "Dawn of Possession", 1991],
    ["Death", "Lack of Comprehension", "Human", 1991],
    ["Cannibal Corpse", "Hammer Smashed Face", "Tomb of the Mutilated", 1992],
    ["Cynic", "Veil of Maya", "Focus", 1993],
    ["Morbid Angel", "God of Emptiness", "Covenant", 1993],
    ["Death", "Crystal Mountain", "Symbolic", 1995],
    ["Suffocation", "Pierced from Within", "Pierced from Within", 1995],
    ["Dying Fetus", "Grotesque Impalement", "Destroy the Opposition", 2000, true],
    ["Immolation", null, "Close to a World Below", 2000],
    ["Revocation", "Deathless", "Deathless", 2014],
    ["Revocation", "The Outer Ones", "The Outer Ones", 2018],
  ]],
  "brutal-death": ["Brutal Death, Slam & Deathcore", "The lineage, in order. Explicit lyrics throughout.", [
    ["Suffocation", "Liege of Inveracity", "Effigy of the Forgotten", 1991],
    ["Suffocation", "Infecting the Crypts", "Effigy of the Forgotten", 1991],
    ["Devourment", "Babykiller", "Molesting the Decapitated", 1999],
    ["Dying Fetus", "Kill Your Mother, Rape Your Dog", "Destroy the Opposition", 2000, true],
    ["Aborted", "The Saw and the Carnage Done", "Goremageddon", 2003],
    ["Despised Icon", "Furtive Monologue", "The Ills of Modern Man", 2007],
    ["Whitechapel", "This Is Exile", "This Is Exile", 2008],
    ["Thy Art Is Murder", "Reign of Darkness", "Hate", 2012],
    ["Infant Annihilator", "Decapitation Fornication", "The Palpable Leprosy of Pollution", 2012, true],
    ["Cattle Decapitation", "Forced Gender Reassignment", "Monolith of Inhumanity", 2012],
    ["Cattle Decapitation", "Manufactured Extinct", "The Anthropocene Extinction", 2015],
    ["Aborted", "Retrogore", "Retrogore", 2016],
    ["Infant Annihilator", "Three Bastards", "The Elysian Grandeval Galèriarch", 2016, true],
    ["Infant Annihilator", null, "The Battle of Yaldabaoth", 2019],
    ["Lorna Shore", "To the Hellfire", "...And I Return to Nothingness (EP)", 2021],
    ["Organectomy", null, "(any release, verify)", null, true],
  ]],
  "post-metal": ["Post-Metal", "Long songs. Play loud, in order, without shuffle.", [
    ["Neurosis", "Locust Star", "Through Silver in Blood", 1996],
    ["Neurosis", "Through Silver in Blood", "Through Silver in Blood", 1996],
    ["Isis", "Weight", "Oceanic", 2002],
    ["Isis", "Carry", "Oceanic", 2002],
    ["Isis", "In Fiction", "Panopticon", 2004],
    ["Cult of Luna", null, "Somewhere Along the Highway", 2006],
    ["Cult of Luna", "Ghost Trail", "Eternal Kingdom", 2008, true],
    ["Russian Circles", "Harper Lewis", "Station", 2008],
    ["Cult of Luna", "I: The Weapon", "Vertikal", 2013],
    ["The Ocean", "Bathyalpelagic I: Impasses", "Pelagial", 2013, true],
    ["The Ocean", "Benthic: The Origin of Our Wishes", "Pelagial", 2013, true],
    ["Cult of Luna & Julie Christmas", "A Greater Call", "Mariner", 2016, true],
    ["Amenra", null, "Mass VI", 2017],
    ["The Ocean", "Permian: The Great Dying", "Phanerozoic I: Palaeozoic", 2018],
    ["Cult of Luna", "Cold Burn", "The Long Road North", 2022, true],
  ]],
  doom: ["Doom & Retro Heavy Rock", "From Sabbath to the Swedish retro wave. Ends with an hour-long riff.", [
    ["Black Sabbath", "Black Sabbath", "Black Sabbath", 1970],
    ["Black Sabbath", "Into the Void", "Master of Reality", 1971],
    ["Black Sabbath", "Children of the Grave", "Master of Reality", 1971],
    ["Pentagram", "Forever My Queen", "First Daze Here (1970s recordings)", 2002],
    ["Pentagram", "Relentless", "Relentless", 1985],
    ["Saint Vitus", "Born Too Late", "Born Too Late", 1986],
    ["Candlemass", "Solitude", "Epicus Doomicus Metallicus", 1986],
    ["Candlemass", "Bewitched", "Nightfall", 1987],
    ["Sleep", "Dragonaut", "Holy Mountain", 1992],
    ["Cathedral", "Hopkins (The Witchfinder General)", "The Carnival Bizarre", 1995],
    ["Electric Wizard", "Funeralopolis", "Dopethrone", 2000],
    ["Witchcraft", "No Angel or Demon", "Witchcraft", 2004],
    ["Witchcraft", null, "The Alchemist", 2007],
    ["Graveyard", "Ain't Fit to Live Here", "Hisingen Blues", 2011],
    ["Graveyard", "The Siren", "Hisingen Blues", 2011],
    ["Sleep", "Dopesmoker", "Dopesmoker", 2003],
  ]],
  "gothic-americana": ["Dark Folk & Gothic Americana", "The roots, Denver, Australia, and the Old World ballads.", [
    ["The Gun Club", "Sex Beat", "Fire of Love", 1981],
    ["The Gun Club", "She's Like Heroin to Me", "Fire of Love", 1981],
    ["The Birthday Party", "Release the Bats", "single", 1981, true],
    ["Nick Cave & the Bad Seeds", "The Mercy Seat", "Tender Prey", 1988],
    ["Nick Cave & the Bad Seeds", "Red Right Hand", "Let Love In", 1994],
    ["Johnny Cash", "Delia's Gone", "American Recordings", 1994],
    ["16 Horsepower", "Black Soul Choir", "Sackcloth 'n' Ashes", 1996],
    ["16 Horsepower", "Haw", "Sackcloth 'n' Ashes", 1996],
    ["Nick Cave & the Bad Seeds", "Where the Wild Roses Grow", "Murder Ballads", 1996],
    ["16 Horsepower", "Clogger", "Secret South", 2000, true],
    ["Wovenhand", null, "Consider the Birds", 2004],
    ["The Drones", "Shark Fin Blues", "Wait Long by the River and the Bodies of Your Enemies Will Float By", 2005],
    ["The Drones", "Sixteen Straws", "Wait Long by the River and the Bodies of Your Enemies Will Float By", 2005, true],
    ["The Drones", "I See Seaweed", "I See Seaweed", 2013],
    ["Wovenhand", null, "Refractory Obdurate", 2014],
    ["Chelsea Wolfe", "16 Psyche", "Hiss Spun", 2017],
    ["Emma Ruth Rundle", "Darkhorse", "On Dark Horses", 2018],
    ["Lankum", "The Wild Rover", "The Livelong Day", 2019, true],
    ["Lankum", "Go Dig My Grave", "False Lankum", 2023],
    ["David Eugene Edwards", null, "Hyacinth", 2023],
  ]],
};

const enc = (s) => encodeURIComponent(s);
for (const [folder, [title, intro, tracks]] of Object.entries(scenes)) {
  const rows = tracks.map(([a, t, al, y, v], i) => {
    const q = t ? `${a} ${t}` : `${a} ${al.replace(/\s*\(.*\)$/, "")}`;
    const links = `[Spotify](https://open.spotify.com/search/${enc(q)}) · [YouTube](https://www.youtube.com/results?search_query=${enc(q)})`;
    const track = t ? t : "*whole album / any track*";
    const album = `*${al}*${y ? ` (${y})` : ""}`;
    return `| ${i + 1} | ${a} | ${track}${v ? " **(verify)**" : ""} | ${album} | ${links} |`;
  });
  const plain = tracks.filter(([, t]) => t).map(([a, t]) => `${a} - ${t}`);
  const md = `[← ${title}](README.md)

# Playlist: ${title}

${intro}

Links open a Spotify or YouTube search for that track. **(verify)** means the track title or
album hasn't been confirmed; check it in the search results. Rows marked *whole album* are
records best heard in full, or where no single track has been picked yet.

| # | Artist | Track | Album | Listen |
|---|--------|-------|-------|--------|
${rows.join("\n")}

## Plain list for importing
Paste this into an import tool (e.g. TuneMyMusic or Soundiiz) to build a Spotify, Apple Music
or YouTube Music playlist in one go. Whole-album rows are left out.

\`\`\`text
${plain.join("\n")}
\`\`\`
`;
  writeFileSync(join(root, folder, "playlist.md"), md);
  console.log(`${folder}: ${tracks.length} entries`);
}
