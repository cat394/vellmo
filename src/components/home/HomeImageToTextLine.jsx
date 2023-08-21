import ImageToTextLine from "../ImageToTextLine";

export default function HomeImageToTextLine() {
  const commonPath = '/assets/home/';
  const data = [
    {
      id: 1,
      title: '',
      description: '細い道を入ったところにあるオシャレな美容室',
      image: 'parking.JPG',
      alt: 'Vell moの外観',
      width: '600',
      height: '454' 
    },
    {
      id: 2,
      title: '',
      description: '植物に囲まれた、穏やかな時間',
      image: 'wall.jpg',
      alt: 'Vell moの駐車場',
      width: '600',
      height: '800'
    },
    {
      id: 3,
      title: '',
      description: '扉の先でお待ちしております。',
      image: 'front.JPG',
      alt: 'Vellの玄関',
      width: '600',
      height: '450'
    }
  ];
  
  return <ImageToTextLine gap="100px" circle evenReverse commonPath={commonPath} details={data}/>
}