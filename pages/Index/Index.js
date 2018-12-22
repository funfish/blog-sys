import { PureComponent } from 'react'
// import Link from 'next/link';
import Router from 'next/router';
import Banner from '../../components/Banner/Banner';
import request from '../../utils/request';
import styles from './Index.less';

export default class Home extends PureComponent {
  static async getInitialProps({ pathname, query, asPath, req, res, jsonPageRes  }) {
    if (!res) query = await request('/api/post/getPostList');
    return {
      postList: query.data || []
    }
  }

  openPost = (data) => {
    Router.push(`/post/${data.title}`, `${process.env.BACKEND_URL}/post/${data.title}`);
  }

  render () {
    return (
      <>
        <Banner 
          title="funfish的坚客" 
          isIndex={true}
        />
        <div className={styles.postListWrapper}>
          {this.props.postList.map(item => (
            <section 
              className={`${styles.postPreview} post-article`} 
              key={item.id}
              onClick={() => this.openPost(item)}
            >
              <h2 className={styles.postTitle}>{item.title}</h2>
              <div 
                className={styles.postContent}
                dangerouslySetInnerHTML={{__html: item.content}}
              >
              </div>
              <p className={styles.postTime}>
                Posted by Funfish on {item.createTimeEN}
              </p>
            </section>
          ))}
        </div>
      </>
    )
  }
}
