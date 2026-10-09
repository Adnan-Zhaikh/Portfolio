import DocsHero from "@/components/docs/DocsHero";
import RepoList from "@/components/docs/RepoList";
import { getDocRepos } from "@/lib/github";

export const revalidate = 3600;

export default async function DocsPage() {
  const repos = await getDocRepos();
  return (
    <>
      <DocsHero
        title="All"
        accent="Repositories"
        text="Explore the code repositories, documentation, and technical details behind my projects."
      />
      <RepoList repos={repos} />
    </>
  );
}
