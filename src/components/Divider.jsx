import styles from '../css/Divider.module.css';

export default function Divider(props) {
  return (
    <div className={styles.divider} style={{marginBlock: props.marginBlock}}></div>
  )
}