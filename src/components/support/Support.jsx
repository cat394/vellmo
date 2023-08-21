import Divider from '../Divider';
import SupportCredit from "./SupportCredit";
import SupportPolicy from "./SupportPolicy";
import SupportDisclaimer from "./SupportDisclaimer";
import styles from '../../css/Support.module.css';

export default function Support() {
  return (
    <div className={styles.support}>
      <h1>Support</h1>
      <SupportCredit />
      <Divider marginBlock="10vh" />
      <SupportPolicy />
      <Divider marginBlock="10vh" />
      <SupportDisclaimer />
    </div>
  )
}