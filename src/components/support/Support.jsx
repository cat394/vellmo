import SupportCredit from "./SupportCredit";
import SupportPolicy from "./SupportPolicy";
import SupportDisclaimer from "./SupportDisclaimer";
import styles from '../../css/Support.module.css';

export default function Support() {
  return (
    <div className={styles.support}>
      <h1>Support</h1>
      <SupportCredit />
      <div style={{height: "15vh"}}></div>
      <SupportPolicy />
      <div style={{height: "13vh"}}></div>
      <SupportDisclaimer />
    </div>
  )
}