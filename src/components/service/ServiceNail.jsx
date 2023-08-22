import ServiceCard from "./ServiceCard";
import { priceData } from '../../priceData';

export default function ServiceNail() {
  const nailMenu = priceData.find(data => {
    return data.title === 'nail'
  }).plans;
  const details = {
    color: '#f7fc6e',
    subText: '土曜日限定',
    title: 'Vell mo Nail',
    points: [
      '初回無料！',
      '自店での付け替え無料！',
      '完全個室！',
    ],
    menuList: nailMenu,
    image: {
      commonPath: '/assets/service/',
      heroImage: 'nail-hero.webp',
      heroImageAlt: 'ネイル',
      subImages: [
        {
          path: 'nail1.webp',
          alt: '付け爪の種類'
        },
        {
          path: 'nail2.webp',
          alt: 'ネイル室'
        },
        {
          path: 'nail3.JPG',
          alt: 'Vell mo nail'
        }
      ]
    }
  }

  return <ServiceCard details={details} />
}