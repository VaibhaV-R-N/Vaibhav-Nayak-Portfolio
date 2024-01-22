import { google } from "googleapis"
import { oAuthClient } from "@/app/(gapi)/gapi"
import { cookies } from "next/headers"

const generateMessage= (subject,Message)=>{
    const payload = [
        'To: vaibhavnayak243@gmail.com',
        'Content-Type: text/plain; charset=UTF-8',
        'MIME-Version: 1.0',
        `Subject: ${subject}`,
        '',
        Message
    ].join('\n')

    return Buffer.from(payload).toString('base64')
}


export async function POST(req){
    const body = await req.json()
    const store = cookies();

    oAuthClient.setCredentials({
        access_token:store.get("access").value,
        refresh_token:store.get("refresh").value
    })


    const gmail = google.gmail({
        version:'v1',
        auth:oAuthClient
    })


    const {subject,Message} = body
    let mailResponse = {}
    try {
         mailResponse = gmail.users.messages.send({
            userId:'me',
            resource:{
                raw:generateMessage(subject,Message)
            }
        })
    } catch (error) {
        mailResponse = error
    }

    return Response.json(mailResponse)

}