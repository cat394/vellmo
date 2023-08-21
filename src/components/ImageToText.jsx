import clsx from 'clsx';
import styles from '../css/ImageToText.module.css';


export default function ImageToText(props) {

  // CSSスタイルの受け取り
  const { imageToText, block, blockText, blockImage } = styles;

  // propsの受け取り
  const { evenReverse='', circle='', commonPath='', detail={} } = props;

  // propsから渡されたオブジェクトdetailの分解
  const { title, description, image, alt, width, height} = detail;

  // evenReverse属性が渡されたら、CSSの.evenReverseを適用させる
  const blockClasses = clsx({
      [styles.block]: true,
      [styles.evenReverse]: evenReverse
    }
  )

  // circle属性が渡されたら、CSSの.circleを適用させる
  const blockImageClasses = clsx({
    [styles.blockImage]: true,
    [styles.circle]: circle
  })

  return (
    <div className={imageToText}>
      <div className={blockClasses}>
        <div className={blockImageClasses}>
          <img src={commonPath + image} alt={alt} width={width} height={height} />
        </div>
        <div className={blockText}>
          {title && <h3>{title}</h3>}
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}