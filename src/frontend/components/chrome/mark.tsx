type LogoKind = "full" | "minimal";

type LogoTone = "dark" | "light";

const WIDTH: Record<LogoKind, number> = { full: 214, minimal: 105 };

function logoHref(kind: LogoKind, tone: LogoTone): string {
  return `/brand/${kind}/${tone}.svg`;
}

export function BrandMark({ className, kind = "full" }: { className: string; kind?: LogoKind }) {
  return (
    <span aria-hidden="true" className={`tbfm-mark ${className}`}>
    <img alt="" className="tbfm-mark__face" data-site-mark="light" height={50} src={logoHref(kind, "light")} width={WIDTH[kind]} />
    <img alt="" className="tbfm-mark__face" data-site-mark="dark" height={50} src={logoHref(kind, "dark")} width={WIDTH[kind]} />
    </span>
  );
}
