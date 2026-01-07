const buttonClass =
  "flex items-center justify-between rounded-lg px-3 py-2 text-left text-slate-600 transition hover:bg-slate-100";

export const Sidebar = () => {
  return (
    <aside className="flex h-full flex-col gap-4 border-r border-slate-200 bg-white/80 px-4 py-6 text-sm text-slate-700">
      <h2 className="px-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        Навигация
      </h2>
      <nav className="flex flex-col gap-1">
        <button className={buttonClass}>
          <span>Обзор</span>
          <span className="text-xs text-slate-400">Сейчас</span>
        </button>
        <button className={buttonClass}>
          <span>Посты</span>
          <span className="text-xs text-slate-400">5</span>
        </button>
        <button className={buttonClass}>
          <span>Статистика</span>
        </button>
      </nav>
    </aside>
  );
};
