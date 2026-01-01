import Link from "next/link";

export default function Home() {
  const stats = [
    { label: "WordPress launches", value: "45+" },
    { label: "Average ROI increase", value: "210%" },
    { label: "Creative industries served", value: "7" },
  ];

  const pillars = [
    {
      title: "Authority Positioning",
      description:
        "Signature visuals, polished storytelling, and SEO-backed copy that position you as the obvious choice in your niche.",
      deliverable: "Brand & web direction blueprint",
    },
    {
      title: "Magnetic Experience",
      description:
        "Conversion-ready WordPress builds with intuitive flows, mobile-first layouts, and interactions that make visitors stay.",
      deliverable: "WordPress experience audit & UI refresh",
    },
    {
      title: "Social Proof Engine",
      description:
        "Content pillars, carousels, and story prompts designed to nurture relationships and turn followers into booked clients.",
      deliverable: "90-day social content system",
    },
  ];

  const offers = [
    {
      name: "VIP Launch Intensive",
      summary:
        "Two-week immersive sprint to launch or refresh your WordPress site, brand identity, and launch assets without the overwhelm.",
      outcomes: [
        "Strategy workshop + audience clarity workbook",
        "Custom WordPress design with conversion copy",
        "Launch graphics kit for Instagram, LinkedIn, Pinterest",
      ],
      investment: "Starting at $2,400",
    },
    {
      name: "Retainer: Content & Creative Direction",
      summary:
        "Monthly design and messaging support so you can stay consistent on socials while you focus on serving clients.",
      outcomes: [
        "12+ designer-approved content pieces per month",
        "Story prompts, captions, and CTAs that sell",
        "Quarterly analytics review with refinement roadmap",
      ],
      investment: "From $850/month",
    },
  ];

  const contentIdeas = [
    {
      headline: "Behind the build: From moodboard to live WordPress site",
      hook: "Show the transformation your process creates in three carousel frames.",
      format: "Carousel",
      cta: "Invite followers to DM “BUILD” for your process guide.",
    },
    {
      headline: "Client Red Flag Checklist for Designers",
      hook: "Quick punchy reel contrasting dream vs. misaligned clients.",
      format: "Reel / TikTok",
      cta: "Direct to your discovery call link with a qualifying prompt.",
    },
    {
      headline: "How typography choices shape trust on your website",
      hook: "Educational post breaking down brand psychology using recent projects.",
      format: "Static carousel",
      cta: "Offer a free brand audit waitlist.",
    },
    {
      headline: "Case Study: 3 stories that booked a $5k WordPress project",
      hook: "Thread, newsletter, or LinkedIn carousel mapping the strategy.",
      format: "Micro case study",
      cta: "Link to your Project Strategy Call landing page.",
    },
    {
      headline: "Design system essentials for consistent content",
      hook: "Teach your color, font, and layout guardrails in a downloadable cheat sheet.",
      format: "Lead magnet teaser",
      cta: "Drive to Notion or ConvertKit opt-in.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Tehniyat translated my fuzzy ideas into a stunning WordPress hub that books dream clients weekly. The launch playbook alone paid for the project.",
      name: "Sara Malik",
      role: "Founder, Lumina Creative",
    },
    {
      quote:
        "Her social content system helped me double Instagram inquiries while freeing up so much headspace. The assets are beautiful and strategic.",
      name: "Daniel Reyes",
      role: "Brand Photographer",
    },
  ];

  const faqs = [
    {
      question: "How soon can we start a project?",
      answer:
        "VIP Intensives typically book 3-4 weeks in advance. Apply today and we’ll lock in a timeline after our strategy call.",
    },
    {
      question: "Do you offer copywriting or only design?",
      answer:
        "Every package includes conversion copy frameworks, voice-of-customer research, and refinement support to keep messaging cohesive.",
    },
    {
      question: "What platforms do you create content for?",
      answer:
        "Instagram, LinkedIn, and Pinterest are primary, with repurposing systems for short-form video and email wrapped into each plan.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <span className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-purple-200/60 blur-3xl" />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <section className="grid gap-12 rounded-3xl border border-white/60 bg-white/90 p-10 shadow-[0_40px_100px_-60px_rgba(79,70,229,0.5)] backdrop-blur">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
              Tehniyat Usman · WordPress & Brand Designer
            </span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Designer-led websites, magnetic content, and visuals that help you
              book the kind of clients you daydream about.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              I help creative entrepreneurs and service-based founders launch
              strategic WordPress websites, elevate their visual identity, and
              publish scroll-stopping content that feels like them while guiding
              followers into high-value engagements.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="https://cal.com/"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:scale-[1.01]"
              >
                Book a discovery call
              </Link>
              <Link
                href="mailto:hello@tehniyatusman.design?subject=Content%20Playbook%20Request"
                className="inline-flex items-center justify-center rounded-full border border-purple-200 px-6 py-3 text-sm font-semibold text-purple-600 transition hover:border-purple-400 hover:bg-purple-50"
              >
                Get the content playbook
              </Link>
            </div>
          </div>

          <dl className="grid w-full gap-8 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-rose-50 p-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <dt className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Signature Method
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              The Attraction Framework built for premium-ready designers &
              founders.
            </h2>
            <p className="text-slate-600">
              Blend design excellence with marketing psychology. Every project
              works through my three-part system that clarifies your positioning,
              builds a high-converting WordPress presence, and hands you
              designer-level content you can post tomorrow.
            </p>
          </div>
          <div className="grid gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-purple-500/5 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-500">
                  {pillar.deliverable}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-[0_45px_120px_-70px_rgba(79,70,229,0.4)] backdrop-blur">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Designed Offers
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Choose the container that matches your momentum.
              </h2>
            </div>
            <Link
              href="https://cal.com/"
              className="inline-flex items-center justify-center rounded-full border border-purple-200 px-6 py-3 text-sm font-semibold text-purple-600 transition hover:border-purple-500 hover:bg-purple-50"
            >
              Compare packages
            </Link>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {offers.map((offer) => (
              <div
                key={offer.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-purple-100 bg-gradient-to-br from-white via-purple-50/60 to-white p-8 shadow-lg shadow-purple-500/10"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {offer.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {offer.summary}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {offer.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-400" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between rounded-2xl bg-white/80 px-5 py-4 text-sm font-semibold text-purple-500">
                  <span>{offer.investment}</span>
                  <Link
                    href="https://cal.com/"
                    className="text-purple-600 underline underline-offset-4 transition hover:text-purple-700"
                  >
                    Apply now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-purple-100/70 bg-gradient-to-br from-white via-purple-50 to-rose-50 p-10 shadow-[0_40px_120px_-80px_rgba(244,114,182,0.7)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Educational Content Lab
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Plug-and-play ideas for your next 30 days of social content.
              </h2>
              <p className="text-slate-600">
                These prompts stack your expertise, show your process, and lead
                people directly into your offers. Swipe them into your favorite
                planner and personalize with your visuals.
              </p>
            </div>
            <Link
              href="https://www.notion.so/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Copy to Notion
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contentIdeas.map((idea) => (
              <article
                key={idea.headline}
                className="flex h-full flex-col gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 text-slate-600 shadow-lg shadow-purple-500/5 backdrop-blur"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                  {idea.format}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {idea.headline}
                </h3>
                <p className="text-sm leading-relaxed">{idea.hook}</p>
                <p className="mt-auto text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                  CTA · {idea.cta}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.25fr,0.75fr] lg:items-center">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-lg shadow-purple-500/10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Social Proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Results clients are sharing after partnering together.
            </h2>
            <div className="mt-8 grid gap-6">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="space-y-4 rounded-2xl border border-purple-100 bg-white/80 p-6"
                >
                  <blockquote className="text-lg font-medium text-slate-700">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="text-sm font-semibold text-slate-500">
                    {testimonial.name} · {testimonial.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="h-full rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500 p-10 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">
              What you get
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-purple-50/90">
              <li>• Messaging strategy that anchors every design decision.</li>
              <li>• WordPress site built with speed, SEO, and sales in mind.</li>
              <li>• Content calendar + templates for consistent visibility.</li>
              <li>• Launch kit with carousels, reels, stories, and email copy.</li>
            </ul>
            <Link
              href="mailto:hello@tehniyatusman.design"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
            >
              Email hello@tehniyatusman.design
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-white/70 bg-white/90 p-10 shadow-lg shadow-purple-500/10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                FAQs
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Quick answers before we partner.
              </h2>
            </div>
            <Link
              href="https://cal.com/"
              className="inline-flex items-center justify-center rounded-full border border-purple-200 px-6 py-3 text-sm font-semibold text-purple-600 transition hover:border-purple-500 hover:bg-purple-50"
            >
              Still curious? Let’s talk.
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="space-y-3 rounded-2xl border border-purple-100 bg-white/70 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 p-10 text-white shadow-[0_50px_120px_-80px_rgba(99,102,241,0.8)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-100">
                Next Step
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to elevate your online presence?
              </h2>
              <p className="max-w-xl text-sm text-purple-100/90">
                Share your project goals and I will craft a custom roadmap that
                maps out your WordPress experience, brand direction, and the
                content pieces that drive inquiries.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://cal.com/"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-600 transition hover:bg-purple-50"
              >
                Apply for a project
              </Link>
              <Link
                href="mailto:hello@tehniyatusman.design"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request media kit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
