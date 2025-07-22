import logo from "../assets/logo.png";

function BackHomeLogo() {
  return (
    <div className="grid flex-shrink-0 place-items-center p-8">
      <a href="/" aria-label="Back to home">
        <img src={logo.src} className="aspect-auto h-32" alt="" />
      </a>
    </div>
  );
}

export default BackHomeLogo;
