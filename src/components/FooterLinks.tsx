import BackgroundShade from "./BackgroundShade";
import FadeReveal from "./FadeReveal";
import fbLogo from "assets/fb_logo.png";
import mail from "assets/mail.svg";
import phone from "assets/phone.svg";
import pin from "assets/pin.svg";

const Logo = () => {
  return <img className="h-8 w-8" src={fbLogo.src} alt="Facebook logo" />;
};

function SocialLinks() {
  return (
    <div className="flex flex-col gap-4">
      {/* <h2 className="text-text-inverse text-2xl font-bold">Follow us</h2> */}
      <div className="flex w-full flex-row justify-center gap-2">
        <a href="https://www.facebook.com/Priors.Park.Chapel">
          <Logo />
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
      <img src={icon} alt="" className="h-6 w-6" />
      <h2 className="text-text-inverse text-xl font-bold">{header}</h2>
      <p className="text-text-inverse">{text}</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <FadeReveal>
      <BackgroundShade color="yellow" direction="right">
        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-8">
          <CTA
            icon={mail.src}
            header="Email Us"
            text="office@priorsparkcommunitychurch.co.uk"
          />
          <CTA icon={phone.src} header="Call Us" text="07307 079129" />
          <CTA
            icon={pin.src}
            header="Visit Us"
            text="Queens Road, Tewkesbury GL20 5EY"
          />
        </div>
        <SocialLinks />
      </BackgroundShade>
    </FadeReveal>
  );
}

export default FooterLinks;
