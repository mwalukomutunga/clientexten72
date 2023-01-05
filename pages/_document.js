import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = async() =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
        <link 
          rel="stylesheet"
          href="vendor/@fortawesome/fontawesome-free/css/brands.css"
        />
        <link 
          rel="stylesheet"
          href="vendor/@fortawesome/fontawesome-free/css/regular.css"
        />
        <link 
          rel="stylesheet"
          href="vendor/@fortawesome/fontawesome-free/css/solid.css"
        />
        <link 
          rel="stylesheet"
          href="vendor/@fortawesome/fontawesome-free/css/fontawesome.css"
        />
        <link 
          rel="stylesheet"
          href="vendor/simple-line-icons/css/simple-line-icons.css"
        />
        <link rel="stylesheet" href="vendor/animate.css/animate.css" />
        <link rel="stylesheet" href="vendor/whirl/dist/whirl.css"></link>
        <link rel="stylesheet" href="css/bootstrap.css" id="bscss"></link>
        <link rel="stylesheet" href="css/app.css" id="maincss"></link>
        </Head>
        <body>
          <Main />
          <NextScript />          
          <script async src="vendor/modernizr/modernizr.custom.js"></script>
          <script async src="vendor/js-storage/js.storage.js"></script>
          <script async src="vendor/screenfull/dist/screenfull.js"></script>
          <script async src="vendor/i18next/i18next.js"></script>
          <script async src="vendor/i18next-xhr-backend/i18nextXHRBackend.js"></script>
          <script async src="vendor/jquery/dist/jquery.js"></script>
          <script async src="vendor/popper.js/dist/umd/popper.js"></script>
          <script async src="vendor/bootstrap/dist/js/bootstrap.js"></script>

          <script async src="js/app.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
