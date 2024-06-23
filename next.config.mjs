/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "encrypted-tbn0.gstatic.com",
                protocol: "https",
                port: ""
            },
            {
                hostname: "lqevkukomzxnhmukhrcx.supabase.co",
                protocol: "https",
                port: ""
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:8080/:path*' // Proxy to Backend
            }
        ]
    }
};

export default nextConfig;
