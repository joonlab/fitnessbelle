import { createMetadata } from '@/lib/metadata';
import { branches } from '@/data/branches';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(branches).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const branch = branches[slug];
  if (!branch) return {};
  return createMetadata({
    title: branch.shortName,
    description: `${branch.name} - ${branch.address}`,
    path: `/locations/${slug}`,
  });
}

export default async function LocationPage({ params }: { params: Params }) {
  const { slug } = await params;
  const branch = branches[slug];
  if (!branch) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-600">{branch.name}</h1>
      <p className="mt-2 text-gray-500">{branch.address}</p>
      <p className="mt-4 text-gray-400">페이지 준비 중입니다.</p>
    </main>
  );
}
