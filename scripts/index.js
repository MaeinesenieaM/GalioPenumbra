"use strict";
foundry.helpers.Hooks.on("getCompendiumContextOptions", (application, menuItems) => {
    //This is here so the developer can use typing.
    const typed_app = application;
    const typed_items = menuItems;
    typed_items.push({
        name: "ExportJavaScript",
        callback: (target) => { console.log("YES! YES!          KILL!"); }
    });
});
