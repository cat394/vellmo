
import { Link } from 'react-router-dom';
import styles from './css/Footer.module.css';

export default function Footer() {
  const { footer, footerLine, footerImage, footerLinks, footerLink, copyright } = styles;
  return (
      <footer className={footer}>
        <div className={footerLine}>
          <div className={footerImage}>
            <img src="/assets/vellmo_logo.svg" alt="Vellmoのロゴ" width="100" height="46" />
          </div>
          <div className={footerLinks}>
            <div className={footerLink}>
              <Link to="/">ホーム</Link>
            </div>
            <div className={footerLink}>
              <Link to="support">当サイトについて</Link>
            </div>
            <div className={footerLink}>
              <Link to="contact">お問い合わせ</Link>
            </div>
          </div>
        </div>
        <div className={copyright}>
          <small>© Vell mo, 2023, All right reserved.</small>
        </div>
      </footer>
  )
}