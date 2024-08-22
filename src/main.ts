import { writeFile, mkdirSync } from "fs";
import { kawaiiconMaterial } from "./icons/kawaiicon-material";
import { kawaiiconBright } from "./icons/kawaiicon-official";
import { kawaiiconVscodeIcon } from "./icons/kawaiicon-vscodeicons";
import materialDark from "./definations/kawaiicon-material/materialDark";
import kawaiiconDark from "./definations/kawaiicon-official/kawaiiconDark";
import kawaiiconLight from "./definations/kawaiicon-official/kawaiiconLight";
import vscodeDark from "./definations/kawaiicon-vscodeicons/vscodeDark";

// Ensure the dist directory exists
mkdirSync("./dist", { recursive: true });

const createJsonIconFile = (filename: string, content: object): void => {
  writeFile(`./dist/${filename}`, JSON.stringify(content, null, 2), (err) => {
    if (err) {
      console.error(`Error writing to ${filename}:`, err);
    } else {
      console.log(`${filename} has been saved successfully!`);
    }
  });
};

const kawaiiconOfiicialBright = {
  hidesExplorerArrows: true,
  iconDefinitions: kawaiiconBright,
  ...kawaiiconDark,
  ...kawaiiconLight,
};

// TODO: Work on it later
// const kawaiiconOfiicialMuted = {
//   hidesExplorerArrows: true,
//   iconDefinitions: kawaiiconMuted,
//   ...kawaiiconDark,
//   ...kawaiiconLight,
// };

const kawaiicon_Material = {
  hidesExplorerArrows: false,
  iconDefinitions: kawaiiconMaterial,
  ...materialDark,
};

const kawaiicon_VscodeIcon = {
  hidesExplorerArrows: false,
  iconDefinitions: kawaiiconVscodeIcon,
  ...vscodeDark,
};

// Write each file
createJsonIconFile("icons-bright.json", kawaiiconOfiicialBright);
createJsonIconFile("icons-material.json", kawaiicon_Material);
createJsonIconFile("icons-vscodeicons.json", kawaiicon_VscodeIcon);

// TODO: Work on it later
// createJsonIconFile("icons-muted.json", kawaiiconOfiicialMuted);
