import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  const locales = ["en", "vi"];
  return locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Metal Dental Blog`,
    description: post.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  "Dental Tourism": "bg-accent/10 text-accent",
  "Treatments": "bg-blue-50 text-blue-700",
  "Travel Tips": "bg-emerald-50 text-emerald-700",
  "Recovery": "bg-amber-50 text-amber-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors mb-8 group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200">←</span>
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}
            >
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(post.publishedAt).toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-gray-500 text-sm">{post.readTimeMin} min read</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-primary-light flex items-center justify-center text-4xl shrink-0">
              {post.heroEmoji}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display text-off-white leading-tight">
              {post.title}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-primary-light flex items-center justify-center text-base">
              👨‍⚕️
            </div>
            <span className="text-gray-700 text-sm font-medium">{post.author}</span>
            <span className="text-gray-500 text-sm">· Metal Dental Specialist</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Excerpt / lead */}
        <p className="text-xl text-gray-700 leading-relaxed font-medium border-l-4 border-accent pl-5 mb-10">
          {post.excerpt}
        </p>

        {/* Paragraphs */}
        <div className="space-y-6">
          {post.paragraphs.map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Author card */}
        <div className="glass rounded-2xl p-6 mt-14 flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-light flex items-center justify-center text-2xl shrink-0">
            👨‍⚕️
          </div>
          <div>
            <div className="font-display font-bold text-off-white">{post.author}</div>
            <div className="text-accent text-sm font-medium mt-0.5">Metal Dental Specialist</div>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              One of Metal Dental's specialist team, writing to help international patients from New
              Zealand and Australia make confident, informed decisions about dental care in Da Nang.
            </p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
              Related Articles
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="glass rounded-2xl p-5 h-full hover:shadow-[0_0_20px_rgba(10,22,40,0.1)] transition-all duration-300">
                    <div className="text-2xl mb-3">{p.heroEmoji}</div>
                    <h3 className="font-display font-bold text-off-white text-sm leading-snug group-hover:text-accent transition-colors duration-200 mb-2">
                      {p.title}
                    </h3>
                    <span className="text-xs text-accent font-medium">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="gradient-mesh rounded-3xl p-10 text-center relative overflow-hidden mt-14">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative z-10">
            <h2 className="text-2xl font-display font-bold text-off-white mb-3">
              Ready to talk through your treatment?
            </h2>
            <p className="text-gray-700 mb-7 max-w-md mx-auto">
              Book a free consultation — no commitment, no flights required. Just an honest
              conversation about what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] transition-all duration-300"
              >
                Book Free Consultation →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-gray-400 hover:text-black transition-all duration-300"
              >
                ← More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
