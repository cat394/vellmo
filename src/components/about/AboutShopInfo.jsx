import InfoTable from "../InfoTable";
import styles from "../../css/AboutShopInfo.module.css";

export default function AboutShopInfo() {
  const googleMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.449572703873!2d140.087750375863!3d35.91149431729056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60227739fbfb3d7b%3A0x716f9fecd11a6be7!2z44CSMzAwLTE1MzUg6Iyo5Z-O55yM5Y-W5omL5biC5riF5rC077yR77yR77yR77yS!5e0!3m2!1sja!2sjp!4v1686045190572!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  const { aboutShopInfo, block, map } = styles;
  const infos = [
    {
      id: 1,
      title: '店名',
      data: 'Style & Color Vell mo'
    },
    {
      id: 2,
      title: '住所',
      data: '〒300-1535 茨城県取手市清水1112'
    },
    {
      id: 3,
      title: '電話番号',
      data: '0297-85-2407',
    },
    {
      id: 4,
      title: '営業時間',
      data: '9:00～19:00'
    },
    {
      id: 5,
      title: '定休日',
      data: '月曜日、第2・第4の金曜日'
    }
  ];

  return (
    <section className={aboutShopInfo}>
      <div className={block}>
        <div dangerouslySetInnerHTML={{__html: googleMap}} className={map}></div>
        <InfoTable infos={infos} />
      </div>
    </section>
  )
}