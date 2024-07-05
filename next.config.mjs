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
            },
            {
                hostname: "*",
                protocol: "https",
                port: ""
            }
        ]
    },
};

export default nextConfig;
