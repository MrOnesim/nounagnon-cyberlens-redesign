import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Assets                                                             */
/* ------------------------------------------------------------------ */

const heroPortrait = "/images/cybely.png";
const aboutPortrait = "/images/cyber.png";

const photography = [
  {
    src: "https://images.pexels.com/photos/35587808/pexels-photo-35587808.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
    title: "Portrait éditorial",
  },
  {
    src: "https://images.pexels.com/photos/37177402/pexels-photo-37177402.jpeg?auto=compress&cs=tinysrgb&h=780&w=1100",
    title: "Portrait de rue, Soweto",
  },
  {
    src: "https://images.pexels.com/photos/6389945/pexels-photo-6389945.jpeg?auto=compress&cs=tinysrgb&h=780&w=1100",
    title: "Marché et vie quotidienne",
  },
  {
    src: "https://images.pexels.com/photos/27778441/pexels-photo-27778441.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
    title: "Mode traditionnelle, Lagos",
  },
  {
    src: "https://images.pexels.com/photos/39072208/pexels-photo-39072208.jpeg?auto=compress&cs=tinysrgb&h=780&w=1100",
    title: "Tenue traditionnelle",
  },
  {
    src: "https://images.pexels.com/photos/20293146/pexels-photo-20293146.jpeg?auto=compress&cs=tinysrgb&h=780&w=1100",
    title: "Reportage humain",
  },
  {
    src: "https://images.pexels.com/photos/30403149/pexels-photo-30403149.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
    title: "Scène de rue",
  },
  {
    src: "https://images.pexels.com/photos/18189715/pexels-photo-18189715.jpeg?auto=compress&cs=tinysrgb&h=780&w=1100",
    title: "Ville ouest-africaine",
  },
];

const videoFrames = [
  "https://images.pexels.com/photos/5314217/pexels-photo-5314217.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1200",
  "https://images.pexels.com/photos/3928550/pexels-photo-3928550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1200",
  "https://images.pexels.com/photos/15718298/pexels-photo-15718298.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=720&w=1200",
];

const designWorks = [
  "https://images.pexels.com/photos/34155027/pexels-photo-34155027.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
  "https://images.pexels.com/photos/16313504/pexels-photo-16313504.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
  "https://images.pexels.com/photos/30499766/pexels-photo-30499766.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000",
  "https://images.pexels.com/photos/16313709/pexels-photo-16313709.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
  "https://images.pexels.com/photos/16698508/pexels-photo-16698508.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000",
  "https://images.pexels.com/photos/2582933/pexels-photo-2582933.jpeg?auto=compress&cs=tinysrgb&h=900&w=700",
];

const navItems = [
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Vidéo", href: "#video" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const roles = ["Photographe", "Vidéaste", "Monteur", "Directeur artistique"];

const services = [
  {
    title: "Photographie",
    details:
      "Portrait corporate, mode, lifestyle, reportage terrain et couverture d'événements — des images nettes, prêtes à publier.",
  },
  {
    title: "Production vidéo",
    details:
      "Tournage multi-formats, interviews, aftermovies, capsules de formation et vidéos promotionnelles, cadrées et montées.",
  },
  {
    title: "Design graphique",
    details:
      "Flyers, affiches, visuels de campagne, identité visuelle et supports de présentation, pensés pour l'impression comme pour l'écran.",
  },
  {
    title: "Communication digitale",
    details:
      "Direction créative, planning de contenus et adaptation des formats pour Instagram, Facebook, TikTok et WhatsApp.",
  },
];

const process = [
  "Brief et clarification des objectifs",
  "Direction artistique et plan de production",
  "Prise de vue, tournage ou conception graphique",
  "Post-production, retouche et montage",
  "Livraison optimisée pour le web, l'impression et les réseaux",
];

const projectCases = [
  {
    title: "Programme FUTUR",
    role: "Communication visuelle",
    description:
      "Chargé de communication du programme depuis son édition 6 : couverture photo et vidéo des sessions de formation informatique pour enfants, dans plusieurs villes du Bénin, et création des supports pédagogiques et sociaux.",
  },
  {
    title: "Mission Culture & Espoir — BEDJI",
    role: "Identité & pitch investisseur",
    description:
      "Conception du dossier de présentation et des visuels destinés aux partenaires d'un projet culturel et humanitaire, pour rendre l'ambition du projet lisible en quelques pages.",
  },
  {
    title: "Portraits de marque personnelle",
    role: "Photographie de studio",
    description:
      "Séances portrait pour entrepreneurs et professionnels qui ont besoin d'une image fiable pour leur CV, leur site ou leurs réseaux — cadrage sobre, lumière maîtrisée, retouche discrète.",
  },
];

const packages = [
  {
    name: "Essentiel",
    fit: "Portrait, mini-shooting ou visuel rapide",
    deliverables: "10 à 20 photos traitées ou 1 visuel final",
  },
  {
    name: "Événement",
    fit: "Conférence, formation, cérémonie ou lancement",
    deliverables: "Reportage photo, récap vidéo court et contenus réseaux",
  },
  {
    name: "Marque",
    fit: "Entreprise, programme, artiste ou projet public",
    deliverables: "Direction créative, photo, vidéo, design et kit social",
  },
];

const testimonials = [
  "Une présence discrète sur le terrain, mais des images fortes qui racontent vraiment l'activité.",
  "Les contenus livrés étaient propres, cohérents et directement prêts pour nos réseaux sociaux.",
  "Cyberlens comprend vite l'identité d'un projet et transforme le brief en rendu professionnel.",
];

const faqs = [
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Je suis basé au Bénin et disponible pour des projets à Cotonou, Abomey-Calavi et, selon le besoin, dans d'autres villes.",
  },
  {
    question: "Combien de temps prend la livraison ?",
    answer:
      "Selon le volume, les photos prioritaires peuvent être livrées rapidement. Les vidéos et campagnes complètes demandent un planning défini au brief.",
  },
  {
    question: "Puis-je remplacer les images du site ?",
    answer:
      "Oui. Les visuels de portfolio actuels servent de maquette professionnelle — il suffit de les remplacer par tes propres photos et vidéos.",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function ApertureMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = (i * 360) / 7;
        return (
          <path
            key={i}
            d="M50 50 L50 12 A38 38 0 0 1 82 30 Z"
            fill="currentColor"
            opacity="0.92"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      <circle cx="50" cy="50" r="13" fill="var(--ink)" />
    </svg>
  );
}

function SectionMark({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3" data-reveal="up">
      <span className="font-display text-sm italic text-[var(--teal-soft)]">{index}</span>
      <span className="h-px w-10 bg-[var(--ink-line)]" />
      <span className="text-sm text-[var(--mist)]">{label}</span>
    </div>
  );
}

function LensFrame({
  src,
  alt,
  caption,
  className = "",
  reveal = "scale",
  duotone = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  reveal?: "scale" | "up";
  duotone?: boolean;
}) {
  return (
    <figure
      className={`af-frame group relative overflow-hidden ${className}`}
      data-reveal={reveal}
    >
      <span className="af-corner af-tl" />
      <span className="af-corner af-tr" />
      <span className="af-corner af-bl" />
      <span className="af-corner af-br" />
      <img
        src={src}
        alt={alt}
        className={`af-base relative z-0 h-full w-full object-cover ${duotone ? "duotone" : ""}`}
        loading="lazy"
      />
      {duotone ? <div className="duotone-wash" /> : null}
      <img src={src} alt="" aria-hidden className="rgb-shift rgb-shift-r" loading="lazy" />
      <img src={src} alt="" aria-hidden className="rgb-shift rgb-shift-c" loading="lazy" />
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 z-[4] translate-y-1 bg-gradient-to-t from-black/85 to-transparent p-5 text-sm font-medium text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function RoleCycler() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block h-[1.1em] min-w-[9ch] overflow-hidden align-bottom">
      <span key={index} className="role-fade font-display italic text-[var(--gold-soft)]">
        {roles[index]}
      </span>
    </span>
  );
}

function CotonouClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Africa/Porto-Novo",
          }).format(new Date())
        );
      } catch {
        setTime("");
      }
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  if (!time) return null;
  return (
    <div className="hidden items-center gap-2 border border-white/15 px-3 py-1.5 text-xs text-zinc-300 sm:flex" style={{ fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-soft)]" />
      Cotonou — {time}
    </div>
  );
}

function ShutterLoader() {
  return (
    <>
      <div className="iris-overlay" aria-hidden="true">
        <div className="shutter shutter-top" />
        <div className="shutter shutter-bottom" />
        <div className="iris-center">
          <ApertureMark className="text-[var(--bone)]" />
          <span className="iris-mark font-display text-lg italic tracking-wide">Cyberlens</span>
        </div>
      </div>
      <div className="iris-flash" aria-hidden="true" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (logoRef.current) {
          const deg = Math.min(window.scrollY / 6, 130);
          logoRef.current.style.transform = `rotate(${deg}deg)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--ink)] text-[var(--bone)] selection:bg-[var(--gold)] selection:text-black">
      <div className="grain" aria-hidden="true" />
      <ShutterLoader />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--ink-line-soft)] bg-black/30 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 md:px-8">
          <a href="#accueil" className="flex items-center gap-3">
            <div ref={logoRef} className="text-[var(--gold-soft)]" style={{ transition: "transform 0.1s linear" }}>
              <ApertureMark className="h-7 w-7" />
            </div>
            <span className="font-display text-lg italic tracking-wide text-white">Cyberlens</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--gold-soft)]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <CotonouClock />
            <a
              href="#contact"
              className="hidden border border-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--gold-soft)] transition hover:bg-[var(--gold)] hover:text-black sm:block"
            >
              Démarrer un projet
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Ouvrir le menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span
                className="h-px w-6 bg-white transition"
                style={{ transform: menuOpen ? "translateY(3.5px) rotate(45deg)" : "none" }}
              />
              <span
                className="h-px w-6 bg-white transition"
                style={{ transform: menuOpen ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </nav>
        {menuOpen ? (
          <div className="border-t border-[var(--ink-line-soft)] bg-black/70 px-5 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4 text-base text-zinc-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[var(--ink-line-soft)] pb-3 transition hover:text-[var(--gold-soft)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 border border-[var(--gold)] px-4 py-2.5 text-center text-sm font-medium text-[var(--gold-soft)]"
              >
                Démarrer un projet
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* ---------------- Hero ---------------- */}
      <section id="accueil" className="relative isolate flex min-h-screen items-end overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img
            src={heroPortrait}
            alt="Nounagnon Cyberlens, photographe et vidéaste, portrait studio"
            className="duotone hero-drift h-full w-full object-cover object-top"
          />
          <div className="duotone-wash" />
          <div className="duotone-fade" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--ink)] via-black/25 to-black/10" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28">
          <div className="max-w-4xl space-y-7">
            <p className="text-sm text-[var(--teal-soft)]" data-reveal="up">
              Studio visuel basé à Cotonou, Bénin
            </p>
            <h1
              className="font-display text-6xl leading-[0.95] tracking-tight text-white md:text-8xl lg:text-[8.5rem]"
              data-reveal="mask"
            >
              <span className="reveal-mask-inner">
                Nounagnon
                <br />
                Cyberlens
              </span>
            </h1>
            <p className="max-w-xl text-xl leading-8 text-zinc-200 md:text-2xl" data-reveal="up" data-reveal-delay="1">
              <RoleCycler /> — chaque image doit justifier sa place. Le reste est coupé au montage.
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row" data-reveal="up" data-reveal-delay="2">
              <a
                href="#portfolio"
                className="bg-white px-7 py-3 text-center text-sm font-semibold text-black transition hover:bg-[var(--gold-soft)]"
              >
                Voir le travail
              </a>
              <a
                href="#contact"
                className="border border-white/40 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Démarrer un projet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- À propos ---------------- */}
      <section id="a-propos" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[0.82fr_1.18fr] md:px-8 lg:py-32">
        <LensFrame
          src={aboutPortrait}
          alt="Portrait de Nounagnon, en studio"
          className="h-full min-h-[520px] w-full"
          duotone
        />
        <div className="flex flex-col justify-center space-y-8">
          <SectionMark index="01" label="À propos" />
          <h2 className="font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
            Un regard formé sur le terrain, pas dans une école.
          </h2>
          <div className="space-y-5 text-lg leading-8 text-zinc-300" data-reveal="up" data-reveal-delay="1">
            <p>
              Je m'appelle Nounagnon. Je fabrique des images pour des marques, des programmes et des événements,
              au Bénin et au-delà — photographie, vidéo, montage et design graphique.
            </p>
            <p>
              Autodidacte, j'ai appris en pratiquant : un shooting après l'autre, un export après l'autre.
              Aujourd'hui, je pilote la communication visuelle du Programme FUTUR — couverture photo et vidéo,
              supports pédagogiques, contenus qui donnent envie de suivre le programme.
            </p>
            <p className="font-display text-2xl italic leading-tight text-white">
              Une bonne photo ne décore pas un projet. Elle le rend crédible.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section id="services" className="border-y border-[var(--ink-line)] bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionMark index="02" label="Services" />
              <h2 className="font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
                Une production visuelle complète, du brief à la diffusion.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-zinc-300" data-reveal="up" data-reveal-delay="1">
                Chaque mission est pensée pour livrer des contenus utiles, cohérents et prêts à publier.
              </p>
            </div>
            <div className="space-y-0">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group border-t border-[var(--ink-line)] py-7 last:border-b"
                  data-reveal="left"
                  data-reveal-delay={String(Math.min(index, 3))}
                >
                  <div className="flex gap-6">
                    <span
                      className="mt-1.5 text-sm text-[var(--teal-soft)]"
                      style={{ fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-3">
                      <h3 className="font-display text-3xl text-white transition group-hover:text-[var(--gold-soft)]">
                        {service.title}
                      </h3>
                      <p className="max-w-2xl text-lg leading-8 text-zinc-300">{service.details}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Méthode ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionMark index="03" label="Méthode" />
            <h2 className="font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
              Un process simple pour éviter les contenus improvisés.
            </h2>
          </div>
          <ol className="space-y-0 text-lg leading-8 text-zinc-300">
            {process.map((step, index) => (
              <li
                key={step}
                className="flex gap-6 border-t border-[var(--ink-line)] py-5 last:border-b"
                data-reveal="up"
                data-reveal-delay={String(Math.min(index, 3))}
              >
                <span className="font-display text-2xl italic text-[var(--gold-soft)]">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Portfolio photo ---------------- */}
      <section id="portfolio" className="border-y border-[var(--ink-line)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionMark index="04" label="Portfolio" />
          <h2 className="max-w-2xl font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
            Photographie
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300" data-reveal="up" data-reveal-delay="1">
            Portrait, mode, événementiel, lifestyle et reportage : une sélection courte pour montrer la force du
            regard.
          </p>
          <div className="mt-14 grid auto-rows-[310px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {photography.map((item, index) => (
              <LensFrame
                key={item.title}
                src={item.src}
                alt={item.title}
                caption={item.title}
                reveal="scale"
                className={`${index === 1 || index === 5 ? "lg:col-span-2" : ""} ${
                  index === 0 || index === 6 ? "lg:row-span-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Vidéo ---------------- */}
      <section id="video" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="space-y-8">
            <SectionMark index="05" label="Vidéo" />
            <h2 className="font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
              Cadrer, monter et livrer du contenu prêt pour les réseaux.
            </h2>
            <p className="text-lg leading-8 text-zinc-300" data-reveal="up" data-reveal-delay="1">
              Couverture vidéo du Programme FUTUR, aftermovies d'événements, vidéos promotionnelles et contenus
              courts pour les plateformes sociales.
            </p>
            <ul className="space-y-3 text-lg text-zinc-300">
              {["Cadrage vidéo", "Montage professionnel", "Contenu réseaux sociaux", "Aftermovies d'événements"].map(
                (skill, i) => (
                  <li
                    key={skill}
                    className="border-t border-[var(--ink-line)] py-3"
                    data-reveal="left"
                    data-reveal-delay={String(Math.min(i, 3))}
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-3">
            {videoFrames.map((frame, index) => (
              <div key={frame} className={index === 1 ? "ml-auto w-10/12" : "w-full"}>
                <div className="sprocket-edge" aria-hidden="true" />
                <LensFrame src={frame} alt={`Capture vidéo ${index + 1}`} className="aspect-video w-full" reveal="scale" />
                <div className="sprocket-edge" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Design graphique (rupture claire) ---------------- */}
      <section className="bg-[var(--paper)] py-24 text-[var(--paper-ink)] lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-5 flex items-center gap-3" data-reveal="up">
            <span className="font-display text-sm italic text-[var(--teal)]">06</span>
            <span className="h-px w-10 bg-[var(--paper-line)]" />
            <span className="text-sm text-[var(--paper-ink)]/60">Design graphique</span>
          </div>
          <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-6xl" data-reveal="up">
            Flyers, affiches et visuels de campagne.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--paper-ink)]/70" data-reveal="up" data-reveal-delay="1">
            Création de supports imprimables, visuels réseaux sociaux et identités visuelles avec Photoshop,
            Lightroom, Premiere Pro et Canva.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {designWorks.map((work, index) => (
              <img
                key={work}
                src={work}
                alt={`Création graphique ${index + 1}`}
                data-reveal="scale"
                className={`h-full min-h-[280px] w-full object-cover ${
                  index === 2 || index === 4 ? "md:col-span-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Projets ---------------- */}
      <section id="projets" className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <SectionMark index="07" label="Projets" />
        <h2 className="max-w-2xl font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
          Trois façons de travailler avec Cyberlens.
        </h2>
        <div className="mt-16 grid gap-0 border-y border-[var(--ink-line)] md:grid-cols-3">
          {projectCases.map((project, index) => (
            <article
              key={project.title}
              className="border-[var(--ink-line)] py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              data-reveal="up"
              data-reveal-delay={String(index)}
            >
              <p className="mb-3 text-sm text-[var(--gold-soft)]">{project.role}</p>
              <h3 className="mb-4 font-display text-3xl text-white">{project.title}</h3>
              <p className="leading-7 text-zinc-300">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Offres ---------------- */}
      <section className="bg-[var(--paper)] py-24 text-[var(--paper-ink)] lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-md space-y-4" data-reveal="up">
              <div className="mb-1 flex items-center gap-3">
                <span className="font-display text-sm italic text-[var(--teal)]">08</span>
                <span className="h-px w-10 bg-[var(--paper-line)]" />
                <span className="text-sm text-[var(--paper-ink)]/60">Offres</span>
              </div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                Des formats clairs pour démarrer rapidement.
              </h2>
              <p className="text-lg leading-8 text-[var(--paper-ink)]/70">
                Les offres s'adaptent au lieu, à la durée, à l'urgence et au nombre de livrables. Le tarif final se
                confirme après le brief.
              </p>
            </div>
            <div className="border-y border-[var(--paper-line)]" data-reveal="up" data-reveal-delay="1">
              {packages.map((pack) => (
                <article
                  key={pack.name}
                  className="grid gap-4 border-b border-[var(--paper-line)] py-7 last:border-b-0 md:grid-cols-[0.7fr_1fr]"
                >
                  <div>
                    <h3 className="font-display text-3xl">{pack.name}</h3>
                    <p className="mt-2 text-sm text-[var(--teal)]">{pack.fit}</p>
                  </div>
                  <p className="text-lg leading-8 text-[var(--paper-ink)]/80">{pack.deliverables}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Témoignages + FAQ ---------------- */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionMark index="09" label="Retours clients" />
            <h2 className="font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
              Une signature sobre, utile et orientée résultat.
            </h2>
            <p className="text-lg leading-8 text-zinc-300" data-reveal="up" data-reveal-delay="1">
              Ces textes servent de placeholders en attendant de collecter les avis réels de clients, partenaires
              ou responsables de projets.
            </p>
            <div className="space-y-6">
              {testimonials.map((quote, index) => (
                <blockquote
                  key={quote}
                  className="border-l border-[var(--gold)] pl-6 text-xl leading-9 text-zinc-200"
                  data-reveal="left"
                  data-reveal-delay={String(Math.min(index, 3))}
                >
                  «&nbsp;{quote}&nbsp;»
                  <footer className="mt-3 text-sm text-zinc-500">Témoignage {index + 1}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm text-[var(--teal-soft)]" data-reveal="up">
              Questions fréquentes
            </p>
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-t border-[var(--ink-line)] py-5 last:border-b"
                data-reveal="up"
                data-reveal-delay={String(Math.min(index, 3))}
              >
                <summary className="cursor-pointer list-none font-display text-2xl text-white marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-zinc-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="border-t border-[var(--ink-line)] px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <SectionMark index="10" label="Contact" />
            <h2 className="font-display text-4xl leading-tight text-white md:text-6xl" data-reveal="up">
              Travaillons ensemble
            </h2>
            <p className="max-w-md text-lg leading-8 text-zinc-300" data-reveal="up" data-reveal-delay="1">
              Pour un shooting, un reportage, une vidéo promotionnelle ou une identité visuelle, envoie les
              détails du projet.
            </p>
            <div className="space-y-4 text-lg text-zinc-300" data-reveal="up" data-reveal-delay="2">
              <p>Nounagnon Cyberlens</p>
              <p>WhatsApp : +229 XX XX XX XX</p>
              <p>Email : contact@nounagnoncyberlens.com</p>
              <p>Instagram : @nounagnoncyberlens</p>
            </div>
          </div>
          <form
            className="space-y-5 border border-[var(--ink-line)] bg-white/[0.03] p-6 backdrop-blur md:p-8"
            data-reveal="up"
            data-reveal-delay="1"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-zinc-300">
                Nom
                <input className="w-full border border-[var(--ink-line)] bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--gold-soft)]" />
              </label>
              <label className="space-y-2 text-sm text-zinc-300">
                Contact
                <input className="w-full border border-[var(--ink-line)] bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--gold-soft)]" />
              </label>
            </div>
            <label className="space-y-2 text-sm text-zinc-300">
              Type de projet
              <select className="w-full border border-[var(--ink-line)] bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[var(--gold-soft)]">
                <option>Photographie</option>
                <option>Vidéo</option>
                <option>Design graphique</option>
                <option>Communication digitale</option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-zinc-300">
              Message
              <textarea className="min-h-36 w-full border border-[var(--ink-line)] bg-black/30 px-4 py-4 text-white outline-none transition focus:border-[var(--gold-soft)]" />
            </label>
            <button className="w-full bg-[var(--gold-soft)] px-7 py-4 text-sm font-semibold text-black transition hover:bg-white">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[var(--ink-line)] px-5 py-8 text-center text-sm text-zinc-500 md:px-8">
        Nounagnon Cyberlens — Cotonou, Bénin
      </footer>
    </main>
  );
}
