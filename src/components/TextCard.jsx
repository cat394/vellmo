import { Link } from 'react-router-dom';
import styles from '../css/TextCard.module.css';

export default function TextCard(props) {
  const { card, block, blockText, button } = styles;
  const { details } = props;
  
  return (
    <article className={card} style={{backgroundColor: `${details.bgColor}`}}>
        <div className={block}>
          <div className={blockText}>
            <h3>{details.title}</h3>
            <p>{details.description}</p>    
          </div>
          <div>
            <Link to={details.path} className={button}>
              詳しく見る
            </Link>
          </div>
        </div>
      </article>
  );
}