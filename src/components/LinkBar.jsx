import styles from '../css/LinkBar.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
/*
@props links [ Array ]

links →  [
    {
      id: ID,
      text: 'LINKTEXT',
      to: 'PATH',
    },
    ...
  ]

*/ 

export default function LinkBar(props) {
  const { linkBar, link, navLink, linkActive } = styles;
  const { links } = props;
  return (
    <section className={linkBar}>
      {links.map(data => {
        return (
          <div className={link} key={data.id}>
            <NavLink 
              to={data.to} 
              className={({isActive}) => clsx({[linkActive]: isActive, [navLink]: true})}
              end
            >
              {data.text}
            </NavLink>
          </div>
        )
      })}
    </section>
  );
}
