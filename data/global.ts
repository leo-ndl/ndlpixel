type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/"
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Contact",
    path: "/contact"
  }
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false
        }
      ]
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/leo-gtx",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/github-f.svg`,
          leavesWebsite: true
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/leonel-nguefack-41b7411ab",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/linkedin-f.svg`,
          leavesWebsite: true
        },
        {
          name: "X / Twitter",
          link: "https://x.com/nguefack_leonel",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/x-f.svg`,
          leavesWebsite: true
        },
        {
          name: "Email",
          link: "mailto:nguefackleonel@gmail.com",
          icon: `${process.env.NEXT_PUBLIC_BASE_URL}static/icons/mail-f.svg`,
          leavesWebsite: true
        }
      ]
    }
  ],
  support: {
    buymeacoffee: "nguefackleonel",
    message: "I appreciate your support very much! 💚"
  }
};
