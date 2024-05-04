import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('your-presence-here')
    console.log('Checking Auth In Middleware')
    if(currentUser) {
        return NextResponse.next()
    }
    
    if(!currentUser) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
   


}
export const config = {
    matcher: [
        
        '/account', 
    ],
  }