import { google } from "googleapis";

export const oAuthClient = new google.auth.OAuth2(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_SECRET,
    "https://vaibhav-nayak-portfolio.vercel.app/api/mailtoken"
)

export const scopes=["https://www.googleapis.com/auth/gmail.send"]
