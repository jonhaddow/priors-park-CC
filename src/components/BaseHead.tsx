const title = "Priors Park Community Church";
const description = "The heart of the community";

interface BaseHeadProps {
  url: URL;
  site: URL | undefined;
}

const BaseHead = ({ url, site }: BaseHeadProps) => {
  const canonicalURL = new URL(url.pathname, site);

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      {/* <!-- Canonical URL --> */}
      <link rel="canonical" href={canonicalURL.toString()} />
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url.toString()} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url.toString()} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="/assets/icon/logo-32x32.png" sizes="32x32" />
      <link rel="icon" href="/assets/icon/logo-192x192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/assets/icon/logo-180x180.png" />
      <meta
        name="msapplication-TileImage"
        content="/assets/icon/logo-270x270.png"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default BaseHead;
