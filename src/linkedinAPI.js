import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const COMPANY_ID = process.env.LINKEDIN_COMPANY_ID;

export async function postToLinkedIn(content, imageUrl) {
  const postData = {
    author: `urn:li:organization:${COMPANY_ID}`,
    lifecycleState: "PUBLISHED",
    specificContent: {
      "com.linkedin.ugc.ShareContent": {
        shareCommentary: { text: content },
        shareMediaCategory: imageUrl ? "IMAGE" : "NONE",
        media: imageUrl ? [{ status: "READY", originalUrl: imageUrl }] : [],
      },
    },
    visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
  };

  try {
    const response = await axios.post(
      "https://api.linkedin.com/v2/ugcPosts",
      postData,
      { headers: { Authorization: `Bearer ${ACCESS_TOKEN}`, "Content-Type": "application/json" } }
    );
    console.log("✅ Posted to LinkedIn:", response.data);
  } catch (error) {
    console.error("❌ LinkedIn API Error:", error.response.data);
  }
}
