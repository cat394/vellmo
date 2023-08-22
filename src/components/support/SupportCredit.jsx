import styles from '../../css/SupportCredit.module.css';

export default function SupportCredit() {
  const { supportCredit, container, imageContainer } = styles

  return (
    <section className={supportCredit}>
      <h2>クレジット</h2>
      <p>当サイトで使用した以下の画像は、Freepik様にてフリーで出されている画像になります。<br />その他の当店の画像の権利は、「Style & Color Vell mo」に帰属しますが、個人利用や、SNS・Google Mapなどへの投稿は自由にして構いません。ただし、商用利用を目的とする場合に関しては、お問い合わせください。</p>
      <div className={container}>
        <figure>
          <div className={imageContainer}>
            <img src="/assets/home/hero.webp" alt="flower" width="600" height="400" />
          </div>
          <figcaption>著作者：<a href="https://jp.freepik.com/free-vector/watercolor-floral-background_7938347.htm#&position=0&from_view=collections" target='_blink'>pikisuperstar</a>／出典：Freepik</figcaption>
        </figure>
        <figure>
        <div className={imageContainer}>
          <img src="/assets/service/nail-hero.webp" alt="nail" width="600" height="400" />
        </div>
        <figcaption>著作者：<a href="https://www.freepik.com/free-photo/healthy-beautiful-manicure-manicurist_11296770.htm#query=nail&position=2&from_view=search&track=sph">Freepik</a></figcaption>
      </figure>
      </div>
    </section>
  )
}