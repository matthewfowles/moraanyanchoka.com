import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Moraa Nyanchoka`,
    siteUrl: `https://moraanyanchoka.com`,
    description: "Growth Marketing, Brand Specialist & Entrepreneur",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0,
        disableCookie: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Moraa Nyanchoka",
        short_name: "Moraa Nyanchoka",
        icon: "src/images/icon.png",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#444444`,
        display: `standalone`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 70,
          formats: ["webp", "avif"],
          placeholder: "tracedSVG",
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-netlify`,
    "gatsby-plugin-robots-txt",
  ],
};

export default config;
