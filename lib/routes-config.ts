// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Installation",
    href: "/installation",
    noLink: true,
    items: [
      { title: "Cloning the repository", href: "/cloning-repo" },
      { title: "Nextjs Frontend Setup", href: "/nextjs-frontend-setup" },
      { title: "Python Backend Setup", href: "/python-backend-setup" },
    ],
  },
  {
    title: "ThetaTerminal",
    href: "/theta-terminal",
    noLink: true,
    items: [
      { title: "Deploying to AWS EB", href: "/deploying" },
      { title: "Restarting the application", href: "/restarting" },
    ],
  },
  {
    title: "Common Commands",
    href: "/common-commands",
    noLink: true,
    items: [
      { title: "Supabase", href: "/supabase" },
      { title: "Makerkit", href: "/makerkit" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
