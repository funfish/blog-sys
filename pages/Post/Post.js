import { PureComponent } from 'react'
// import Link from 'next/link';
import Router from 'next/router'
import Banner from '../../components/Banner/Banner';
import request from '../../utils/request';
import styles from './Post.less';

export default class Home extends PureComponent {
  static async getInitialProps({ pathname, query, asPath, req, res, jsonPageRes  }) {
    if (!res) {
      const title = query.title;
      query = await request(`/api/post/${title}`);
    }
    const data = query.data || {};
    return data
  }

  render () {
    const { 
      content, 
      title,
      createTimeEN, 
      bannerUrl 
    } = this.props;
    return (
      <>
        <Banner
          title={title}
          createTimeEN={createTimeEN}
          bannerUrl={bannerUrl}
        />   
        <article className={`${styles.postWrapper} post-article`}>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </div>
        </article>
      </>
    )
  }
}
