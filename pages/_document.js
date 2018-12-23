import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';


const title = 'funfish的博客';
const defaultDescription = '这是funfish的博客，funfish立志成为一名高级前端工程师';
const defaultOGURL = '';
const defaultOGImage = '';

export default class NiDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='user-scalable=0, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height' />
          <meta name='theme-color' content='yellowgreen' />
          <meta
            name="description"
            content={defaultDescription}
          />
          <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" />
          <link rel="icon" href={`${process.env.BACKEND_URL}/static/avatar.jpg`} />
          <meta property="og:title" content={title} />
          <meta
            property="og:description"
            content={defaultDescription}
          />
          <meta property="og:image" content={defaultOGImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}