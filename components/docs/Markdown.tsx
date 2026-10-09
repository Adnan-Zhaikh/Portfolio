import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function resolve(src: string | undefined, repoUrl: string, kind: "raw" | "blob") {
  if (!src) return "";
  if (/^(https?:|data:|mailto:|#)/i.test(src)) return src;
  const path = src.replace(/^\.?\//, "");
  return kind === "raw"
    ? `${repoUrl.replace("github.com", "raw.githubusercontent.com")}/HEAD/${path}`
    : `${repoUrl}/blob/HEAD/${path}`;
}

export default function Markdown({ children, repoUrl }: { children: string; repoUrl: string }) {
  return (
    <div className="docs-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={{
          // Relative README images/links would 404 on our site, so point them at GitHub.
          // eslint-disable-next-line @next/next/no-img-element
          img: ({ src, alt }) => (
            <img src={resolve(typeof src === "string" ? src : undefined, repoUrl, "raw")} alt={alt ?? ""} loading="lazy" />
          ),
          a: ({ href, children: c }) => (
            <a href={resolve(href, repoUrl, "blob")} target="_blank" rel="noreferrer">
              {c}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
