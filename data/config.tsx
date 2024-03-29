import { Button } from "@chakra-ui/react"
import { Link } from "@saas-ui/react"
import { NextSeoProps } from "next-seo"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import { Logo } from "./logo"

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Just Ship",
    description: "The SaaS boilerplate to just ship your product.",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },

      {
        label: "Demo",
        href: "https://demo.justship.pro/en",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: <>© Copyright 2024 Just Ship. All rights reserved.</>,
    links: [
      {
        href: "mailto:contact@justship",
        label: "Contact",
      },
      {
        href: "https://twitter.com/mans_js",
        label: <FaTwitter size="14" />,
      },
    ],
  },
  signup: {
    title: "Just Ship",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
}

export default siteConfig
