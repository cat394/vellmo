import { useEffect } from 'react';
import styles from '../../css/About.module.css';
import AboutMe from './AboutMe';
import AboutShop from './AboutShop';

export default function About() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timerId);
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
