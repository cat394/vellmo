import styles from '../css/Pills.module.css';

/*
  @props categories [ Array ]


*/ 
export default function Pills(props) {
  const { pills, pill } = styles;
  const { categories } = props;

  return (
    <ul className={pills}>
      {categories.map((category, index) => {
        return (
          <li className={pill} key={index}>
            <span>{category}</span>
          </li>
        )
      })}
    </ul>
  )
}