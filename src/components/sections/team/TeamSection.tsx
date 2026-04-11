import { TEAM_PILLARS } from '../../../constants/team'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PhotoCaptionLines({ caption }: { caption: string }) {
  const i = caption.indexOf(',')
  const line1 = i === -1 ? caption.trim() : caption.slice(0, i).trim()
  const line2 = i === -1 ? '' : caption.slice(i + 1).trim()
  return (
    <div className="text-center font-mono text-sm leading-snug">
      <p className="m-0 font-semibold text-white/85">{line1}</p>
      {line2 ? <p className="m-0 mt-1.5 text-xs font-normal tracking-wide text-white/55">{line2}</p> : null}
    </div>
  )
}

export function TeamSection() {
  return (
    <section className="w-full border-b border-black/10 bg-black py-24 dark:border-white/[0.08]">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-6 font-mono text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-[1.2] text-white">
            Team
          </h2>
          <p className="mx-auto max-w-[640px] font-mono text-lg leading-relaxed text-white/65">
            GrindURUS is built and maintained by Triple Panic Labs
          </p>
        </div>

        {/* Photos — отдельный блок */}
        <div className="mb-16 grid gap-12 md:mb-20 md:grid-cols-3 md:gap-10 lg:gap-12">
          {TEAM_PILLARS.map((pillar) => (
            <div key={`${pillar.id}-photo`} className="flex flex-col items-center text-center">
              <div className="relative mb-4 aspect-square w-56 max-w-full shrink-0 overflow-hidden rounded-full border-2 border-white/15 bg-[#111] shadow-[0_0_0_1px_rgba(255,105,180,0.08)] sm:w-64 md:mb-5 md:w-72 lg:w-80">
                <img
                  src={pillar.photoSrc}
                  alt={pillar.photoAlt}
                  className="h-full w-full object-cover"
                  width={320}
                  height={320}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {pillar.photoCaption ? (
                <div className="mt-1 flex max-w-[20rem] flex-col items-center gap-3">
                  <PhotoCaptionLines caption={pillar.photoCaption} />
                  {pillar.linkedinHref ? (
                    <a
                      href={pillar.linkedinHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${pillar.photoCaption?.split(',')[0]?.trim() ?? pillar.title} on LinkedIn`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition-colors hover:border-brand-pink/40 hover:bg-white/10 hover:text-brand-pink"
                    >
                      <LinkedInIcon className="h-[18px] w-[18px]" />
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className="max-w-[16rem] font-mono text-xs font-semibold uppercase tracking-widest text-white/45">
                  {pillar.photoAlt}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Карточки ролей — отдельно от фото */}
        <div className="border-t border-white/[0.08] pt-16 md:pt-20">
          <div className="grid gap-8 md:grid-cols-3 md:gap-8">
            {TEAM_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 text-left transition-colors duration-300 hover:border-brand-pink/35"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-pink/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
                  <span aria-hidden>{pillar.emoji}</span>
                </div>
                <h3 className="relative z-10 mb-3 font-mono text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="relative z-10 mb-8 flex-1 font-mono text-sm leading-relaxed text-white/60">
                  {pillar.description}
                </p>
                {pillar.href && pillar.cta ? (
                  <a
                    href={pillar.href}
                    target={pillar.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={pillar.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="relative z-10 inline-flex w-max items-center font-mono text-sm font-bold text-brand-pink transition-colors hover:text-brand-red"
                  >
                    {pillar.cta}
                    <span className="ml-1" aria-hidden>
                      →
                    </span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
