import type { Metadata } from "next";
import { posts } from "@/src/data/posts";
import PostContent from "@/src/components/PostContent";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: `${post.title} | Rogério Viana`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <PostContent post={post} />;
}
