import type { ComponentChildren } from "preact";

function BackgroundShade({
  color,
  direction = "left",
  className = "",
  children,
}: {
  color: "green" | "red" | "yellow";
  direction?: "left" | "right";
  className?: string;
  children: ComponentChildren;
}) {
  const classNames: string[] = [];

  // Need tailwind to know this is a string so it generates the correct css
  if (color === "green") {
    classNames.push(`via-[#65b215]/10`);
  } else if (color === "red") {
    classNames.push(`via-[#ec3237]/10`);
  } else if (color === "yellow") {
    classNames.push(`via-yellow-400/10`);
  }

  if (direction === "left") {
    classNames.push(`bg-gradient-to-br`);
  } else if (direction === "right") {
    classNames.push(`bg-gradient-to-bl`);
  }

  return (
    <div
      className={`${className} bg-dark-background @container relative px-4 py-12 @md:px-8`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute inset-0 from-transparent from-40% ${classNames.join(" ")} via-60% to-transparent to-80%`}
        ></div>
      </div>
      {children}
    </div>
  );
}

export default BackgroundShade;
