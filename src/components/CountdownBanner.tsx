import { useEffect, useState } from "react";

const TOTAL_SECONDS = 15 * 60;

export function CountdownBanner() {
  const [left, setLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3 py-2 text-center text-[11px] font-medium uppercase tracking-wide text-foreground sm:text-xs">
        <span>⚠️ Offre de lancement : {""}</span>
        <span className="text-accent">17,80€ au lieu de 47€</span>
        <span className="text-muted-foreground">— fin dans :</span>
        <span className="rounded-md bg-background px-2 py-0.5 font-display text-base tracking-widest text-accent tabular-nums sm:text-lg">
          {mm}:{ss}
        </span>
      </div>
    </div>
  );
}
