import React from 'react';
import s from '../UserDetails.module.scss';

const Repo = ({item}:any):JSX.Element => {

  return (
    <div className={s.repo}>
      <h2>{item.name}</h2>
      <div>
        <h3>{item.forks} Forks</h3>
        <h3>{item.stargazers_count} Stars</h3>
      </div>
    </div>
  );
};

export default Repo;
