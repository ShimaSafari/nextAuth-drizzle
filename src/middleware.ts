
import { isAuthenticated } from "./lib/jwtTokenControls"

// Limit the middleware to paths starting with `/api/`
// matcher: ['/about/:path*', '/dashboard/:path*'],
// export { auth as middleware } from "@/auth"
export const config = {
    matcher: '/api/v1/:function*'
}

export async function middleware(request: any) {
    const result = await isAuthenticated(request)

    if (!result) {
        return Response.json({ success: false, message: 'Invalid token. Paths starting with `/api/v1/`' }, { status: 401 })
    }
}