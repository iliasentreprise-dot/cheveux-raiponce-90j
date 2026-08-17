import { createFileRoute, Link } from "@tanstack/react-router";
import { EBOOK_DOWNLOAD_URL } from "@/lib/offer";

const TITLE = "Merci — Méthode Cheveux Raiponce en 90J";
const DESCRIPTION =
  "Ton paiement a bien été pris en compte. Accède immédiatement à ta Méthode Cheveux Raiponce en 90J.";

export const Route = createFileRoute("/merci")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MerciPage,
});

function MerciPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-8 top-16 text-8xl opacity-[0.07] animate-float-soft select-none">
        🌿
      </div>

      <div className="card-dark relative w-full max-w-2xl p-6 text-center glow-accent sm:p-10">
        <h1 className="font-display text-3xl text-accent text-accent-glow sm:text-5xl">
          🌿 Bienvenue dans la méthode Raiponce
        </h1>
        <p className="mt-6 text-base text-foreground sm:text-lg">
          Ton paiement a bien été pris en compte.
        </p>
        <p className="mt-1 text-base text-muted-foreground sm:text-lg">
          Ta méthode commence aujourd’hui.
        </p>

        <a
          href={EBOOK_DOWNLOAD_URL}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[image:var(--gradient-accent)] px-6 py-4 text-center font-display text-xl leading-tight tracking-wider text-primary-foreground transition-transform duration-200 animate-pulse-glow hover:scale-[1.02] sm:text-2xl"
        >
          📖 Accéder à mon ebook
        </a>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Conseil : télécharge l’ebook maintenant et commence par le chapitre 1 avant d’acheter ou de
          modifier quoi que ce soit dans ta routine.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block text-xs text-muted-foreground underline underline-offset-4 hover:text-accent"
        >
          Retour à la page de la méthode
        </Link>
      </div>
    </div>
  );
}
