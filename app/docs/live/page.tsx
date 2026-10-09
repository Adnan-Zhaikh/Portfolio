import DocsHero from "@/components/docs/DocsHero";
import LiveList from "@/components/docs/LiveList";
import { getDocRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function LiveProjectsPage() {
  const repos = (await getDocRepos()).filter((r) => r.liveUrl);
  return (
    <>
      <DocsHero
        title="Live"
        accent="Projects"
        text="A collection of my deployed projects with detailed documentation, features and tech stack."
      />
      <LiveList repos={repos} />
    </>
  );
}
