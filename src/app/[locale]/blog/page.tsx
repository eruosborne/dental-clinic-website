import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Dental Tourism Blog — Smile Dental Clinic",
  description:
    "Guides, tips, and real stories for New Zealanders and Australians considering dental tourism. Treatments, costs, recovery, and what to expect.",
};

const categoryColors: Record<string, string> = {
  "Dental Tourism": "bg-accent/10 text-accent",
  "Treatments": "bg-blue-50 text-blue-700",
  "Travel Tips": "bg-emerald-50 text-emerald-700",
  "Recovery": "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white mb-5">
            Guides for your
            <br />
            <span className="text-gradient-accent">dental journey.</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Honest advice on dental tourism, treatments, costs, and combining dental work with a
            holiday in Da Nang — written by our specialist team.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured post */}
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
            Featured Article
          </div>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="glass rounded-3xl p-8 md:p-10 hover:shadow-[0_0_40px_rgba(10,22,40,0.12)] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl bg-gradient-to-br from-accent/10 to-primary-light flex items-center justify-center text-5xl md:text-6xl mx-auto md:mx-0">
                  {featured.heroEmoji}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {new Date(featured.publishedAt).toLocaleDateString("en-NZ", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-gray-500 text-xs">{featured.readTimeMin} min read</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-off-white mb-3 group-hover:text-accent transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/20 to-primary-light flex items-center justify-center text-sm">
                      👨‍⚕️
                    </div>
                    <span className="text-sm text-gray-600">{featured.author}</span>
                    <span className="ml-auto text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Read article →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Rest of posts */}
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">
            More Articles
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <div className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-[0_0_30px_rgba(10,22,40,0.1)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-primary-light flex items-center justify-center text-3xl mb-4">
                    {post.heroEmoji}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTimeMin} min</span>
                  </div>
                  <h3 className="font-display font-bold text-off-white text-lg mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/8">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent/20 to-primary-light flex items-center justify-center text-xs">
                        👨‍⚕️
                      </div>
                      <span className="text-xs text-gray-600">{post.author.split(" ").slice(0, 2).join(" ")}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-NZ", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="gradient-mesh rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-off-white mb-3">
              Ready to ask your own questions?
            </h2>
            <p className="text-gray-700 mb-7 max-w-xl mx-auto">
              Our AI assistant answers questions about treatments, costs, and what to expect —
              any time, any timezone. Or book a free consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] transition-all duration-300"
              >
                Book Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
