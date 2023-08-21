import styles from '../../css/AboutMe.module.css';

export default function AboutMe() {
  const { container, comment, block2, block2Title, block2Text } = styles;

  return (
    <section className={container}>
      <div className={comment}>
        <div className={block2}>
          <div className={block2Title}>
            <h2>あいさつ</h2>
          </div>
          <div className={block2Text}>
            <p>はじめまして。Vell mo美容室のオーナー兼スタイリストの浜野圭子と申します。<br />私はこのお店で、お客様の美と自信を引き出すお手伝いをさせていただいております。<br />Vell mo美容室は、お客様がリラックスでき、自分自身を最高に感じることができる環境を提供することを心掛けています。</p>
          </div>
        </div>
      </div>
    </section>
  )
}