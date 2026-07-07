const GITHUB_USER = "luigilink";
const REVALIDATE_SECONDS = 3600;
const DEFAULT_COUNT = 6;

export type Project = {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
};

const FALLBACK_PROJECTS: Project[] = [
  {
    name: "SPSWakeUp",
    description:
      "PowerShell script tool to warm up all site collections in SharePoint.",
    url: "https://github.com/luigilink/SPSWakeUp",
    language: "PowerShell",
    stars: 0,
  },
  {
    name: "SPSConfigKit",
    description:
      "Deploy a SharePoint farm with PowerShell Desired State Configuration.",
    url: "https://github.com/luigilink/SPSConfigKit",
    language: "PowerShell",
    stars: 0,
  },
  {
    name: "SPSWeather",
    description:
      "PowerShell script tool to get a status of your SharePoint environment.",
    url: "https://github.com/luigilink/SPSWeather",
    language: "PowerShell",
    stars: 0,
  },
  {
    name: "SPSTrust",
    description:
      "PowerShell script tool to configure trust between SharePoint farms.",
    url: "https://github.com/luigilink/SPSTrust",
    language: "PowerShell",
    stars: 0,
  },
];

export async function getTopProjects(
  count: number = DEFAULT_COUNT
): Promise<Project[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "spjc-portfolio",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=pushed&direction=desc&per_page=100`,
      { headers, next: { revalidate: REVALIDATE_SECONDS } }
    );

    if (!res.ok) {
      return FALLBACK_PROJECTS.slice(0, count);
    }

    const repos = (await res.json()) as GitHubRepo[];

    const projects = repos
      .filter((repo) => !repo.fork && !repo.archived && !repo.disabled)
      .filter((repo) => repo.name.toLowerCase() !== "portfolio")
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      )
      .slice(0, count)
      .map<Project>((repo) => ({
        name: repo.name,
        description: repo.description ?? "No description provided.",
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
      }));

    return projects.length > 0 ? projects : FALLBACK_PROJECTS.slice(0, count);
  } catch {
    return FALLBACK_PROJECTS.slice(0, count);
  }
}
