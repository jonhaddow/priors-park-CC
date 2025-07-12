import BackgroundShade from "./BackgroundShade";
import FadeReveal from "./FadeReveal";
import fbLogo from "assets/fb_logo.png";

const Logo = () => {
  return <img className="h-8 w-8" src={fbLogo.src} alt="" />;
};

function SocialLinks() {
  return (
    <FadeReveal>
      <BackgroundShade color="yellow" direction="right">
        <div className="flex flex-col gap-4">
          <h2 className="text-text-inverse text-2xl font-bold">Follow us</h2>
          <div className="flex w-full flex-row justify-center gap-2">
            <a href="https://www.facebook.com/Priors.Park.Chapel">
              <Logo />
            </a>
          </div>
        </div>
      </BackgroundShade>
    </FadeReveal>
  );
}

export default SocialLinks;
