import { google } from "googleapis";

export const oAuthClient = new google.auth.OAuth2(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_SECRET,
    "http://localhost:3000/api/mailtoken"
)

export const scopes=["https://www.googleapis.com/auth/gmail.send"]
