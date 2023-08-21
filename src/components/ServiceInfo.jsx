import styles from '../css/ServiceInfo.module.css';

/*
@props details { Object }

{ 
  heroImage: 'HERO IMAGE PATH',
  image: 'IMAGE PATH',
  title: 'TITLE', 
  subTitle: 'SUBTITLE',
  menuName: 'MENU NAME', 
  infos: [
    {
      title: 'nail',
      plans: [
        {
          title: 'nail',
          plans: [
            {
              name: '一般',
              price: '3200'
            },
            {
              name: '中高生',
              price: '2000'
            },
            {
              name: '小学生',
              price: '1500'
            },
            {
              name: '幼児',
              price: '1000'
            }
          ]
        }
      ],
      supportInfos: [
        'Support sentense 1',
        'Support sentense 2',
        'Support sentense 3'
      ]
    } 
  ]


*/ 

export default function ServiceInfo(props) {
  const { 
    serviceInfo, 
    hero, 
    heroText, 
    block, 
    blockMenu, 
    blockMenuTitle, 
    blockMenuTable, 
    blockMenuTableSupport, 
    blockImage 
  } = styles;

  const { details } = props;
  const { 
    heroImage, 
    image, 
    imageWidth, 
    imageHeight, 
    title, 
    subTitle, 
    menuName, 
    infos, 
    supportInfos 
  } = details;

  return (
    <section className={serviceInfo}>
      <div className={hero} style={{backgroundImage: `url(${heroImage})`}}>
        <div className={heroText}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </div>
      <div className={block}>
        <div className={blockMenu}>
          <div className={blockMenuTitle}>
            <h3>{menuName}</h3>
          </div>
          <div className={blockMenuTable}>
            <table>
              <tbody>
                {infos.plans.map(plan => {
                  return (
                    <tr key={plan}>
                      <th>{plan.name}</th>
                      <td>{plan.price}円</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={blockMenuTableSupport}>
              {supportInfos && <ul>
                {supportInfos.map(supportInfo => {
                  return (
                    <li key={supportInfo}>{supportInfo}</li>
                  )
                })}
              </ul>}
            </div>
          </div>
        </div>
        <div className={blockImage}>
          <img src={image} alt={title} width={imageWidth} height={imageHeight} />
        </div>
      </div>
    </section>
  )
}