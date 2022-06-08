import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from '../Users.module.scss';

const OneCardUser = ({item}:any):JSX.Element => {

  const navigate = useNavigate();
 
  return (
    <div className={s.user} onClick={() => navigate(`/user/${item?.login}`)}>
      <img src={item?.avatar_url} alt="userAvatar"/>
      <h3>{item?.login}</h3>
      <h4>Repo:</h4>
    </div>
  );
};

export default OneCardUser;
