import Link from 'next/link';
import styles from './Nav.less';

export default props => {
  const hasBackground = props.hasBackground;
  return (
    <nav className={`${styles.nav} ${hasBackground ? styles.hasBannerImg : ''}`}>
      <Link href="/" as={`${process.env.BACKEND_URL}/`}>
        <a className={styles.logo}>Funfish Blog</a>
      </Link>
      <ul>
        <li>
          <Link href="/" as={`${process.env.BACKEND_URL}/`}>
            <a className={styles.link} style={{}}>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}