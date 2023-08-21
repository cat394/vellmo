import styles from '../css/TextCards.module.css';
import TextCard from './TextCard';

export default function TextCards(props) {
  const { cards } = styles;
  const { items } = props;

  return (
    <section className={cards}>
      {items.map(item => <TextCard details={item} key={item.id} />)}
    </section>
  );
}