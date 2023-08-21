import HomeHero from './HomeHero';
import HomeItemLine from './HomeItemLine';
import HomeTextCards from './HomeTextCards';
import styles from '../../css/Home.module.css';
import HomeImageToTextLine from './HomeImageToTextLine';

export default function Home() {
  const { imageToTextLineSpace, itemLineSpace } = styles;
  return (
    <>
      <HomeHero />
      <div className={imageToTextLineSpace}>
        <HomeImageToTextLine />
      </div>
      <div className={itemLineSpace}>
        <HomeItemLine />
      </div>
      <HomeTextCards />
    </>
  )
}