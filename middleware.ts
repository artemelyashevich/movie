import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: '/movie/:path*'
};

export function middleware(req: NextRequest) {
    console.log('[middleware.ts] headers before:', req.headers);
    req.headers.set('x-matched-path', '/movie/[id]');
    console.log('[middleware.ts] headers after:', req.headers);
    return NextResponse.next();
}
