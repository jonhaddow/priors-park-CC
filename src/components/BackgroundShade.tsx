import type { VNode } from "preact";

function BackgroundShade({
  color,
  children,
}: {
  color: string;
  children: VNode[];
}) {
  return (
    <div className="bg-dark-background relative flex flex-col items-center justify-center gap-12 px-4 py-12 md:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-transparent from-40% via-[${color}]/20 via-60% to-transparent to-80%`}
        ></div>
      </div>
      {children}
    </div>
  );
}

export default BackgroundShade;
