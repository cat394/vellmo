import { useEffect } from 'react';
import styles from '../../css/About.module.css';
import AboutMe from './AboutMe';
import AboutShop from './AboutShop';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { aboutContainer } = styles;

  return (
    <>
      <h1>About</h1>
      <div className={aboutContainer}>
        <AboutMe />
        <AboutShop />
      </div>
    </>
  )
}
