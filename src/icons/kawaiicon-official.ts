import { readdirSync } from "fs";
import { Icon } from "../index";

function officialIconsGeneric(name: string): Icon {
  return { [`_${name}`]: { iconPath: `../icons/kawaiicon-official/${name}.svg` } };
}

const officialIcons: string[] = [];

readdirSync("icons/kawaiicon-official").forEach((file) => officialIcons.push(file.split(".")[0]));

const kawaiiconOfficialBrightIcons: Icon = officialIcons.reduce((acc, curr) => {
  return { ...acc, [`${curr}`]: { iconPath: `../icons/kawaiicon-official/${curr}.svg` } };
}, {});

// TODO: Work on it later
// const kawaiiconOfficialMutedIcons: Icon = officialIcons.reduce((acc, curr) => {
//   return { ...acc, [`${curr}`]: { iconPath: `../icons/kawaiicon-official/${curr}_muted.svg` } };
// }, {});

export const kawaiiconBright = {
  ...officialIconsGeneric("file"),
  ...officialIconsGeneric("folder"),
  ...officialIconsGeneric("folder_open"),
  ...officialIconsGeneric("root_folder"),
  ...officialIconsGeneric("root_folder_open"),
  ...officialIconsGeneric("root_folder_light"),
  ...officialIconsGeneric("root_folder_light_open"),
  ...kawaiiconOfficialBrightIcons,
};

// TODO: Work on it later
// export const kawaiiconMuted = {
//   ...officialIconsGeneric("file"),
//   ...officialIconsGeneric("folder"),
//   ...officialIconsGeneric("folder_open"),
//   ...officialIconsGeneric("root_folder"),
//   ...officialIconsGeneric("root_folder_open"),
//   ...officialIconsGeneric("root_folder_light"),
//   ...officialIconsGeneric("root_folder_light_open"),
//   ...kawaiiconOfficialMutedIcons,
// };
