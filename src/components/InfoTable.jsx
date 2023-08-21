import styles from '../css/InfoTable.module.css';

/*
@props infos [Array]


*/ 

export default function InfoTable(props) {
  const { table } = styles;
  const { infos } = props;
  return (
    <table className={table}>
      <tbody>
        {infos.map(info => {
          return (
            <tr key={info.id}>
              <th>{info.title}</th>
              <td>{info.data}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}