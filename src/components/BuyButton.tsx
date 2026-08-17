import { STRIPE_CHECKOUT_URL } from "@/lib/offer";
import { cn } from "@/lib/utils";

export function BuyButton({
  children,
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "xl";
}) {
  return (
    <a
      href={STRIPE_CHECKOUT_URL}
      className={cn(
        "inline-flex w-full max-w-xl items-center justify-center rounded-full bg-[image:var(--gradient-accent)] font-display tracking-wider text-primary-foreground transition-transform duration-200 animate-pulse-glow hover:scale-[1.02] active:scale-[0.99]",
        size === "xl"
          ? "px-6 py-5 text-xl sm:text-2xl md:text-3xl"
          : "px-6 py-4 text-lg sm:text-xl md:text-2xl",
        "text-center leading-tight break-words",
        className,
      )}
    >
      {children}
    </a>
  );
}
