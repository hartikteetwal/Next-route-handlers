import { type NextRequest } from "next/server"
import { headers,cookies } from "next/headers"



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

    // ---> 1st approach use cookie without builtin cookies funtion 
    const theme = req.cookies.get("theme")
    console.log(theme)
    
    
    // ---> 1st approach use cookie with builtin cookies funtion 
    const cookieStore = await cookies()
    cookieStore.set("resultPerPage","20")
    console.log(cookieStore.get("resultPerPage"))
    // console.log()
    return new Response("<h1>fetch profile api data</h1>",{
        headers:{
            "content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}

