import { HStack, Text } from "@chakra-ui/react"

export default {
  title: "Save hours with JUST SHIP.",
  description: "Pay once and get life-time access",
  plans: [
    // {
    //   id: 'oss',
    //   title: 'Open Source',
    //   description: 'Basic compoents, perfect to get started.',
    //   price: 'Free',
    //   features: [
    //     {
    //       title: 'MIT License',
    //     },
    //     {
    //       title: 'Authentication (Clerk/Supabase/Magic)',
    //     },
    //     {
    //       title: 'Form (react-hook-form)',
    //     },
    //     {
    //       title: 'Modals manager',
    //     },
    //     {
    //       title: 'Hotkeys',
    //     },
    //     {
    //       title: 'Web3 components',
    //     },
    //     {
    //       title: 'And much more...',
    //     },
    //   ],
    //   action: {
    //     href: '#',
    //   },
    // },
    // {
    //   id: 'bootstrap',
    //   title: 'Bootstrap',
    //   description: 'Complete frontend stack for bootstrappers and small teams.',
    //   price: 'Free',
    //   isRecommended: true,
    //   features: [
    //     {
    //       title: 'One project',
    //     },
    //     {
    //       title: 'One developer',
    //     },
    //     {
    //       title: 'Advanced components',
    //     },
    //     {
    //       title: 'Multiple themes',
    //     },
    //     {
    //       title: 'Next.js and Electron boilerplates',
    //     },
    //     {
    //       title: 'Private discord community',
    //     },
    //     {
    //       title: '1 year of updates',
    //     },
    //     null,
    //     {
    //       title: 'Private beta access',
    //       iconColor: 'green.500',
    //     },
    //   ],
    //   action: {
    //     href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
    //   },
    // },
    {
      id: "startup",
      title: "PRE ORDER",
      description: "Unlimited license for growing teams.",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            129,-
          </Text>
          <Text>€99,-</Text>
        </HStack>
      ),
      features: [
        {
          title: "Next.js 14",
        },
        {
          title: "TypeScript",
        },
        {
          title: "Stripe payments",
        },
        {
          title: "Magic link sign up",
        },
        {
          title: "Social logins",
        },
        null,
        // {
        //   title: "Private beta access",
        //   iconColor: "green.500",
        // },
      ],
      action: {
        href: "https://buy.stripe.com/dR616tbE89GI9zi6oq",
      },
    },
  ],
}
