import Link from "next/link";

const navLinkStyles =
  "relative flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 h-16 border-b border-slate-200 bg-gradient-to-r from-white/85 via-slate-50/80 to-white/85 backdrop-blur">
      <nav className="mx-auto flex h-full items-center justify-start px-6">
        <ul className="flex flex-wrap items-center gap-3">
          <li>
            <Link className={navLinkStyles} href={"/"}>
              <span>Главная</span>
            </Link>
          </li>
          <li>
            <Link className={navLinkStyles} href={"/about"}>
              <span>О нас</span>
            </Link>
          </li>
          <li>
            <Link className={navLinkStyles} href={"/dashboard"}>
              <span>Дашборд</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
