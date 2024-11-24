// ffmpeg -i "$inputFilePath" -codec:a libmp3lame -qscale:a 2 "$outputFilePath"
import { $ } from "bun";
const file = Bun.argv[2];
const level = Bun.argv[3] || "2";

const parsed = parseInt(level);

if (isNaN(parsed)) {
  throw new Error("Invalid level");
}
if (parsed < 0 || parsed > 9) {
  throw new Error("Level must be between 0 and 9");
}


const fileName = file.slice(0, file.lastIndexOf("."));
const ext = file.slice(file.lastIndexOf("."));
const outputFilePath = `${fileName}_compressed${ext}`

await $`ffmpeg -i "${file}" -codec:a libmp3lame -qscale:a ${level} "${outputFilePath}"`;
