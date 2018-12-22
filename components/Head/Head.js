import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultTitle = 'funfish 的博客';

const Head = props => (
  <NextHead>
    <title>{props.title || defaultTitle}</title>
  </NextHead>
)

Head.propTypes = {
  title: string,
}

export default Head
