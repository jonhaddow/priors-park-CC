import BackgroundShade from "./BackgroundShade";
import FadeReveal from "./FadeReveal";
import fbLogo from "assets/fb_logo.png";
import mail from "assets/mail.svg";
import phone from "assets/phone.svg";
import pin from "assets/pin.svg";
import type { Config } from "types";

function SocialLinks({ facebook }: { facebook: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-row justify-center gap-2">
        <a href={facebook}>
          <img className="h-8 w-8" src={fbLogo.src} alt="Facebook logo" />
        </a>
      </div>
    </div>
  );
}

function CTA({
  icon,
  header,
  text,
}: {
  icon: string;
  header: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img loading="lazy" src={icon} alt="" className="h-6 w-6" />
      <h2 className="text-xl font-bold">{header}</h2>
      <p>{text}</p>
    </div>
  );
}

function FooterLinks({ config }: { config: Config }) {
  return (
    <FadeReveal>
      <BackgroundShade color="yellow" direction="right">
        <div className="flex w-full flex-col gap-16">
          <div className="text-text-inverse flex w-full flex-row flex-wrap items-center justify-around gap-8 gap-y-16">
            <CTA icon={mail.src} header="Email Us" text={config.email} />
            <CTA icon={phone.src} header="Call Us" text={config.phone} />
            <CTA icon={pin.src} header="Visit Us" text={config.address} />
          </div>
          <SocialLinks facebook={config.facebook} />
        </div>
      </BackgroundShade>
    </FadeReveal>
  );
}

export default FooterLinks;
