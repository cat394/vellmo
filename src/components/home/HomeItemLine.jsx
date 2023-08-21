import ItemLine from "../ItemLine";

export default function HomeItemLine() {
  const commonPath = '/assets/home/';
  const data = [
    {
      id: 1,
      image: 'scissors.svg',
      alt: 'はさみ',
      title: '好きな髪形に',
      description: 'あなたの思う髪型そのものに。'
    },
    {
      id: 2,
      image: 'coffee.svg',
      alt: 'コーヒー',
      title: 'おしゃれな店内',
      description: '誰もが安心してくつろげる、居心地の良い空間です。'
    },
    {
      id: 3,
      image: 'price_tag.svg',
      alt: 'プライスタグ',
      title: '低価格',
      description: '高品質なサービスをお手頃な価格で提供します。'
    }
  ];

  return (
    <ItemLine commonPath={commonPath} details={data} />
  )
}