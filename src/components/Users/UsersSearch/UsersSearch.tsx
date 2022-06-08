import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { debounce } from '../../../core/helpers';
import { User } from '../../../core/types';
import { getUsers } from '../../../hooks/fetchData';
import { Store } from '../../../store';
import Input from '../../Input/Input';
import OneCardUser from '../OneCardUser/OneCardUser';
import s from '../Users.module.scss';

const UsersSearch = ():JSX.Element => {

  const dispatch: Dispatch<any> = useDispatch()
  const data = useSelector((state:Store)=>state.usersReducer.users);
  const optimiz = debounce((userName:string) => dispatch(getUsers(userName)));

  return (
  <div className={s.wrapper}> 
    <Input 
      type="search"
      placeholder='Search for users'  
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>optimiz(e.target.value)}
    />
    {data.length > 0  ? data.map((item:User,i:number) => <OneCardUser item={item} key={i}/>) : <>Users not found</>}
  </div>
  )
}

export default UsersSearch;
