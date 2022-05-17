"use strict";

const task_descriptions = {
    "10WildyBoss": "Huh?",
    "500kLootKey": "Earn a PK Loot Key worth 500k GP or more!",
    // "10MedClue": "",
    // "1mItemFlip": "",
    // "SkillingPet": "",
    // "2CarvedBones": "",
    // "10QP": "",
    // "50SlayerBossKC": "",
    // "GnomeScarfDrop": "",
    // "WildyBossDrop": "",
    // "50VulkZulrah": "",
    // "CrawlingHand": "",
    // "500kRunecraft": "",
    // "MedCaskTroll": "",
    // "OborBryo": "",
    // "SkillingOutfit": "",
    // "MudSkipperDrops": "",
    // "1stTimeFirecape": "",
    // "PVMPet": "",
    // "GWDrop": "",
    // "BarrowDrop": "",
    // "LeftSpearOrLeftShield": "",
    // "500kAgility": "",
    // "TemporossDrop": "",
    // "500kHuner": "",
}; 

const taskInfoBox = document.getElementById("task-info");

for ([task, description] of Object.entries(task_descriptions)) {
    document.getElementById(task).addEventListener("click", () => {
        taskInfoBox.innerHTML = description;
    });
}
