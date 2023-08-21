import { Outlet } from 'react-router-dom';
import AboutLinkBar from './AboutLinkBar';
import styles from '../../css/AboutShop.module.css';

export default function AboutShop() {
  const { aboutShop, links, aboutShopContainer } = styles;
  return (
    <div className={aboutShop}>
      <h2>Shop information</h2>
      <div className={links}>
        <AboutLinkBar />
      </div>
      <div className={aboutShopContainer}>
        <Outlet />
      </div>
    </div>
  )
}
