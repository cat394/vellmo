import styles from "../css/ItemLine.module.css";

export default function ItemLine(props) {
  const { itemLine, items, block, blockText } = styles;
  const { commonPath='', details=[] } = props;

  return (
    <section className={itemLine}>
      <ul className={items}>
        {details.map(detail => {
          return (
            <div className={block} key={detail.id}>
              <img src={commonPath + detail.image} alt={detail.alt} width="64" height="64" />
              <div className={blockText}>
                <h2>{detail.title}</h2>
                <p>{detail.description}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </section>
  )
}