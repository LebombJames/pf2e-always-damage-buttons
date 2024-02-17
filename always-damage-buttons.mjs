let damageButtonHTML = "";

Hooks.once("i18nInit", async () => {
    const DamageRoll = CONFIG.Dice.rolls.find((R) => R.name === "DamageRoll");
    const damageChatCard = await renderTemplate(DamageRoll.CHAT_TEMPLATE, { showButtons: true });

    let dummy = document.createElement("a");
    dummy.innerHTML = damageChatCard;

    damageButtonHTML = dummy.querySelector("section.damage-application").innerHTML;    
    console.log("Pf2E Always Damage Buttons | Setup complete.");
});

Hooks.on("renderChatMessage", (doc, [html], options) => {
    if (doc.isDamageRoll && !doc.isContentVisible) {
        html.querySelector("section.damage-application").innerHTML = damageButtonHTML;
    }
});
