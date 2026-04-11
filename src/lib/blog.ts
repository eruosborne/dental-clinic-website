export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Dental Tourism" | "Treatments" | "Travel Tips" | "Recovery";
  author: string;
  publishedAt: string;
  readTimeMin: number;
  featured?: boolean;
  heroEmoji: string;
  paragraphs: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-new-zealanders-fly-to-da-nang",
    title: "Why New Zealanders Are Flying to Da Nang for Dental Work",
    excerpt:
      "The numbers speak for themselves: NZ patients are saving $8,000–$20,000 per trip — enough to cover flights, five-star accommodation, and still come home thousands ahead.",
    category: "Dental Tourism",
    author: "Dr. Nguyen Tuan Tu",
    publishedAt: "2024-03-15",
    readTimeMin: 6,
    featured: true,
    heroEmoji: "✈️",
    paragraphs: [
      "Ten years ago, flying to Vietnam for dental work felt like a risk. Today, it's a well-worn path for thousands of New Zealanders every year — and the reasons are both simple and compelling. The same dental implants that cost NZD 6,500–8,000 in Auckland cost around NZD 1,100–1,800 at an accredited clinic in Da Nang. Multiply that across a full treatment plan, and the savings dwarf the cost of return airfares.",
      "Da Nang has become the preferred destination over other dental tourism hubs like Thailand or Bali for a specific reason: the concentration of internationally trained, English-first clinics. Unlike some destinations where you're navigating language barriers and uncertain credentials, Da Nang's top dental practices actively court international patients — English-speaking coordinators, written records sent to your home dentist, and pre-visit AI consultations that answer your questions before you step on a plane.",
      "The typical Metal Dental patient from New Zealand flies in for 5–7 days. That's enough time for a single dental implant start-to-finish, a full smile makeover with veneers, or a root canal and crown combination that would have been deferred for months back home due to cost. In that same week, they'll eat at beachfront restaurants for $8 a meal, take a day trip to ancient Hội An, and return home with a completed treatment plan rather than a waiting list appointment.",
      "The math is hard to argue with. A return flight from Auckland to Da Nang averages NZD 700–1,100. A comfortable hotel near the clinic runs NZD 80–150 per night. Five nights of accommodation plus flights totals roughly NZD 1,500–1,850. For a patient saving NZD 9,000 on two implants, that's a net saving of over NZD 7,000 — and a holiday in one of Southeast Asia's most beautiful coastal cities.",
      "The question most NZ patients ask us is: 'But is the quality really comparable?' Our answer is always the same: come and see. We use Straumann and Nobel Biocare implant systems — the same brands your Auckland dentist uses. Our CBCT scanner and digital smile planning software are identical to what you'd find in a premium New Zealand practice. The difference isn't the equipment or the training — it's the operating cost of running a business in Vietnam versus New Zealand. That gap is what you keep.",
      "If you've been putting off dental work because of the cost, Da Nang isn't a compromise. It's the option that makes the treatment actually possible.",
    ],
  },
  {
    slug: "complete-guide-dental-implants-vietnam",
    title: "The Complete Guide to Dental Implants in Vietnam",
    excerpt:
      "Everything you need to know before flying — from choosing an implant brand to what the procedure actually involves, day by day.",
    category: "Treatments",
    author: "Dr. Nguyen Tuan Tu",
    publishedAt: "2024-02-28",
    readTimeMin: 8,
    heroEmoji: "🦷",
    paragraphs: [
      "A dental implant is a titanium post that replaces the root of a missing tooth. Once placed in the jawbone and healed, a porcelain crown is attached on top — creating a replacement that looks, functions, and feels identical to a natural tooth. Unlike dentures or bridges, an implant integrates with the bone and can last a lifetime with proper care.",
      "For international patients flying to Vietnam, the most important question isn't 'how much does it cost?' — it's 'which implant system will my clinic use?' This matters because the implant stays in your jaw forever, and ongoing support (additional components, repair, replacements) depends on the brand being available in your home country. At Metal Dental, we use Straumann, Nobel Biocare, and Osstem — all three have extensive networks in New Zealand and Australia. Avoid any clinic that can't tell you the brand name of the implant they're placing.",
      "Here's how a single implant unfolds over a typical 5–7 day visit. Day one is a comprehensive examination: CBCT 3D scan of your jawbone, consultation with your implantologist, and a full written treatment plan with costs. If your bone density is sufficient (which our scan will confirm), the implant placement surgery happens on day two or three. This is done under local anaesthetic and takes 45–90 minutes. You'll experience mild soreness for 24–48 hours — manageable with standard pain relief.",
      "The implant then needs time to osseointegrate — fuse with your jawbone. For most patients visiting Vietnam, this is where the timeline splits. If you're getting an immediate-load implant (a temporary crown placed the same day), you leave Da Nang with a functional tooth. The permanent crown is fitted either during a follow-up visit or, increasingly, done remotely: your Vietnamese clinic sends the specifications to a lab in your home city, and your local dentist fits the final crown.",
      "Bone grafting is sometimes required when the jawbone has deteriorated after a long-term tooth absence. This adds cost (roughly NZD 350–700 at Metal Dental vs. NZD 1,500–3,500 in New Zealand) and extends the overall timeline, as the graft needs to heal before implant placement. Our pre-visit CBCT analysis — which we can perform on imaging you send us ahead of your trip — tells you before you book flights whether grafting will be needed.",
      "What to ask any Vietnamese dental clinic before committing: What implant brand and system? Do you provide a written treatment plan with itemised costs before I arrive? Will my records be sent to my New Zealand dentist? What warranty do you offer on the implant and crown? These four questions separate the clinics worth trusting from those worth avoiding.",
    ],
  },
  {
    slug: "first-48-hours-after-dental-treatment",
    title: "What to Expect: Your First 48 Hours After Treatment",
    excerpt:
      "A practical, honest guide to post-treatment recovery — written for patients who are also trying to enjoy Da Nang.",
    category: "Recovery",
    author: "Dr. Pham Thu Thuy",
    publishedAt: "2024-02-10",
    readTimeMin: 5,
    heroEmoji: "🏖️",
    paragraphs: [
      "One of the most common questions we get from international patients is a quietly anxious one: 'How bad will I feel after?' The honest answer depends on the treatment — but for the vast majority of our procedures, you'll be functional within 24 hours and genuinely comfortable within 48. Here's what to actually expect.",
      "For implant placement surgery: expect local anaesthetic to wear off 2–4 hours after the procedure. For the first evening, take the pain relief we prescribe before you feel pain rather than after — this makes a significant difference. Stick to soft foods: soup, yoghurt, scrambled eggs, smoothies. Sleep with your head elevated if possible. Day two is typically when the worst swelling peaks, then recedes. Most of our NZ and Australian patients tell us the discomfort was far less than they expected.",
      "For veneers and crowns: there's essentially no recovery period. Some mild sensitivity to hot and cold can occur for 1–2 weeks as your teeth adjust to the new restorations, but you can eat normally, talk normally, and go sightseeing the same afternoon. The temporary crowns we place while permanent ones are being fabricated are designed to be comfortable — but avoid anything very hard or sticky.",
      "For teeth whitening and cleans: zero recovery. You'll leave the clinic with a brighter smile and no restrictions whatsoever. The only post-care note is to avoid staining foods (coffee, red wine, turmeric) for 48 hours to let the whitening stabilise.",
      "The practical Da Nang recovery tip: don't plan your most ambitious day trip for the day immediately after surgery. Give yourself one calm day — a slow walk along My Khe Beach, gentle sightseeing on a cyclo, or simply a relaxed afternoon by the pool. By day two or three, most patients are fully back to exploring. The clinic is a 10-minute ride from the beach; you booked both for good reason.",
      "Before you fly home, we'll give you a full post-treatment care sheet, emergency contact details, and a written summary of your treatment for your New Zealand dentist. If anything concerns you after you're home — anything at all — our team is reachable via WhatsApp and our AI assistant is available 24/7. You're not on your own once the flight departs.",
    ],
  },
  {
    slug: "5-days-da-nang-dental-holiday",
    title: "5 Days in Da Nang: Combining Dental Work With a Holiday",
    excerpt:
      "A realistic day-by-day itinerary for first-time dental tourists — dental appointments and genuine Vietnamese experiences, not one sacrificed for the other.",
    category: "Travel Tips",
    author: "Dr. Le Minh Hoang",
    publishedAt: "2024-01-22",
    readTimeMin: 7,
    heroEmoji: "🌏",
    paragraphs: [
      "The question we hear from hesitant patients is usually framed like a trade-off: 'Am I going to spend my whole trip at the clinic?' The answer is no. A well-planned dental visit to Da Nang takes up roughly two to four clinic hours per day, maximum — leaving mornings, evenings, and full days free. Here's how a realistic 5-day visit actually looks for most of our patients.",
      "Day 1 (Arrival): Most Auckland–Da Nang flights arrive late morning or afternoon. Check into your hotel — we recommend staying in the My Khe beachfront area, a 10-minute drive from the clinic. Your first appointment is a consultation and 3D scan: 90 minutes at the clinic, relaxed and diagnostic. Afternoon: recover from travel, walk the beach, eat a bowl of Mì Quảng at a street stall for NZD 1.50. Evening: the Han River night market.",
      "Day 2 (Primary treatment): This is your main procedure day. For implant patients, surgery is typically 8–10 AM — done by late morning. For veneer patients, tooth preparation and temporary placement takes 2–3 hours. By lunchtime you're done. Afternoon (for implant patients): rest, soft food, gentle walk. For veneer or cosmetic patients: completely unrestricted. Consider the Marble Mountains in the afternoon — 500m tall, ancient Buddhist caves, and a 15-minute drive from the city.",
      "Day 3 (Free day or Hội An): Most patients take this day entirely off. The ancient trading town of Hội An is 30 minutes by taxi or Grab. UNESCO World Heritage listed, lantern-lit streets, excellent tailors, and some of the best food in Vietnam. White Rose dumplings and Cao Lầu noodles are the non-negotiables. For implant patients who feel well, this is completely appropriate.",
      "Day 4 (Follow-up or second treatment): Depending on your treatment, this is either a progress check (30 minutes) or a second session — crown fitting, final adjustments, or the start of a second procedure. For most cosmetic patients, final impressions and adjustments happen today. By noon you're free. Afternoon: Bà Nà Hills if the weather is clear — a French colonial hill station reached by the world's longest cable car, sitting above the clouds.",
      "Day 5 (Final check and departure): A brief final check and post-treatment briefing — usually 45 minutes. You receive your treatment records, warranty documentation, and your New Zealand dentist's summary. Then: airport. Most afternoon flights connect through Singapore or Ho Chi Minh City and land in Auckland the following morning. You go home with a completed treatment plan, a holiday's worth of memories, and thousands of dollars still in your account.",
    ],
  },
  {
    slug: "nz-vs-vietnam-cost-comparison",
    title: "NZ vs Vietnam: Real Cost Comparison for Full-Mouth Restoration",
    excerpt:
      "We ran the actual numbers on a full-mouth restoration quote from a patient in Auckland. The difference will surprise even the sceptics.",
    category: "Dental Tourism",
    author: "Dr. Nguyen Tuan Tu",
    publishedAt: "2024-01-08",
    readTimeMin: 6,
    heroEmoji: "💰",
    paragraphs: [
      "One of our patients — we'll call her Karen, from Auckland — arrived with a treatment plan from her New Zealand dentist. The plan called for six porcelain crowns, two implants, and a full arch whitening. The quote: NZD 34,500. Karen had been sitting on this quote for two years because the number simply wasn't achievable. She found us through a friend who'd come to Da Nang for veneers. Here's exactly what her treatment cost at Metal Dental.",
      "Six porcelain crowns: NZD 1,800 each in Auckland, NZD 300 each at Metal Dental. Total Auckland: NZD 10,800. Total Metal Dental: NZD 1,800. Two dental implants (Straumann, complete with crowns): NZD 7,000 each in Auckland, NZD 1,400 each at Metal Dental. Total Auckland: NZD 14,000. Total Metal Dental: NZD 2,800. Full arch professional whitening: NZD 800 in Auckland, NZD 120 at Metal Dental. Combined treatment total: Auckland NZD 25,600, Metal Dental NZD 4,720.",
      "Karen's travel costs: return flights from Auckland to Da Nang via Singapore, booked 6 weeks out, NZD 920. Six nights at a beachfront hotel, NZD 120 per night, total NZD 720. Meals, transport, and activities over six days: approximately NZD 350. Total trip cost including dental: NZD 6,710. Compared to staying in Auckland: NZD 25,600. Net saving: NZD 18,890.",
      "The obvious sceptic's question is whether the quality is equivalent. In Karen's case, her Auckland dentist reviewed the full post-treatment records we provided and confirmed the restoration work was to standard. The Straumann implants she received are identical to what her Auckland clinic offers — same titanium alloy, same surface treatment, same global warranty. The crowns were fabricated at the same type of digital laboratory used in New Zealand. The difference was not quality. It was the cost of doing business in Vietnam versus New Zealand.",
      "It's worth being clear about what the comparison doesn't include. Some NZ patients — particularly those with complex cases, medical complications, or a need for highly specialist treatment — should absolutely consider whether their case is better handled closer to home. Dental tourism works best for planned, elective, and semi-elective work: implants, cosmetics, crowns, aligners. It is not the right choice for dental emergencies, oral cancer screening, or highly specialist surgical cases.",
      "For the category of work that the majority of our patients need — the queue of deferred treatment sitting on a quote that felt unaffordable — the case for Da Nang is difficult to argue against on pure numbers. The question isn't really whether it's cheaper. It is. The question is whether you trust the quality. And that's why we welcome you to verify everything: our accreditations, our implant brands, our patient records, and our 4.9-star Google reviews from patients who have been exactly where you are.",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
