# LinkedIn Bot for Content Sharing

## Overview
This project is an automated LinkedIn bot that generates and shares AI-generated content on LinkedIn at scheduled intervals. It leverages Google Generative AI, Node.js, and LinkedIn's API.

## Features
- Uses Google Generative AI to generate content.
- Automatically posts content to LinkedIn.
- Supports scheduled posting using `node-cron`.
- Configurable via environment variables.
- Can be triggered manually via GitHub Actions.

## Prerequisites
- Node.js (v18 or later)
- A LinkedIn Developer Account
- Google Generative AI API Key
- LinkedIn Access Token with required permissions

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/rahullbyte/linkedin.bot
   cd linkedin-bot
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file using `.env.example` as a reference:
   ```sh
   cp .env.example .env
   ```
   Fill in the required API keys and LinkedIn credentials.

## Configuration
### Environment Variables
Create a `.env` file and provide the following values:
```env
GOOGLE_API_KEY=your-google-api-key
LINKEDIN_ACCESS_TOKEN=your-linkedin-access-token
LINKEDIN_COMPANY_ID=your-company-id
```

## Usage
### Running Locally
To start the bot manually:
```sh
npm start
```

### Scheduled Execution
The bot uses `node-cron` to schedule automatic LinkedIn posts. The default schedule is set to run daily at 9 AM UTC.

### GitHub Actions Automation
This project includes a GitHub Actions workflow to automate LinkedIn posting.

#### Steps:
1. Add your secrets to GitHub:
   - `GOOGLE_API_KEY`
   - `LINKEDIN_ACCESS_TOKEN`
   - `LINKEDIN_COMPANY_ID`
2. The workflow runs automatically at 9 AM UTC daily.
3. You can also manually trigger it from GitHub Actions.

## License
This project is licensed under the ISC License.
