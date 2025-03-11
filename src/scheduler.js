import cron from "node-cron";
import fs from "fs";
import { generatePost, generateImage } from "./src/aiGenerator.js";
import { postToLinkedIn } from "./src/linkedinAPI.js";

const INDUSTRY = "Tech & AI";

cron.schedule("0 9 * * *", async () => {
  console.log("⏳ Generating AI content...");
  
  const content = await generatePost(INDUSTRY);
  const imageUrl = await generateImage(INDUSTRY);
  
  console.log("📝 Generated Post:", content);
  console.log("📸 Generated Image:", imageUrl);

  await postToLinkedIn(content, imageUrl);

  fs.appendFileSync("posts.json", JSON.stringify({ content, imageUrl, time: new Date() }) + "\n");
});

console.log("🕒 LinkedIn AI Scheduler is running...");
