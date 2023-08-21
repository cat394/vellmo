import ServiceCard from "./ServiceCard";
import { priceData } from '../../priceData';

export default function ServiceNail() {
  const otherData = priceData.find(categoryData => categoryData.title === 'other');

  const capsuleMenu = otherData.plans.filter(plan => plan.name.includes('コラーゲンカプセル'));


  const details = {
    color: 'rgb(217, 133, 149)',
    subText: 'いつでも予約可能',
    title: 'Vell mo Capsule',
    points: [
      '入会金なし！',
      'キャンセル料なし！',
      'パウダールームあり！',
      '日本製のカプセル！'
    ],
    menuList: capsuleMenu,
    image: {
      commonPath: './src/assets/service/',
      heroImage: 'capsule-hero.png',
      heroImageAlT: 'コラーゲンカプセル'
    }
  }

  return <ServiceCard details={details} />
}