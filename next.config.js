module.exports = {
  async redirects() {
    return [
      {
        source: "/nous-contacter",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/etudes/",
        destination: "/nos-etudes",
        permanent: true,
      },
      {
        source: "/etudes/etudes-tendancielles",
        destination: "/nos-etudes/BarometresInstitutionnels",
        permanent: true,
      },
      {
        source: "/etudes/les-etudes-partenaires",
        destination: "/nos-etudes/EtudesReferencementThematique",
        permanent: true,
      },
      {
        source: "/fonds-en-euros-quelle-place-demain-dans-epargne-des-francais",
        destination:
          "/nos-etudes/EtudesReferencementThematique/fonds-en-euros-quelle-place-demain-dans-l-epargne-des-francais-juin-2020",
        permanent: true,
      },
      {
        source: "/les-grandes-voix-de-lam",
        destination: "/a-propos",
        permanent: true,
      },
    ];
  },
  env: {
    customKey: "my-value",
  },
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
