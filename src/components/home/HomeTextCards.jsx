import TextCards from "../TextCards";

export default function HomeTextCards() {
  const data = [
    {
      id: 1,
      title: 'お店について',
      description: '外観や店内の雰囲気、住所などの詳しい情報はこちらです。',
      path: '/about',
      bgColor: 'rgb(201 53 53)'
    },
    {
      id: 2,
      title: '料金体系',
      description: 'カット、カラー、パーマなどの豊富なメニューを用意しています。',
      path: '/price',
      bgColor: 'rgb(63 117 172)'
    },
    {
      id: 3,
      title: '製品一覧',
      description: 'Vell moでは様々な美容アイテムも取り扱っております。',
      path: '/products',
      bgColor: 'rgb(63 172 126)'
    },
    {
      id: 4,
      title: 'その他サービス',
      description: '美容カプセル、着付けやネイルといったサービスも行っています。',
      path: '/service',
      bgColor: 'rgb(106 63 172)'
    }
  ];
  
  return (
    <TextCards items={data} />
  );
}