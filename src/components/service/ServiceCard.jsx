import styles from '../../css/ServiceCard.module.css';

/*
@props details { Object }

details → {
  color: 'COLOR',
  subText: 'SUBTEXT',
  title: 'TITLE',
  points: [
    'POINT1',
    'POINT2',
    'POINT3',
  ],
  menuList: [
    {
      name: 'NAME',
      price: 'PRICE'
    },
    ...
  ],
  image: {
    commonPath: 'COMMONPATH',
    heroImage: 'HEROIMAGE PATH',
    heroImageALT: 'HEROIMAGE ALT',
    subImages: [
      {
        path: 'SUBIMAGE1 PATH',
        alt: 'SUBIMAGE1 ALT'
      },
      ...
    ]
  }
}

*/ 

export default function ServiceCard(props) {

  const { details } = props;
  const { color, subText, title, points, menuList, image } = details;
  const { commonPath, heroImage, heroImageAlt, subImages } = image;

  const { block, blockLeft, blockRight, text, textLeft, textRight, container, menu, pictures, circle } = styles;

  return (
    <article>
      <div className={block}>
        <div className={blockLeft}>
          <img src={commonPath + heroImage} alt={heroImageAlt} />
          <div className={text}>
            <div className={textLeft}>
              {subText && <p>{subText}</p>}
              <h2>{title}</h2>
            </div>
            <div className={textRight}>
              <h3>POINT</h3>
              <ul>
                {points.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className={blockRight}>
          <div className={container}>
            <div className={menu}>
              <table>
                <caption>MENU</caption>
                <tbody>
                  {menuList.map(menuItem => {
                    return (
                      <tr key={menuItem}>
                        <th>{menuItem.name}</th>
                        <td>{menuItem.price}円</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={pictures}>
          {subImages.map(subImage => {
            return <img src={commonPath + subImage.path} alt={subImage.alt} key={subImage}/>
          })}
        </div>
        <div className={circle} style={{backgroundColor: color}}></div>
      </div>
    </article>
  )
}