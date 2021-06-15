import Document, { Html, Head, Main, NextScript } from "next/document";

const getLangFromReq = (req = {}) => {
  const headers = req.headers || {};
  const acceptLanguage = headers["accept-language"];
  return acceptLanguage && acceptLanguage.length > 0
    ? acceptLanguage.split(",")[0]
    : "en";
};

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = getLangFromReq(ctx.req);
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link
            rel="preload"
            crossOrigin="anonymous"
            as="font"
            href="/assets/fonts/Roboto/Roboto-Regular.ttf"
          />
          <link
            rel="preload"
            crossOrigin="anonymous"
            as="font"
            href="/assets/fonts/Roboto/Roboto-Bold.ttf"
          />
          <link
            rel="preload"
            crossOrigin="anonymous"
            as="font"
            href="/assets/fonts/Roboto/Roboto-Light.ttf"
          />
          <link
            rel="preload"
            crossOrigin="anonymous"
            as="font"
            href="/assets/fonts/Roboto/Roboto-Italic.ttf"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/icon-256x256.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icon-512x512.png"
          />

          <link rel="apple-touch-icon" sizes="32x32" href="/favicon.ico" />

          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="mask-icon" href="/logo.svg" color="#5bbad5" />

          <link rel="shortcut icon" href="/favicon.ico" />

          <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
