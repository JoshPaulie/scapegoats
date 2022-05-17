"use strict";

const task_descriptions = {
    "10WildyBossKills": "10 unique drops from any <a href='https://oldschool.runescape.wiki/w/Wilderness#Bosses target='_blank''>Wilderness Boss</a>",
    "500kLootKey": "Earn a PK Loot Key worth 500k GP or more",
    "10MedClue": "Complete 10 Medium+ Clue Scrolls",
    "1mItemFlip": "Flip 1 item on the Grand Exchange for a profit of 1m+",
    "SkillingPet": "Earn any <a href='https://oldschool.runescape.wiki/w/Pet#Skilling_pets target='_blank''>skilling pet</a>",

    "2CarvedBones": "Get a <a href='https://oldschool.runescape.wiki/w/Curved_bone' target='_blank'>curved bone</a> drop",
    "10QP": "Earn 10 additional Quest Points",
    "50SlayerBossKC": "Get 50 <a href='https://oldschool.runescape.wiki/w/Boss#Slayer_bosses' target='_blank'>Slayer Boss</a> kills",
    "GnomeScarfDrop": "Get a <a href='https://oldschool.runescape.wiki/w/Gnome_scarf' target='_blank'>Gnome Scarf</a> drop",
    "WildyBossDrop": "Get any unique <a href='https://oldschool.runescape.wiki/w/Wilderness#Bosses' target='_blank'>Wilderness Boss</a> drop",

    "50VulkZulrah": "Get 50 Vorkath OR  ",
    "CrawlingHand": "",
    "500kRunecraft": "Earn 500k Runecrafting Experience",
    "MedCaskTroll": "Be rewarded with a Med+ Casket that's worth LESS than 5k GP",
    "OborBryo": "Get a <a href='https://oldschool.runescape.wiki/w/Hill_giant_club' target='_blank'>Obor (Hill Giant) Club</a> OR <a href='https://oldschool.runescape.wiki/w/Bryophyta%27s_essence' target='_blank'>Bryophyta's essence</a> drop",

    "SkillingOutfit": "Earn any full <a href='https://oldschool.runescape.wiki/w/Skilling_equipment#List_of_outfits' target='_blank'>skilling outfit</a>", 
    "MudSkipperDrops": "Get a Mudskipper <a href='https://oldschool.runescape.wiki/w/Mudskipper_hat' target='_blank'>hat</a> AND <a href='https://oldschool.runescape.wiki/w/Flippers' target='_blank'>flippers</a> drops",
    "1stTimeFirecape": "First time Firecape",
    "PVMPet": "Earn any <a href='https://oldschool.runescape.wiki/w/Pet#Boss_pets' target='_blank'>PvM Pet</a>",
    "GWDrop": "Any <a href='https://oldschool.runescape.wiki/w/Pet#Boss_pets' target='_blank'>God Wars Dungeon</a> drop",

    "BarrowDrop": "Loot any unique <a href='https://oldschool.runescape.wiki/w/Barrows' target='_blank'>Barrows</a> piece",
    "LeftSpearOrLeftShield": "",
    "500kAgility": "",
    "TemporossDrop": "",
    "500kHuner": "",
}; 

const taskInfoBox = document.getElementById("task-info");

for (const [task, description] of Object.entries(task_descriptions)) {
    document.getElementById(task).addEventListener("click", () => {
        taskInfoBox.innerHTML = description;
    });
}
