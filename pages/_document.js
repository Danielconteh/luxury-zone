import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
       <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,100&family=Merriweather:ital,wght@0,300;1,300&family=Roboto:ital,wght@0,100;0,300;1,100&display=swap" rel="stylesheet"/> 
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
