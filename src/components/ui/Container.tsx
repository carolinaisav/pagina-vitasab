import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
