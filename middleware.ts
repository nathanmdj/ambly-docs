import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // If the request is for the root path
  if (request.nextUrl.pathname === "/") {
    // Redirect to /docs
    return NextResponse.redirect(
      new URL("/docs/installation/cloning-repo", request.url)
    );
  }

  // Continue with the request for all other paths
  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  matcher: "/",
};
