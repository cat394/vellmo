import styles from '../../css/HomeHero.module.css';
import { Link } from 'react-router-dom';

export default function HomeHero() {
  const { hero, text, title, small, large } = styles;

  return (
    <div className={hero}>
      <div className={text}>
        <h1>
          <span className={title}>
            <span className={small}>Style & Color</span>
            <span className={large}>Vell mo</span>
          </span>
        </h1>
        <p>茨城県取手市にある小さな美容室</p>
        <Link to='/contact/#reserve'>予約する</Link>
      </div>
    </div>
  );
}