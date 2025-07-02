import type { ComponentChildren } from "preact";
import FadeReveal from "./FadeReveal";

function Section({ children }: { children: ComponentChildren }) {
  return <div className="flex w-full flex-col gap-4 md:w-1/2">{children}</div>;
}

function SectionHeader({ children }: { children: ComponentChildren }) {
  return <h2 className="text-text-primary text-2xl font-bold">{children}</h2>;
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
      <div className="bg-light-background flex flex-col gap-12 p-8 md:flex-row">
        <Section>
          <SectionHeader>Our mission</SectionHeader>
          <div className="text-text-secondary text-md italic">
            We are a local church committed to building authentic community,
            sharing life together, and following Jesus in everyday ways.
          </div>
        </Section>
        <Section>
          <SectionHeader>Our team</SectionHeader>
          <div className="text-text-secondary text-md">
            <ul className="flex flex-col gap-4">
              <Person name="Nigel Haddow" title="Pastor" />
              <Person name="Jackie Haddow" title="Pastoral Support Worker" />
            </ul>
          </div>
        </Section>
      </div>
    </FadeReveal>
  );
}

export default OurStory;
