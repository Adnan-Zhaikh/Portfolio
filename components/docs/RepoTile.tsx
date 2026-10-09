const COLORS = ["#F2998A", "#7BC8A4", "#8E7CF0", "#5B8DEF", "#E7B24E", "#D983B8"];

export default function RepoTile({ name }: { name: string }) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
      style={{ background: COLORS[h % COLORS.length] }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
