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

function NetworkLink({
  href,
  children,
}: {
  href: string;
  children: ComponentChildren;
}) {
  return (
    <li>
      <a className="underline hover:no-underline" href={href}>
        {children}
      </a>
    </li>
  );
}

function OurStory() {
  return (
    <FadeReveal>
      <div className="bg-light-background px-8 lg:px-32">
        <div className="flex flex-col gap-16 md:flex-row">
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
            </div>
            <SectionHeader>Network</SectionHeader>
            <div className="text-text-secondary text-md">
              <ul className="ml-4 list-disc">
                <NetworkLink href="https://fiec.org.uk/">
                  FIEC (Fellowship of independent evangelical Churches)
                </NetworkLink>
                <NetworkLink href="https://tewkesbury.church/">
                  Tewkesbury Churches Together
                </NetworkLink>
              </ul>
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
      </div>
    </FadeReveal>
  );
}

export default OurStory;
