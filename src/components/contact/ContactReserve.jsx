import styles from '../../css/ContactReserve.module.css';

export default function ContactReserve() {
  const { reservation, cards, card, block, circleTop, circleBottom } = styles;
  
  return (
    <section className={reservation}>
      <h2>ご予約</h2>
      <div className={cards}>
        <div className={card}>
          <h3>電話番号</h3>
          <a href="tel:0297852407">0297-85-2407</a>
        </div>
        <div className={card}>
          <h3>LINE</h3>
          <p>QRコード又はリンクからお友達登録していただくことができます。</p>
          <div className={block}>
            <div className="blockImage">
              <img src="/assets/contact/line.JPG" alt="Vell moのLINEアカウントのQRコード" width="300" height="300" />
            </div>
          </div>
        </div>
      </div>
      <div className={circleTop}></div>
      <div className={circleBottom}></div>
    </section>
  )
}