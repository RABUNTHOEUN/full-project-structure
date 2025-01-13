// src/middleware.ts
import { NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
export function middleware() {
    // const token = request.cookies.get("token");
    

    // if (!token) {
    //     return NextResponse.redirect(new URL("/auth/login", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"], // Apply middleware to admin routes
};
