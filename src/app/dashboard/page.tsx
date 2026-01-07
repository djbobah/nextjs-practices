import { Card } from "@/components/Card";

type Post = {
  id: number;
  title: string;
};

export default async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();
  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">
        Dashboard
      </h1>
      <p className="mb-6 text-sm text-slate-600">
        Последние посты из API (первые 5 элементов).
      </p>
      <ul className="space-y-3">
        {posts.slice(0, 5).map((post) => (
          <Card key={post.id} title={post.title} />
        ))}
      </ul>
    </>
  );
}
