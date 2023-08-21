import styles from '../../css/ContactReserve.module.css';

export default function ContactReserve() {
  const { reservation, cards, card, block, blockLink, circleTop, circleBottom } = styles;
  
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
          <p>QRコードからお友達登録していただくことができます。</p>
          <div className={block}>
            <div className="blockImage">
              <img src="/assets/contact/line.JPG" alt="Vell moのLINEアカウントのQRコード" width="300" height="300" />
            </div>
            <div className={blockLink}>
                <a href='https://line.me/ti/p/RhcSpjpQ90#~'>LINEでお友達登録する</a>
              </div>
          </div>
        </div>
      </div>
      <div className={circleTop}></div>
      <div className={circleBottom}></div>
    </section>
  )
}