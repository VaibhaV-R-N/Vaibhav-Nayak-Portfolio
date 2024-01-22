import { oAuthClient } from "@/app/(gapi)/gapi"
import { cookies } from "next/headers"

export async function GET(req){
    const code =  req.nextUrl. searchParams.get("code")
    
    const respo = await oAuthClient.getToken(code)

    const access_token = respo.tokens.access_token
    const refresh_token = respo.tokens.refresh_token

    console.log(access_token,refresh_token);
    const store = cookies()
    store.set("access",access_token)
    store.set('refresh',refresh_token)

    return Response.redirect('http://localhost:3000/contact')
}