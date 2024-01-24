let damageButtonHTML = "";

Hooks.once("init", async () => {
    const DamageRoll = CONFIG.Dice.rolls.find((R) => R.name === "DamageRoll");
    const damageChatCard = await renderTemplate(DamageRoll.CHAT_TEMPLATE, { showButtons: true });

    let dummy = document.createElement("a");
    dummy.innerHTML = damageChatCard;

    damageButtonHTML = dummy.querySelector("section.damage-application").innerHTML;
});

Hooks.on("renderChatMessage", (doc, [html], options) => {
    if (doc.isDamageRoll && !doc.isContentVisible) {
        html.querySelector("section.damage-application").innerHTML = damageButtonHTML;
    }
});
