import type { ComponentChildren } from "preact";
import FadeReveal from "./FadeReveal";

function Section({ children }: { children: ComponentChildren }) {
  return (
    <div className="@container flex w-full flex-col gap-8 md:w-1/2">
      {children}
    </div>
  );
}

function SectionHeader({ children }: { children: ComponentChildren }) {
  return <h2 className="text-text-primary text-3xl font-bold">{children}</h2>;
}

function Person({ name, title }: { name: string; title: string }) {
  return (
    <li className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-600">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-text-primary font-bold">{name}</p>
        <p className="text-text-secondary text-sm">{title}</p>
      </div>
    </li>
  );
}

function OurStory() {
  return (
    <FadeReveal>
      <div className="bg-light-background flex flex-col gap-8 px-8 md:flex-row">
        <Section>
          <SectionHeader>Our mission</SectionHeader>
          <div className="text-text-secondary flex flex-col gap-2 text-lg">
            <p className="italic">
              We are a local church committed to building authentic community,
              sharing life together, and following Jesus in everyday ways.
            </p>
            <p>
              We offer many different types of support to our local community
              including our compassion cafe.
            </p>
            <p>
              We are part of a network of{" "}
              <a className="underline" href="https://fiec.org.uk/">
                FIEC (Fellowship of independent evangelical Churches)
              </a>
              .
            </p>
          </div>
        </Section>
        <Section>
          <SectionHeader>Our team</SectionHeader>
          <div className="text-text-secondary text-md">
            <ul className="grid grid-cols-1 gap-4 @md:grid-cols-2">
              <Person name="Nigel" title="Pastor" />
              <Person name="Jackie" title="Pastoral Support Worker" />
              <Person name="Vanessa" title="Children's leader" />
              <Person name="Tammie" title="Kitchen and cafe manager" />
            </ul>
          </div>
        </Section>
      </div>
    </FadeReveal>
  );
}

export default OurStory;
