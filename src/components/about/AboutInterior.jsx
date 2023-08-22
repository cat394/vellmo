import AboutPhotoContainer from "./AboutPhotoContainer";

export default function AboutInterior() {
  const data = {
    commonPath: '/assets/about/interior_',
    images: [
      {
        id: 1,
        path: 'image1.JPG',
        alt: 'ソファー',
        width: '375',
        height: '500'
      },
      {
        id: 2,
        path: 'image2.webp',
        alt: '美容室の椅子',
        width: '667',
        height: '500'
      },
      {
        id: 3,
        path: 'image3.JPG',
        alt: 'オシャレな商品',
        width: '667',
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