const requestIP = require("request-ip")
export async function GET (Request){
    const ip = requestIP.getClientIp(Request) 
    return Response.json({ip})
}