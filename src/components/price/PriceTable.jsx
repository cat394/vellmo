import { priceData } from '../../priceData.js';
import styles from '../../css/PriceTable.module.css';

export default function PriceTable() {
  const { priceMenu, back, menu, title, tables } = styles;

  const splitByCharacter = (name) => {
    const char = name.includes('＋') ? '＋' : name.includes('(') ? '(' : null;
    if (!char) return [name];
    
    const index = name.indexOf(char);
    return [name.substring(0, index), name.substring(index)];
  };

  return (
    <article className={priceMenu}>
      <div className={back}>
        <div className={menu}>
          <div className={title}>
            <h2>Price list</h2>
          </div>
          <div className={tables}>
            {priceData
              .filter(categoryData => categoryData.title !== "nail")
              .map(categoryData => {
              return (
                <table key={categoryData.title}>
                  <caption>{categoryData.title}</caption>
                  <tbody>
                    {categoryData.plans.map(plan => {
                      const [firstPart, secondPart] = splitByCharacter(plan.name);
                      return (
                        <tr key={plan.name}>
                          <th style={{display: 'flex', flexWrap: 'wrap'}}>
                            {secondPart ? (
                              <>
                                <span>{firstPart}</span>
                                <span style={{flexBasis: 'max-content'}}>{secondPart}</span>
                              </>
                            ) : (
                              firstPart
                            )}
                          </th>
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
