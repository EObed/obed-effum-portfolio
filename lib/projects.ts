import type IProject from "@/types/IProject"

export const projects: IProject[] = [
    {
        slug: "trendipay-api-portal",
        title: "TrendiPay API Portal",
        images: ["/images/projects/portal1.png", "/images/projects/portal2.png", "/images/projects/portal3.png", "/images/projects/portal4.png"],
        description:
            "A web app for users of the TrendiPay API to monitor their transactions and receive real-time analytics. The app also allows these users to revoke and regenerate API keys. The app also allows TrendiPay admins to view transactions and analytics on all their users. The app is also able" +
            " to detect suspected fraudulent transactions and display them to admins in an intuitive way to aid admins to take the necessary actions",
        techStack: ["Next.js", "Socket.io", "Tailwind", "Tanstack Query"],
    },
    {
        slug: "dispursa",
        title: "Dispursa",
        images: ["/images/projects/dispursa1.png", "/images/projects/dispursa2.png", "/images/projects/dispursa3.png", "/images/projects/dispursa4.png"],
        description:
            "A web app for making bulk disbursements powered by the TrendiPay API. Users can choose to either enter account details of multiple " +
            "recipients or upload a CSV file containing the account details of the recipients and disburse fund to these recipients. Users can also choose to schedule payments, " +
            "a feature ideal for businesses who would want a simple and seamless solution to handle salary payment to staff among other use cases.",
        techStack: ["Next.js", "Axios", "Socket.io", "Tailwind", "Zustand"],
        link: "https://dispursa.com",
    },
    {
        slug: "trendicheckout",
        title: "TrendiCheckout",
        images: ["/images/projects/checkout1.png", "/images/projects/checkout2.png", "/images/projects/checkout3.png", "/images/projects/checkout4.png"],
        description:
            "A checkout system for businesses and individuals who want to receive payments via mobile money, bank or cards. Users are given terminals that can be accessed via links or custom QR codes that they can share with customers to facilitate payments." +
            " Ideal for e-commerce platforms, restaurants, clubs and any other businesses that receive payments",
        techStack: ["Next.js", "Fetch API", "Socket.io", "Tailwind", "Tanstack Query"],
        link: "https://checkout.trendipay.com",
    },
    {
        slug: "merchant-profiling-system",
        title: "Merchant Profiling System",
        images: ["/images/projects/mps1.png", "/images/projects/mps2.png", "/images/projects/mps3.png", "/images/projects/mps4.png"],
        description:
            "A web app for handling onboarding and KYC processes for individuals and businesses that want to use the TrendiPay API. This app allows various departments of" +
            " TrendiPay Admins (such as finance, support and legal) to review KYC documentation submitted by partners, configure fees to charge each partner per transaction performed, manage the various payment methods available on the TrendiPay API and other administrative tasks.",
        techStack: ["Next.js", "Fetch API", "Tanstack Query", "Tailwind"],
    },
    {
        slug: "cardii",
        title: "Cardii",
        images: ["/images/projects/cardii4.png", "/images/projects/cardii1.png", "/images/projects/cardii2.png", "/images/projects/cardii3.png"],
        description:
            "A solution for a car rental company to gather information from prospective clients. Users can sign up for various services provided by Cardii such as rentals, defensive driving lessons, etc. There is also an admin portal where admins can log in to view information collected from users, create SMS campaigns, etc.",
        techStack: ["Next.js", "Fetch API", "Tanstack Query", "Tailwind"],
        link: "https://www.cardii.net",
    },
]
