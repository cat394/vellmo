import styles from '../css/ImageCard.module.css';
import Pills from './Pills';

/*
@props product { Object }
@props categories [ Array ]

product → {
  name: 'productName', 
  description: 'productDescription', 
  categories: [
      'category1',
      'category2',
      'category3'
    ],
    image: 'url'
  }

*/


export default function ImageCard(props) {
  const { product } = props; 
  const { imageCard, block, blockDescription, blockImage, blockPills, blockText } = styles;

  return (
    <article className={imageCard}>
      <div className={block}>
        <div className={blockImage}>
          <img src={product.image} alt={product.name} width="500" height="375" />
        </div>
        <div className={blockDescription}>
          <div className={blockPills}>
            <Pills categories={product.categories} />
          </div>
          <div className={blockText}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </article>
  )
}