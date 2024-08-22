import { readdirSync } from "fs";
import { Icon } from "../index";

const vscodeIcons: string[] = [];

readdirSync("icons/vscode-icons").forEach((file) => vscodeIcons.push(file.split(".")[0]));

function vscodeIconsGeneric(name: string): Icon {
  return { [name]: { iconPath: `../icons/vscode-icons/${name}.svg` } };
}

const kawaiiconVscodeIcons: Icon = vscodeIcons.reduce((acc, curr) => {
  return { ...acc, [`${curr}`]: { iconPath: `../icons/vscode-icons/${curr}.svg` } };
}, {});

export const kawaiiconVscodeIcon = {
  ...vscodeIconsGeneric("default_file"),
  ...vscodeIconsGeneric("default_folder"),
  ...vscodeIconsGeneric("default_folder_opened"),
  ...vscodeIconsGeneric("default_root_folder"),
  ...vscodeIconsGeneric("default_root_folder_opened"),
  ...kawaiiconVscodeIcons,
};
