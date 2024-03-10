import React, { useContext, useEffect, useState } from 'react'
import Layout from './Layout';
import HttpClient from '../HttpClient';
import CreateArticle from '../Components/CreateArticle';
import { ModalPage } from '../Common/ModelPage';
import Article from '../Components/Article';
import { UserContext } from '../Contexts/UserContext';
import Avatar from '../Common/Avatar';
import { cards } from '../Utils/CssClasses';

import {
  CalendarDaysIcon,
  CakeIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState('');
  const [user] = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  }

  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const { data: { data }, status } = await HttpClient.get('/article');
    if (status === 200) {
      setArticles(data);
    }
  }

  const postArticle = async (payload) => {
    const { data: { data }, status } = await HttpClient.post('/article/create', payload);
    if (status === 200) {
      getArticles(data);
      toggleModal();
    }
  }

  const getUsers = async () => {
    const { data: { data }, status } = await HttpClient.get('/user/list');
    if (status === 200) {
      const list = data.map(x => {
        return { _id: x._id, name: x.firstName + ' ' + x.lastName, avatar: x.avatar }
      })
      setUsers(list);
    }
  }
  useEffect(() => {
    getUsers();
    getArticles();
  }, []);

  const events = [
    { type: 1, title: 'Steve Rogers Birthday', date: new Date(2024, 6, 12) },
    { type: 2, title: 'Expo Opening', date: new Date(2024, 8, 9) },
  ]

  return (
    <Layout btnAction={toggleModal}>
      <div className='container flex flex-row gap-6 h-screen'>
        <div className='w-1/5'>
          <div className='flex flex-col justify-between items-center gap-4 bg-white shadow-md p-4 rounded-md'>
            <Avatar classes='w-20 h-20' user={user} />
            <h3 className='text-xl text-gray-900 text-center'>{user?.firstName} {user?.lastName}</h3>
            <h3 className='text-sm text-center'>{user?.email}</h3>
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-4">
          <div className='flex flex-row justify-between items-center bg-white shadow-md p-4 rounded-md'>
            <div>Make someone's day</div>
            <div>
              <button className='bg-green-500 text-white rounded-md px-3 py-2 text-sm font-medium' onClick={toggleModal}>Send Recognition</button>
            </div>
          </div>

          <div className='flex flex-col gap-4 pb-4'>
            {
              articles.map(item => (
                <Article key={item._id} item={item} />
              ))
            }
          </div>
        </div>
        <div className="w-1/5 flex flex-col gap-4">
          <h3>Upcoming Events</h3>
          <div className={cards + ' flex flex-col gap-2 divide-y divide-gray-100'}>
            {
              events.map(e => (
                <div className='flex flex-row pt-2' key={e.title}>
                  <div className='w-10'>
                    {e.type === 1 ? <CakeIcon className='w-6 h-6 text-red-500' /> : <CalendarDaysIcon className='w-6 h-6 text-purple-500' />}
                  </div>
                  <div className='flex flex-col'>
                    <h3 className='text-sm'>{e.title}</h3>
                    <p className='text-xs text-gray-500'>{e.date.toDateString()}</p>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>



      {
        isOpen &&
        <ModalPage>
          <CreateArticle users={users} postArticle={postArticle} toggleModal={toggleModal} />
        </ModalPage>
      }
    </Layout>
  )
}
