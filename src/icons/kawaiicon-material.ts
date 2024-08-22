import { readdirSync } from "fs";
import { Icon } from "../index";

const materialIcons: string[] = [];

readdirSync("icons/material-icons").forEach((file) => materialIcons.push(file.split(".")[0]));

function materialIconsGeneric(name: string): Icon {
  return { [name]: { iconPath: `../icons/material-icons/${name}.svg` } };
}

const kawaiiconMaterialIcons: Icon = materialIcons.reduce((acc, curr) => {
  return { ...acc, [`${curr}`]: { iconPath: `../icons/material-icons/${curr}.svg` } };
}, {});

export const kawaiiconMaterial = {
  ...materialIconsGeneric("file"),
  ...materialIconsGeneric("folder"),
  ...materialIconsGeneric("folder-open"),
  ...materialIconsGeneric("folder-root"),
  ...materialIconsGeneric("folder-root-open"),
  ...kawaiiconMaterialIcons,
};
