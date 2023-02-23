import core     from "@actions/core";
import fs       from "fs";

const { getInput, setOutput, info, setFailed } = core;

// variables
const releaseNotesFilePath  = getInput("RELEASE_NOTES_FILE_PATH");

let main = async () => {

    let fileContents = fs.readFileSync(releaseNotesFilePath, "utf-8");
    let version = fileContents.split(/\r?\n/)[0].split(" ")[1].split(".");

    let rvMajor = version[0] || 0;
    let rvMinor = version[1] || 0;
    let rvPatch = version[2] || 0;

    setOutput("FULL_VERSION", version.join("."));
    setOutput("MAJOR", rvMajor);
    setOutput("MINOR", rvMinor);
    setOutput("PATCH", rvPatch);
}

main().then(() => {
    info("Getting Version from Release Notes File")
})
.catch((err) => {
    setFailed(err);
});