// Function to create the content for each deck
function displayDeckContent(deck) {
    let content = '';

    if (deck === 'kaito-pair') {
        content = `
        <aside>
            <h2>Evil★Twin the Kaito Pair</h2>
        </aside>
 <main>
        <section id="hero">
            <div class="hero-content">
                <img src="images/TTD_CD_DB.png" alt="The Ur-dragon Card Art">
                <div class="deck-info">
                    <h2>Main Deck</h2>
                    <h3>Creatures</h3>
                    <ul>
                        <li>The Ur-Dragon</Ur-Dragon></li>
                        <li>Scourge of Valkas</li>
                        <li>Miirym, Sentinel Wyrm</li>
                        <li>Tiamat</li>
                        <li>Earthquake Dragon</li>
                        <li>Ancient Silver Dragon</li>
                        <li>Ancient Bronze Dragon</li>
                        <li>Ancient Brass Dragon</li>
                        <li>Ancient Gold Dragon</li>
                        <li>Deathbringer Regent</li>
                        <li>Dragonmaster Outcast</li>
                        <li>Dragonlord's Servant</li>
                        <li>Humble Defector</li>
                        <li>Ilysian Caryatid</li>
                        <li>Korlessa, Scale Singer</li>
                        <li>Dragonspeaker Shaman</li>
                        <li>Dragon Turtle</li>
                        <li>Patron of the Arts</li>
                        <li>Rivaz of the Claw</li>
                        <li>Ambitious Dragonborn</li>
                        <li>Blade Historian</li>
                        <li>Ebondeath, Dracolich</li>
                        <li>Kyodai, Soul of Kamigawa</li>
                        <li>Adult Gold Dragon</li>
                        <li>Goldspan Dragon</li>
                        <li>Lozhan Dragons' Legacy</li>
                        <li>Rith, Liberated Primeval</li>
                        <li>Thundermaw Hellkite</li>
                        <li>Sunscorch Regent</li>
                        <li>Twinflame Tyrant</li>
                        <li>Wrathful Red Dragon</li>
                        <li>Two-Headed Hellkite</li>
                        <li>Ziatora, the Incinerator</li>
                        <li>Drakuseth, Maw of Flames</li>
                        <li>Morophon, the Boundless</li>
                        <li>Utvara Hellkite</li>

                    </ul>
                    <h3>Sorceries</h3>
                    <ul>
                        <li>Crux of Fate</li>
                        <li>Majestic Genesis</li>
                        <li>Cultivate</li>
                        <li>Explosive Vegitation</li>
                        <li>Eerie Ultimatum</li>
                        <li>Migration Path</li>
                        <li>Rampant Growth</li>
                        <li>VandalBlast</li>
                        <li>Fearsome Awakening</li>
                    </ul>
                    <h3>Enchantments</h3>
                    <ul>
                        <li>Temur Asceendancy</li>
                        <li>Frontier Siege</li>
                        <li>Maelstrom Nexus</li>
                    </ul>
                    <h3>Artifacts</h3>
                    <ul>
                        <li>Sol Ring</li>
                        <li>Arcane Signet</li>
                        <li>Orb of Dragonkind</li>
                        <li>Carnelian Orb of Dragonkind</li>
                        <li>Jade Orb of Dragonkind</li>
                        <li>Lapis Orb of Dragonkind</li>
                        <li>Monster Manual // Zoological Study</li>
                        <li>Chromatic Lantern</li>
                        <li>Urza's Incubator</li>
                        <li>Herald's Horn</li>
                        <li>Commander's Sphere</li>
                        <li>Dragon's Hoard</li>
                        <li>Mithril Coat</li>
                    </ul>
                        <h3>Instants</h3>
                    <ul>
                        <li>Magmaquake</li>
                        <li>Wild Magic Surge</li>
                        <li>Foul-Tongue Invocation</li>
                        <li>Predator's Rapport</li>
                        <li>Spit Flame</li>
                        <li>Your Temple Is Under Attacke</li>
                        <li>Draconic Lore</li>

                    </ul>
                    <h3>Lands</h3>
                    <ul>
                        <li>Cinder Glade</li>
                        <li>Command Tower</li>
                        <li>6x Forest</li>
                        <li>Haven of the Spirit Dragon</li>
                        <li>3x Island</li>
                        <li>Jungle Shrine</li>
                        <li>Manor Gate</li>
                        <li>8x Mountain</li>
                        <li>Mystic Monastary</li>
                        <li>Opulent Palace</li>
                        <li>Path of Ancestry</li>
                        <li>3x Plains</li>
                        <li>Savage Lands</li>
                        <li>3x Swamp</li>
                        <li>Temple of the Dragon Queen</li>
                    </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_KP_Secret_Password.png" alt="Secret Password"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_KP_Evil★Twins_Ki-sikil & Lil-la.png" alt="Evil★Twins Ki-sikil & Lil-la"></h3>
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_KP_Evil★Twin_Challenge.png" alt="Evil★Twin Challenge"></h3>
                </div>
            </section>
        </main>`;
    } else if (deck === 'eldlich-conqueror') {
        content = `
        <aside>
        <h2>Eldlich the Conqueror</h2>
    </aside>
    <main>
        <section id="hero">
            <div class="hero-content">
                <img src="images/TTD_CD_DB.png" alt="Marchesa, the Black Rose Card">
                <div class="deck-info">
                    <h2>Main Deck</h2>
                    <h3>Creatures</h3>
                    <ul>
                        <li>Marchesa, the Black Rose</li>
                        <li>Atsushi, the Blazing Sky</li>
                        <li>Bloodflow Connoisseur</li>
                        <li>Captivating Crew</li>
                        <li>Carrion Feeder</li>
                        <li>Dockside Extortionist</li>
                        <li>Drillworks Mole</li>
                        <li>Elder Brain</li>
                        <li>Empress Galina</li>
                        <li>Flayer of the Hatebound</li>
                        <li>Grim Haruspex</li>
                        <li>Grim Hireling</li>
                        <li>Herald of Secret Streams</li>
                        <li>Imperial Recruiter</li>
                        <li>Iron Apprentice</li>
                        <li>Junji, the Midnight Sky</li>
                        <li>Kardur, Doomscourge</li>
                        <li>Lord of the Void</li>
                        <li>Lord Xander, the collector</li>
                        <li>Opposition Agent</li>
                        <li>Pitiless Plunderer</li>
                        <li>Sepulchral Primordial</li>
                        <li>Sower of Temptation</li>
                        <li>Warren Souldtrader</li>
                        <li>Yawgmoth, Thran Physician</li>
                        <li>Zealous Conscripts</li>
                    </ul>
                    <h3>PlanesWalkers</h3>
                    <ul>
                        <li>Tevesh Szat, Doom of Fools</li>
                    </ul>
                    <h3>Sorceries</h3>
                    <ul>
                        <li>Act of Treason</li>
                        <li>Blasphemous Act</li>
                        <li>Diabolic Tutor</li>
                        <li>Dread Return</li>
                        <li>Insurrection</li>
                        <li>Mark of Mutiny</li>
                        <li>Mass Mutiny</li>
                        <li>Mob Rule</li>
                        <li>Teachings of the Archaics</li>
                        <li>Toxic Deluge</li>
                        <li>Worst Fears</li>
                    </ul>
                    <h3>Enchantments</h3>
                    <ul>
                        <li>Chamber of Manipulation</li>
                        <li>Goblin Bombardment</li>
                        <li>Grave Betrayal</li>
                        <li>Leyline of Anticipation</li>
                        <li>Rhystic Study</li>
                        <li>Sneak Attack</li>
                        <li>Thran Vigil</li>
                        <li>Unspeakable Symbol</li>
                        <li>Witness Protection</li>
                    </ul>
                    <h3>Artifacts</h3>
                    <ul>
                        <li>Andúril, Narsil Reforged</li>
                        <li>Arcane Signet</li>
                        <li>Ashnod's Altar</li>
                        <li>Chromatic Lantern</li>
                        <li>Commander's Sphere</li>
                        <li>Dimir Signet</li>
                        <li>Fellwar Stone</li>
                        <li>Sol Ring</li>
                        <li>Swiftfoot Boots</li>
                        <li>The Golden Throne</li>
                        <li>The Ozolith</li>
                        <li>Vedalken Orrery</li>
                    </ul>
                        <h3>Instants</h3>
                    <ul>
                        <li>Act of Aggression</li>
                        <li>Counterspell</li>
                        <li>Mystic Reflection</li>
                        <li>Negate</li>
                        <li>Village Rites</li>
                    </ul>
                    <h3>Lands</h3>
                    <ul>
                        <li>Crumbling Necropolis</li>
                        <li>Command Tower</li>
                        <li>Exotic Orchard</li>
                        <li>Fabled Passage</li>
                        <li>4x Island</li>
                        <li>Hall of Oracles</li>
                        <li>High Market</li>
                        <li>7x Mountain</li>
                        <li>Izzet Guildgate</li>
                        <li>Luxury Suite</li>
                        <li>Morphic Pool</li>
                        <li>Nesting Grounds</li>
                        <li>Opal Palace</li>
                        <li>7x Swamp</li>
                        <li>Phyrexian Tower</li>
                        <li>Reflecting Pool</li>
                        <li>Sea Gate</li>
                        <li>Shivan Reef</li>
                        <li>Smoldering Marsh</li>
                        <li>Sulfurous Springs</li>
                        <li>Sunken Hollow</li>
                        <li>Thriving Bluff</li>
                    </ul>
                </div>
            </div>
        </section>
        <aside>
            <h2>Highlight Cards</h2>
        </aside>
        <section id="features">
            <div class="feature">
                <h3><img src="images/TTD_EC_Cursed_Eldland.png" alt="Cursed Eldland"></h3>

            </div>
            <div class="feature">
                <h3><img src="images/TTD_EC_Eldlich_the_Golden_Lord.png" alt="Eldlich the Golden Lord"></h3>

            </div>
            <div class="feature">
                <h3><img src="images/TTD_EC_Eldlixir_of_Scarlet_Sanguine.png" alt="Eldlixir of Scarlet Sanguine"></h3>

            </div>
        </section>
    </main>
</body>
</html>
`;
    } else if (deck === 'cyber-dragon') {
        content = `
        <aside>
            <h2>Decisive Strike Cyber Dragon</h2>
        </aside>
    <main>
        <section id="hero">
            <div class="hero-content">
                <img src="images/TTD_CD_DB.png" alt="Zimone, Paradox Sculptor Card">
                <div class="deck-info">
                    <h2>Main Deck</h2>
                    <h3>Creatures</h3>
                    <ul>
                        <li>Zimone, Paradox Sculptor</li>
                        <li>Aegis Turtle</li>
                        <li>Burnished Hart</li>
                        <li>Clinquant Skymage</li>
                        <li>Deepglow Skate</li>
                        <li>Drake Hatcher</li>
                        <li>Dreamtide Whale</li>
                        <li>Evolution Sage</li>
                        <li>Grappling Kraken</li>
                        <li>Herald of Secret Streams</li>
                        <li>Homunculus Horde</li>
                        <li>Kiora's Follower</li>
                        <li>Koma, World-Eater</li>
                        <li>Llanowar Elves</li>
                        <li>Pir, Imaginative Rascal</li>
                        <li>Quilled Greatwurm</li>
                        <li>Reclamation Sage</li>
                        <li>Scrawling Crawler</li>
                        <li>Sire of Seven Deaths</li>
                        <li>Spinner of Souls</li>
                        <li>Tatyova, Benthic Druid</li>
                        <li>Toothy, Imaginary Friend</li>
                        <li>Treetop Snarespinner</li>
                        <li>Tribute Mage</li>
                        <li>Twenty-Toed Toad</li>
                        <li>Vorel of the Hull Clade</li>
                        <li>Wildwood Scourge</li>
                    </ul>
                    <h3>PlanesWalkers</h3>
                    <ul>
                        <li>Tamiyo, Compleated Sage</li>
                    </ul>
                    <h3>Sorceries</h3>
                    <ul>
                        <li>Bushwhack</li>
                        <li>Felling Blow</li>
                        <li>Genesis Wave</li>
                        <li>Grow from the Ashes</li>
                        <li>Lunar Insight</li>
                        <li>Self-Reflection</li>
                    </ul>
                    <h3>Enchantments</h3>
                    <ul>
                        <li>Doubling Season</li>
                        <li>Garruk's Uprising</li>
                        <li>Imprisoned in the Moon</li>
                        <li>Omniscience</li>
                        <li>Simic Ascendancy</li>
                        <li>Sphinx's Tutelage</li>
                        <li>Sylvan Scavenging</li>
                        <li>Witness Protection</li>
                    </ul>
                    <h3>Artifacts</h3>
                    <ul>
                        <li>Arcane Signet</li>
                        <li>Commander's Sphere</li>
                        <li>Everflowing Chalice</li>
                        <li>Ichormoon Gauntlet</li>
                        <li>Sol Ring</li>
                        <li>Swiftfoot Boots</li>
                        <li>Smokestack</li>
                        <li>The Millennium Calendar</li>
                    </ul>
                        <h3>Instants</h3>
                    <ul>
                        <li>Aetherize</li>
                        <li>Counterspell</li>
                        <li>An Offer You Can't Refuse</li>
                        <li>Essence Capture</li>
                        <li>Essence Scatter</li>
                        <li>Fleeting Distraction</li>
                        <li>Inspiring Call</li>
                        <li>Snakeskin Veil</li>
                        <li>Think Twice</li>
                    </ul>
                    <h3>Lands</h3>
                    <ul>
                        <li>Command Tower</li>
                        <li>Evolving Wilds</li>
                        <li>15x Forest</li>
                        <li>Rogue's Passage</li>
                        <li>22x Island</li>
                        <li>Thronwood Falls</li>
                    </ul>
                    </div>
                </div>
            </section>
            <aside>
                <h2>Highlight Cards</h2>
            </aside>
            <section id="features">
                <div class="feature">
                    <h3><img src="images/TTD_CD_Power_Bond.png" alt="Power_Bond"></h3>
    
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_CD_Cyber_End_Dragon.png" alt="Cyber End Dragon"></h3>
    
                </div>
                <div class="feature">
                    <h3><img src="images/TTD_CD_Infinite_Impermanence.png" alt="Infinite Impermanence"></h3>
    
                </div>
            </section>
        </main>
    </body>
    </html>
    `;
    }

    // Update the main content area with the selected deck's content
    document.getElementById('content').innerHTML = content;
}

// Event listeners for each deck link
document.getElementById('kaito-pair').addEventListener('click', function(e) {
    e.preventDefault();
    displayDeckContent('kaito-pair');
});

document.getElementById('eldlich-conqueror').addEventListener('click', function(e) {
    e.preventDefault();
    displayDeckContent('eldlich-conqueror');
});

document.getElementById('cyber-dragon').addEventListener('click', function(e) {
    e.preventDefault();
    displayDeckContent('cyber-dragon');
});
document.addEventListener("DOMContentLoaded", () => {
    // Function to change colors based on clicked card
    function changeColor(cardType) {
        const body = document.body;

        // Remove existing color classes
        body.classList.remove("color-cyber-dragon", "color-eldlich", "color-kaito-pair");

        // Add new color class based on the clicked card
        if (cardType === 'Cyber Dragon') {
            body.classList.add("color-cyber-dragon");
        } else if (cardType === 'Eldlich') {
            body.classList.add("color-eldlich");
        } else if (cardType === 'Kaito Pair') {
            body.classList.add("color-kaito-pair");
        }
    }

    // Event listeners for membership cards
    const cyberDragonCard = document.getElementById("cyber-dragon-card");
    const eldlichCard = document.getElementById("eldlich-card");
    const kaitoPairCard = document.getElementById("kaito-pair-card");

    if (cyberDragonCard) {
        cyberDragonCard.addEventListener("click", () => changeColor('Cyber Dragon'));
    }

    if (eldlichCard) {
        eldlichCard.addEventListener("click", () => changeColor('Eldlich'));
    }

    if (kaitoPairCard) {
        kaitoPairCard.addEventListener("click", () => changeColor('Kaito Pair'));
    }
});
