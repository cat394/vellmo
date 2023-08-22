import ServiceNail from './ServiceNail';
import styles from '../../css/Service.module.css';

export default function Service() {
  return (
    <>
      <h1>Service</h1>
      <div className={styles.service}>
        <ServiceNail />
        {/* <ServiceCapsule /> */}
      </div>
    </>
  )
}