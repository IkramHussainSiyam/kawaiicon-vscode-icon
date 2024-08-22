import fileExtensions from "./fileExtensions";
import fileNames from "./fileNames";
import languageIds from "./languageIds";

export default {
  light: {
    file: "_file_light",
    folder: "_folder_light",
    folderExpanded: "_folder_light_open",
    rootFolder: "_root_folder_light",
    rootFolderExpanded: "_root_folder_light_open",
    fileExtensions,
    fileNames: { ...fileNames },
    languageIds,
  },
};
