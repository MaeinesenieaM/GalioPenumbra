console.log("WOAH!");

interface ContextMenuEntry {
    classes?: string;
    condition?: (li: JQuery<HTMLElement>) => boolean;
    callback: (li: JQuery<HTMLElement>) => void;
    group?: string;
    icon?: string;
    name: string;
}

foundry.helpers.Hooks.on("getCompendiumContextOptions", (
	app: any, 
	html: any) => { 

	console.log(app); console.log(html);
	console.log("CONTEXT")
}
);

foundry.helpers.Hooks.on("renderCompendiumDirectory", (
	app: any, 
	html: any) => { 

	console.log(app); console.log(html);
	console.log("RENDER")
}
);


console.log(Hooks)