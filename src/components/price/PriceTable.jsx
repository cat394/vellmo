import { priceData } from '../../priceData.js';
import styles from '../../css/PriceTable.module.css';

export default function PriceTable() {
  const { priceMenu, back, menu, title, tables, dot, dot1, dot2, dot3, dot4, triangleTop, triangleBottom } = styles;

    return(
      <article className={priceMenu}>
        <div className={back}>
          <div className={menu}>
            <div className={title}>
              <h2>Price list</h2>
            </div>
            <div className={tables}>
              {priceData.map(categoryData => {
                return (
                  <table key={categoryData}>
                    <caption>{categoryData.title}</caption>
                    <tbody>
                      {categoryData.plans.map(plan => {
                        return (
                          <tr key={plan}>
                            <th>{plan.name}</th>
                            <td>{plan.price}円</td>

                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )
              })}
            </div>
          </div>
        </div>

        
      </article>
    )
}