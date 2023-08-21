import styles from '../../css/AboutPhotoContainer.module.css';

export default function AboutPhotoContainer(props) {
  const { children } = props;
  const { aboutPhotoContainer } = styles;
  return (
    <div className={aboutPhotoContainer}>
      {children}
    </div>
  )
}