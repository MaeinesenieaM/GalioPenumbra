interface ContextMenuEntry {
	name: string;
	callback: (target: HTMLElement | typeof jQuery) => void;
	condition?: boolean;
    classes?: string;
    group?: string;
    icon?: string;
}

type GetCompendiumContextOptionsHook = (
	application: foundry.applications.sidebar.tabs.CompendiumDirectory, 
	menuItems: ContextMenuEntry[]
) => void;

foundry.helpers.Hooks.on("getCompendiumContextOptions", (
	application: any,
    menuItems: any
) => {
	//This is here so the developer can use typing.
    const typed_app = application as foundry.applications.sidebar.tabs.CompendiumDirectory;
    const typed_items = menuItems as ContextMenuEntry[];

    typed_items.push({
    	name: "ExportJavaScript",
    	callback: (target) => { console.log("YES! YES!          KILL!")}
    })
});