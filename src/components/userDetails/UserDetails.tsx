import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Params, useParams } from 'react-router-dom';
import { Dispatch } from 'redux';
import { UserRepos } from '../../core/types';
import { getUsersDetails, getUsersRepo } from '../../hooks/fetchData';
import { Store } from '../../store';
import ButtonHome from '../buttonHome/ButtonHome';
import Input from '../Input/Input';
import Repo from './repos/Repo';
import s from './UserDetails.module.scss';

const UserDetails = ():JSX.Element => {

  const [value,setValue] = useState<string>('');
  const {id}  = useParams()
  const dispatch: Dispatch<any> = useDispatch()
  useEffect(() => {
    dispatch(getUsersDetails(id!))
    dispatch(getUsersRepo(id!))
  },[dispatch,id]);
  const {avatar_url,location,bio,following,followers,email,login,created_at} = useSelector((state:Store) => state.usersReducer.userDetails);
  const repos = useSelector((state:Store) => state.usersReducer.usersRepo);
  const handChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const filteredRepos = repos.filter((repo) =>  repo.name.toLowerCase().includes(value.toLowerCase()))
  

  return (
    <div className={s.wrap}>
      <ButtonHome/>
      <div className={s.WrapperDetails}>
        <img src={avatar_url} alt="avatar" className={s.WrapperDetails__avatar}/>
        <div className={s.WrapperDetails__info}>
          <p>UserName: <span>{login}</span></p>
          <p>Email: <span>{email ? email : "no Email"}</span></p>
          <p>Location: <span>{location}</span></p>
          <p>Join Date: <span>{created_at}</span></p>
          <p>Followers: <span>{followers}</span></p>
          <p>Following: <span>{following}</span></p>
        </div>
      </div>
      <p>{bio ? bio : "This is their biography. It may be long and needs to all fit"}</p>
      <div className={s.WrapRepo}>
        <Input type='search' onChange={handChange} placeholder="Search for Users Repositories"/>
        {filteredRepos && filteredRepos.map((item:UserRepos,i:number) => <Repo item={item} key={i}/>)}
      </div>
    </div>
  )
}

export default UserDetails;
