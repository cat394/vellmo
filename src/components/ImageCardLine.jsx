import styles from '../css/ImageCardLine.module.css';
import ImageCard from "./ImageCard";

/*
@props products [ Array ]

products → [
  {
    name: 'NAME',
      description: 'DESCRIPTION',
      categories: [
        'CATEGOLY1',
        'CATEGOLY2',
        'CATEGOLY3
      ],
      image: 'IMAGE URL'
    },
    ...
]


*/ 

export default function ImageCardLine(props) {
  const { products } = props;

  return (
    <div className={styles.imageCardLine}>
      {products.map(product => <ImageCard product={product} key={product} />)}
    </div>
  )
}