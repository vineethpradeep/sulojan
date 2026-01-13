import fs from "fs";
import path from "path";

export function getPostComments(slug) {
  const filePath = path.join(process.cwd(), "content/comments", `${slug}.md`);

  if (!fs.existsSync(filePath)) return [];

  const raw = fs.readFileSync(filePath, "utf-8");

  return raw
    .split("- name:")
    .filter(Boolean)
    .map((block, index) => ({
      id: index + 1,
      name: block.match(/^(.*)/)?.[1]?.trim() || "Anonymous",
      date: block.match(/date:(.*)/)?.[1]?.trim() || "",
      comment: block.match(/comment:(.*)/)?.[1]?.trim() || "",
      pending: true,
    }))
    .reverse();
}
