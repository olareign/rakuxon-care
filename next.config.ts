import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // PRD v2.0 replaced "Start a Care Business" with the productised
        // Care Business Launch Kit. Permanent so any existing links follow.
        source: "/start-a-care-business",
        destination: "/launch-kit",
        permanent: true,
      },
      {
        // Staffing has its own top-level page (PRD §5.5); keep the
        // /services/{slug} form working rather than 404ing.
        source: "/services/staffing",
        destination: "/staffing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
