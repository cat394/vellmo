import AboutPhotoContainer from "./AboutPhotoContainer";

export default function AboutInterior() {
  const data = {
    commonPath: '/assets/about/exterior_',
    images: [
      {
        id: 1,
        path: 'image1.jpg',
        alt: 'Vell moの店舗',
        width: '375',
        height: '500'
      },
      {
        id: 2,
        path: 'image2.jpg',
        alt: 'Vell moの立札',
        width: '661',
        height: '500'
      },
      {
        id: 3,
        path: 'image3.JPG',
        alt: 'Vell moの玄関',
        width: '667',
        height: '500'
      },
      {
        id: 4,
        path: 'image4.jpg',
        alt: 'ネイル室へと続く脇道',
        width: '375',
        height: '500'
      }
    ]
  }

  const { commonPath, images } = data;
  return(
    <AboutPhotoContainer>
      {images.map(image => {
        return(
          <div key={image.id}>
            <img src={commonPath + image.path} alt={image.alt} width={image.width} height={image.height} />
          </div>
        )
      })}
    </AboutPhotoContainer>
  )
}