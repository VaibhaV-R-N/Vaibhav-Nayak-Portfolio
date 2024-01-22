import { scopes,oAuthClient } from "@/app/(gapi)/gapi";
export async function GET(){
    const url = oAuthClient.generateAuthUrl({
        access_type:"offline",
        scope:scopes,
        include_granted_scopes: true
    })
    return Response.json({url})
}