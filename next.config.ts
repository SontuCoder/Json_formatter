import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/sontucoder/**",
            },
        ],
    },
};

export default nextConfig;