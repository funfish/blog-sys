import PropTypes from 'prop-types';
import styles from './Banner.less';

const Banner = props => {
  const { 
    isIndex,
    bannerUrl,
    title,
    createTimeEN
  } = props;

  return (
    <>
      {
        isIndex || bannerUrl ? (
          <header
            style={{
              backgroundImage: isIndex ? `url(${process.env.BACKEND_URL}/static/snowfield.jpg)` : `url(${bannerUrl})`,
              backgroundSize: isIndex ? 'cover' : 'contain'
            }}
            className={styles.banner}
          >
            <div className={styles.mask}></div>
            <div className={isIndex ? styles.indexTitleWrap : styles.postTitleWrap}>
              <h1 className={styles.postTitle}>{isIndex ? 'Funfish Blog' : title}</h1>
              <p>{isIndex ? '纸上得来终觉浅，绝知此事要躬行' : createTimeEN}</p>
            </div>
          </header>
        ) : (
          <header className={styles.bannerWithoutImg}>
            <h1 className={styles.postTitle}>{title}</h1>
            <span className={styles.postTime}>{createTimeEN}</span>      
          </header>
        )
      }
    </>
  )
}

Banner.propTypes = {
  isIndex: PropTypes.bool,
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  creatTime: PropTypes.string
}

export default Banner;