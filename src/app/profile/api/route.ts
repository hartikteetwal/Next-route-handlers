import { type NextRequest } from "next/server"
import { headers } from "next/headers"



// ----> type 1
// export async function GET(req: NextRequest) {
//     const requestHeaders = new Headers(req.headers)
//     console.log(requestHeaders.get("Authorization"))
//     return new Response("Fetch profile api data")
// }


// ----> type 2
export async function GET(req: NextRequest) {
    const headerList = await headers();
    console.log(headerList.get("Authorization"))
    return new Response("<h1>fetch profile api data</h1>")
}