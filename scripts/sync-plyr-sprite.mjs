/**
 * Copies Plyr's icon sprite into `public/` so the audio player loads its
 * icons from our own domain. Plyr otherwise fetches the sprite from its
 * CDN at runtime, and the package does not export the file for bundling.
 *
 * Runs automatically before `npm run dev` and `npm run build`.
 */
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "node_modules", "plyr", "dist", "plyr.svg");
const destination = join(root, "public", "assets", "plyr.svg");

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
