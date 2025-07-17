"use strict";
console.log("WOAH!");
foundry.helpers.Hooks.on("getCompendiumContextOptions", (app, html) => {
    console.log(app);
    console.log(html);
    console.log("CONTEXT");
});
foundry.helpers.Hooks.on("renderCompendiumDirectory", (app, html) => {
    console.log(app);
    console.log(html);
    console.log("RENDER");
});
console.log(Hooks);
