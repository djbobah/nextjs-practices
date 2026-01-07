type CardProps = {
  title: string;
};

export const Card = ({ title }: CardProps) => {
  return (
    <li className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md">
      {title}
    </li>
  );
};
