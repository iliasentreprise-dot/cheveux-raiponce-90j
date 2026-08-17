import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BuyButton } from "@/components/BuyButton";
import { CountdownBanner } from "@/components/CountdownBanner";
import { PRICE, PRICE_STRIKED } from "@/lib/offer";

const TITLE = "Méthode Cheveux Raiponce en 90J — comprendre ta perte de densité";
const DESCRIPTION =
  "Une méthode simple sur 90 jours pour comprendre ta chute de cheveux, protéger ta densité, arrêter les erreurs inutiles et retrouver confiance face au miroir.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const pains = [
  "J’ai l’impression que ma raie devient de plus en plus visible.",
  "Je regarde mes cheveux dans la douche et je panique dès que j’en vois tomber.",
  "J’ai essayé tellement de produits que je ne sais même plus ce qui est réellement utile.",
  "Je compare mes cheveux aux anciennes photos de moi.",
  "J’ai peur que les autres remarquent quelque chose que je vois déjà constamment.",
  "Chaque nouvelle chute me donne l’impression que la situation empire.",
];

const desires = [
  "Comprendre enfin ce qui se passe avec mes cheveux.",
  "Arrêter de paniquer à chaque fois que je vois des cheveux tomber.",
  "Savoir quelles actions sont réellement utiles.",
  "Pouvoir regarder ma raie sans l’analyser pendant 10 minutes.",
  "Retrouver une routine simple et cohérente.",
  "Me sentir à nouveau belle sans attendre d’avoir une chevelure parfaite.",
];

const problems = [
  "Tu changes de produit dès qu’une nouvelle vidéo te promet une solution.",
  "Tu ne sais pas distinguer chute, casse, perte de densité ou problème du cuir chevelu.",
  "Tu modifies plusieurs choses simultanément et tu ne sais plus ce qui fonctionne réellement.",
  "Tu mesures ton évolution en regardant tes cheveux plusieurs fois par jour au lieu d’utiliser des repères fiables.",
];

const steps = [
  { n: "1", title: "Observer", text: "Comprendre ton point de départ." },
  {
    n: "2",
    title: "Comprendre",
    text: "Identifier les grandes pistes expliquant ta chute ou ta perte de densité.",
  },
  {
    n: "3",
    title: "Simplifier",
    text: "Créer une routine qui protège tes cheveux au lieu de multiplier les produits.",
  },
  {
    n: "4",
    title: "Éviter",
    text: "Supprimer les erreurs qui te font perdre du temps et de l’argent.",
  },
  { n: "5", title: "Suivre", text: "Mesurer ton évolution de manière cohérente." },
  {
    n: "6",
    title: "Reprendre confiance",
    text: "Arrêter progressivement de laisser tes cheveux contrôler ton quotidien.",
  },
];

const chapters = [
  {
    emoji: "🌱",
    label: "Chapitre 1",
    title: "Les fondations que personne ne pose",
    text: "Crée ton point zéro, photographie correctement ta densité et construis la chronologie de ta chute avant de modifier ta routine.",
  },
  {
    emoji: "🔎",
    label: "Chapitre 2",
    title: "Comprendre les principales causes",
    text: "Découvre pourquoi toutes les pertes de cheveux ne se ressemblent pas et pourquoi une solution unique ne peut pas fonctionner pour toutes.",
  },
  {
    emoji: "🌿",
    label: "Chapitre 3",
    title: "Construire une routine qui protège ce que tu as",
    text: "Apprends à réduire les agressions inutiles et à construire une routine capillaire simple et soutenable.",
  },
  {
    emoji: "🚫",
    label: "Chapitre 4",
    title: "Les 5 erreurs qui peuvent te faire perdre du temps",
    text: "Produits miracles, compléments pris au hasard, changements permanents de routine : apprends à reconnaître les pièges.",
  },
  {
    emoji: "📅",
    label: "Chapitre 5",
    title: "Ton plan d’action des 30 premiers jours",
    text: "Un plan semaine après semaine pour observer, simplifier ta routine et passer du doute aux informations.",
  },
  {
    emoji: "💚",
    label: "Chapitre 6",
    title: "Retrouver confiance sans attendre la chevelure parfaite",
    text: "Apprends à sortir de la surveillance permanente et à reprendre confiance pendant que tu prends soin de tes cheveux.",
  },
];

const roadmap = [
  {
    range: "Jours 1 à 30",
    title: "Comprendre",
    items: [
      "Photos de référence",
      "Chronologie",
      "Analyse des habitudes",
      "Simplification",
      "Consultation professionnelle si nécessaire",
    ],
  },
  {
    range: "Jours 31 à 60",
    title: "Stabiliser",
    items: [
      "Maintenir une routine cohérente",
      "Réduire les agressions inutiles",
      "Arrêter de changer constamment de méthode",
      "Suivre les recommandations adaptées à sa situation",
    ],
  },
  {
    range: "Jours 61 à 90",
    title: "Évaluer",
    items: [
      "Comparer les données de manière cohérente",
      "Faire le point sur les habitudes",
      "Ajuster si nécessaire",
      "Continuer sans surveillance obsessionnelle",
    ],
  },
];

// Cartes bénéfices — remplace-les par de vrais témoignages clients quand tu en auras.
const benefits = [
  {
    title: "Enfin une direction claire",
    text: "Arrête d’accumuler les conseils contradictoires et comprends quoi observer avant de modifier ta routine.",
  },
  {
    title: "Une méthode simple",
    text: "Pas besoin d’une étagère remplie de produits : l’objectif est de comprendre, simplifier et avancer étape par étape.",
  },
  {
    title: "Moins d’obsession, plus de contrôle",
    text: "Utilise des repères objectifs pour suivre ton évolution au lieu d’inspecter tes cheveux plusieurs fois par jour.",
  },
];

const faq = [
  {
    q: "Cette méthode fait-elle repousser les cheveux ?",
    a: "Cet ebook ne promet pas une repousse garantie. La perte de cheveux peut avoir de nombreuses causes. La méthode t’aide à mieux comprendre ta situation, protéger tes cheveux, organiser ta routine et savoir quand demander l’avis d’un professionnel.",
  },
  {
    q: "À qui s’adresse cet ebook ?",
    a: "Principalement aux femmes qui constatent une perte de densité, des cheveux qui semblent plus fins ou une chute qui devient une source de complexe et qui veulent arrêter d’essayer des solutions au hasard.",
  },
  {
    q: "Pourquoi parle-t-on de 90 jours ?",
    a: "Parce que l’objectif est de construire une méthode cohérente sur la durée plutôt que de changer de routine chaque semaine. Les cheveux évoluent lentement et les résultats varient selon chaque personne et selon la cause du problème.",
  },
  {
    q: "Dois-je consulter un dermatologue ?",
    a: "L’ebook explique les situations dans lesquelles un avis professionnel est particulièrement important. Une chute soudaine, importante, en plaques ou accompagnée de symptômes du cuir chevelu doit notamment être évaluée médicalement.",
  },
  {
    q: "Est-ce adapté si je débute complètement ?",
    a: "Oui. Tout est organisé étape par étape, même si tu ne connais actuellement rien aux cycles capillaires ou aux différentes formes de perte de cheveux.",
  },
  {
    q: "Est-ce que je dois acheter beaucoup de produits ?",
    a: "Non. Le principe du guide est justement d’éviter l’accumulation aveugle de produits et de privilégier une approche cohérente.",
  },
  {
    q: "Comment vais-je recevoir l’ebook ?",
    a: "Après validation du paiement, l’accès au produit numérique doit être fourni immédiatement sur la page de confirmation.",
  },
];

function Divider() {
  return <div className="section-divider mx-auto my-2 w-full max-w-4xl" />;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent sm:text-xs">
      {children}
    </span>
  );
}

function Price({ big = false }: { big?: boolean }) {
  return (
    <div className="flex items-baseline justify-center gap-3">
      <span className="font-sans text-lg text-muted-foreground line-through sm:text-xl">
        {PRICE_STRIKED}
      </span>
      <span
        className={`font-display text-accent text-accent-glow ${
          big ? "text-6xl sm:text-7xl" : "text-5xl sm:text-6xl"
        }`}
      >
        {PRICE}
      </span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <CountdownBanner />

      {/* HERO */}
      <header className="relative overflow-hidden px-4 pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-10 top-24 text-7xl opacity-[0.07] animate-float-soft select-none sm:text-9xl">
          🌿
        </div>
        <div className="pointer-events-none absolute -right-6 bottom-10 text-7xl opacity-[0.07] animate-float-soft select-none sm:text-9xl">
          🌿
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center animate-rise-in">
          <Badge>La méthode 90 jours pour reprendre le contrôle de tes cheveux</Badge>

          <h1 className="font-display text-4xl leading-[1.03] sm:text-6xl md:text-7xl">
            Tu regardes ta <span className="text-accent text-accent-glow">raie</span> dans le miroir
            en te demandant si tes cheveux sont encore devenus{" "}
            <span className="text-accent text-accent-glow">plus fins</span> ?
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Découvre une méthode simple sur 90 jours pour comprendre ta chute de cheveux, protéger
            ta densité, arrêter les erreurs inutiles et retrouver confiance face au miroir.
          </p>

          <p className="max-w-xl text-sm text-foreground/70 sm:text-base">
            Sans routine de 15 produits. Sans solution miracle. Sans passer tes journées à compter
            les cheveux dans ta douche.
          </p>

          <Price big />

          <BuyButton size="xl">⚡ Je commence ma méthode 90 jours</BuyButton>

          <p className="text-xs text-muted-foreground sm:text-sm">
            🔒 Paiement sécurisé via Stripe · Accès immédiat à l’ebook
          </p>
        </div>
      </header>

      <Divider />

      {/* HISTOIRE */}
      <section className="px-4 py-16 sm:py-20">
        <div className="card-dark mx-auto max-w-3xl space-y-5 p-6 text-base leading-relaxed text-foreground/85 sm:p-10 sm:text-lg">
          <p>Tu sors de la douche et tu regardes encore les cheveux restés entre tes doigts.</p>
          <p>Puis vient le miroir.</p>
          <p>
            Tu regardes ta raie sous la lumière. Tu bouges tes cheveux. Tu changes d’angle. Tu prends
            peut-être même une photo pour comparer avec celle d’il y a quelques semaines.
          </p>
          <p>Et cette question revient :</p>
          <p className="font-display text-2xl text-accent sm:text-3xl">
            « Est-ce que j’en ai encore perdu ? »
          </p>
          <p>Alors tu cherches une nouvelle solution.</p>
          <p className="text-foreground/70">
            Une huile.
            <br />
            Un complément.
            <br />
            Un shampoing anti-chute.
            <br />
            Un sérum découvert sur TikTok.
          </p>
          <p>Pendant quelques jours tu retrouves de l’espoir.</p>
          <p>Puis tu recommences à vérifier.</p>
          <p className="border-l-2 border-accent pl-4 text-foreground">
            Le véritable problème, c’est que personne ne t’a montré comment arrêter de tester des
            solutions au hasard et construire une stratégie claire.
          </p>
        </div>
      </section>

      <Divider />

      {/* DOULEURS */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl sm:text-5xl">
            Ces pensées qui deviennent <span className="text-accent">difficiles à arrêter...</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {pains.map((p) => (
              <div key={p} className="card-dark p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                  <span className="mr-2">💬</span>
                  <span className="italic">“{p}”</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIRS */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl sm:text-5xl">
            Au fond, tu ne veux pas une routine compliquée.{" "}
            <span className="text-accent">Tu veux juste...</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {desires.map((d) => (
              <div key={d} className="card-dark border-accent/20 p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  <span className="mr-2">✨</span>
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* PROBLEME */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Badge>⚠️ Pourquoi tu as l’impression de tourner en rond</Badge>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl">
            Le problème n’est pas que tu n’as rien essayé.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-accent sm:text-lg">
            Le problème, c’est que tu as peut-être essayé de résoudre quelque chose que tu n’avais
            pas encore compris.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
            {problems.map((p) => (
              <div key={p} className="card-dark p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                  <span className="mr-2 font-display text-destructive">✗</span>
                  {p}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl font-display text-2xl text-foreground sm:text-3xl">
            Avant de chercher la solution parfaite, tu dois comprendre ton point de départ.
          </p>
        </div>
      </section>

      <Divider />

      {/* METHODE */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Badge>🌿 La méthode Raiponce</Badge>
          <h2 className="mt-6 font-display text-3xl sm:text-5xl">
            90 jours pour arrêter d’<span className="text-accent">avancer au hasard.</span>
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base text-muted-foreground sm:text-lg">
            <p>
              La Méthode Cheveux Raiponce en 90J ne te donne pas une nouvelle liste interminable de
              produits.
            </p>
            <p className="text-foreground">Elle te donne un système.</p>
            <p>
              Un système pour observer, comprendre, simplifier, protéger, suivre et retrouver
              confiance.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                <div className="card-dark h-full p-6">
                  <span className="font-display text-4xl text-accent/60">{s.n}</span>
                  <h3 className="mt-2 font-display text-2xl uppercase text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="my-2 text-center text-xl text-accent/50 sm:hidden"
                    aria-hidden
                  >
                    ↓
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider />

      {/* CONTENU EBOOK */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl sm:text-5xl">
            Ce que contient <span className="text-accent">l’ebook</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => (
              <article key={c.label} className="card-dark flex h-full flex-col p-6">
                <span className="text-3xl">{c.emoji}</span>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {c.label}
                </span>
                <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 90 JOURS */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl sm:text-5xl">
            Ta feuille de route sur <span className="text-accent">90 jours</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {roadmap.map((r) => (
              <div key={r.range} className="card-dark relative p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {r.range}
                </span>
                <h3 className="mt-2 font-display text-3xl uppercase text-foreground">{r.title}</h3>
                <ul className="mt-4 space-y-2">
                  {r.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            90 jours ne garantissent pas une repousse précise. Ils te donnent suffisamment de
            structure pour arrêter de changer de direction chaque semaine.
          </p>
        </div>
      </section>

      <Divider />

      {/* CTA MILIEU */}
      <section className="px-4 py-16 sm:py-20">
        <div className="card-dark mx-auto flex max-w-3xl flex-col items-center gap-6 p-6 text-center glow-accent sm:p-10">
          <h2 className="font-display text-3xl sm:text-5xl">
            Et si les <span className="text-accent">90 prochains jours</span> étaient différents des
            90 derniers ?
          </h2>
          <BuyButton>🎁 Je découvre la méthode — {PRICE}</BuyButton>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Accès immédiat · Ebook numérique
          </p>
        </div>
      </section>

      <Divider />

      {/* BENEFICES */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl sm:text-5xl">
            Ce que cette méthode est conçue pour <span className="text-accent">t’apporter</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="card-dark p-6">
                <div className="text-sm tracking-widest text-accent">⭐⭐⭐⭐⭐</div>
                <h3 className="mt-3 font-display text-2xl text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIE */}
      <section className="px-4 py-16 sm:py-20">
        <div className="card-dark mx-auto max-w-3xl border-accent/30 p-6 text-center sm:p-10">
          <h2 className="font-display text-3xl text-accent sm:text-4xl">
            🛡️ Garantie satisfaction 7 jours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Lis la méthode et découvre le système. Si le contenu ne correspond pas à ce qui était
            présenté sur cette page, contacte-nous dans les 7 jours selon les conditions de
            remboursement applicables.
          </p>
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl sm:text-5xl">
            Questions <span className="text-accent">fréquentes</span>
          </h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="card-dark mb-3 px-5">
                <AccordionTrigger className="text-left font-sans text-base font-medium text-foreground hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Divider />

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">
            Tu peux continuer à chercher une nouvelle solution chaque semaine...
          </h2>
          <p className="font-display text-2xl text-accent text-accent-glow sm:text-4xl">
            Ou prendre 90 jours pour enfin suivre une direction claire.
          </p>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Comprends tes cheveux. Simplifie ta routine. Protège ce que tu as. Suis ton évolution.
            Et recommence progressivement à regarder ton reflet autrement.
          </p>
          <Price big />
          <BuyButton size="xl">🔒 Oui, je commence mes 90 jours</BuyButton>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Paiement sécurisé Stripe · Ebook numérique · Accès immédiat
          </p>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-10 text-center text-xs text-muted-foreground">
        <p className="mx-auto max-w-2xl leading-relaxed">
          Méthode Cheveux Raiponce en 90J — contenu éducatif et informatif. Cet ebook ne remplace pas
          un avis médical et ne garantit aucun résultat de repousse. En cas de chute soudaine,
          importante ou en plaques, consulte un professionnel de santé.
        </p>
      </footer>
    </div>
  );
}
