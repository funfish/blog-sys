import React from 'react';
import App, { Container } from 'next/app';
import Head from '../components/Head/Head';
import Nav from '../components/Nav/Nav';
import normalize from 'normalize.css';
import 'highlight.js/styles/atom-one-light.css';
import './global.css';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    const { 
      title, 
      createTimeEN,
      bannerUrl
    } = pageProps;
    // 访问不存在页面
    const isIndex = title === 'funfish的博客' || !title ? true : false;
    return (
      <Container>
        <Head title={title} />
        <Nav 
          hasBackground={isIndex || bannerUrl}
        />     
        <Component {...pageProps} />
      </Container>
    )
  }
}