import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ButtonHome.module.scss';

const ButtonHome = ():JSX.Element => {

  const navigate = useNavigate()

  return (
    <div className={s.homeBtn} onClick={() => navigate('/')}>
      <button>Go Home</button>
    </div>
  );
};

export default ButtonHome;
