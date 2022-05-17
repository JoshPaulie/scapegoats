"use strict";

const task_descriptions = {
    "10WildyBossKills": "Kill 10 <a href='https://oldschool.runescape.wiki/w/Wilderness#Bosses' target='_blank'>Wilderness Bosses</a>",
    "500kLootKey": "Earn a PK <a href='https://oldschool.runescape.wiki/w/Loot_key' target='_blank'>Loot Key</a> worth 500k GP or more",
    "10MedClue": "Complete 10 Medium+ <a href='https://oldschool.runescape.wiki/w/Clue_scroll' target='_blank'>Clue Scrolls</a>",
    "1mItemFlip": "<a href='https://oldschool.runescape.wiki/w/Merchanting' target='_blank'>Flip</a> 1 item on the Grand Exchange for a profit of 1m+",
    "SkillingPet": "Earn any <a href='https://oldschool.runescape.wiki/w/Pet#Skilling_pets' target='_blank''>skilling pet</a>",

    "2CurvedBones": "Get 2 <a href='https://oldschool.runescape.wiki/w/Curved_bone' target='_blank'>curved bone</a> drop",
    "10QP": "Earn 10 additional Quest Points (as a team)",
    "50SlayerBossKC": "Get 50 <a href='https://oldschool.runescape.wiki/w/Boss#Slayer_bosses' target='_blank'>Slayer Boss</a> kills",
    "GnomeScarfDrop": "Get a <a href='https://oldschool.runescape.wiki/w/Gnome_scarf' target='_blank'>Gnome Scarf</a> drop",
    "WildyBossDrop": "Get any unique <a href='https://oldschool.runescape.wiki/w/Wilderness#Bosses' target='_blank'>Wilderness Boss</a> drop",

    "50VulkZulrah": "Get 50 <a href='https://oldschool.runescape.wiki/w/Vorkath' target='_blank'>Vorkath</a> and/or <a href='https://oldschool.runescape.wiki/w/Zulrah' target='_blank'>Zulrah</a> KC ",
    "CrawlingHand": "Get a <a href='https://oldschool.runescape.wiki/w/Crawling_hand_(item)' target='_blank'>crawling hand</a> drop",
    "500kRunecraft": "Earn 500k Runecrafting Experience",
    "MedCaskTroll": "Be rewarded with a Med+ Casket that's worth LESS than 5k GP",
    "OborBryo": "Get a <a href='https://oldschool.runescape.wiki/w/Hill_giant_club' target='_blank'>Obor (Hill Giant) Club</a> or <a href='https://oldschool.runescape.wiki/w/Bryophyta%27s_essence' target='_blank'>Bryophyta's essence</a> drop",

    "SkillingOutfit": "Complete a full <a href='https://oldschool.runescape.wiki/w/Skilling_equipment#List_of_outfits' target='_blank'>skilling outfit</a>", 
    "MudSkipperDrops": "Get a <a href='https://oldschool.runescape.wiki/w/Mudskipper_hat' target='_blank'>Mudskipper hat</a> and <a href='https://oldschool.runescape.wiki/w/Flippers' target='_blank'>flippers</a> drops",
    "1stTimeFirecape": "First time Firecape",
    "PVMPet": "Earn any <a href='https://oldschool.runescape.wiki/w/Pet#Boss_pets' target='_blank'>PvM Pet</a>",
    "GWDrop": "Any unique drop from any of the  <a href='https://oldschool.runescape.wiki/w/Godwars' target='_blank'>God Wars Dungeon</a> bosses.\
    <br><br>\
    Unique tables:\
    <a href='https://oldschool.runescape.wiki/w/Kree%27arra#Uniques' target='_blank'>Kree'arra</a>,\
    <a href='https://oldschool.runescape.wiki/w/General_Graardor#Uniques' target='_blank'>General Graardor</a>,\
    <a href='https://oldschool.runescape.wiki/w/Commander_Zilyana#Uniques' target='_blank'>Commander Zilyana</a>,\
    <a href='https://oldschool.runescape.wiki/w/K%27ril_Tsutsaroth#Uniques' target='_blank'>Ril Tsutsaroth</a>,\
    <a href='https://oldschool.runescape.wiki/w/Nex#Uniques' target='_blank'>Nex</a>",

    "BarrowDrop": "Loot any unique <a href='https://oldschool.runescape.wiki/w/Barrows' target='_blank'>Barrows</a> piece",
    "DSpearOrLeftShield": "Get a <a href='https://oldschool.runescape.wiki/w/Dragon_spear' target='_blank'>Dragon Spear</a> or the <a href='https://oldschool.runescape.wiki/w/Shield_left_half' target='_blank'>Left Shield Halves</a>",
    "500kAgility": "Earn 500k Agility Experience",
    "TemporossDrop": "Catch any of the following Tempoross uniques: \
    <a href='https://oldschool.runescape.wiki/w/Fish_barrel' target='_blank'>Fish Barrel</a>,\
    <a href='https://oldschool.runescape.wiki/w/Tackle_box' target='_blank'>Tackle Box</a>,\
    <a href='https://oldschool.runescape.wiki/w/Big_harpoonfish' target='_blank'>Big harpoonfish</a>,\
    <a href='https://oldschool.runescape.wiki/w/Tome_of_water#Empty' target='_blank'>Tome of water</a>,\
     or <a href='https://oldschool.runescape.wiki/w/Tiny_tempor' target='_blank'>Tiny Tempor</a>",
    "500kHunter": "Earn 500k Hunter Experience",
}; 

const taskInfoBox = document.getElementById("task-info");

for (const [task, description] of Object.entries(task_descriptions)) {
    document.getElementById(task).addEventListener("click", () => {
        taskInfoBox.innerHTML = description;
    });
}
