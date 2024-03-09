import React, { useState } from 'react'
import Layout from './Layout'
import ItemList from '../Components/ItemList'
import CreateGreeting from '../Components/CreateGreeting';
import { ModalPage } from '../Common/ModelPage';
import Blog from '../Components/Blog';
import BlogMini from '../Components/BlogMini';

export default function Dashboard() {
  const btnAction = () => {
    console.log('on create');
  }
  const people = [
    {
      name: 'Congratulations on the certification',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    }
  ];

  const [isOpen, setIsOpen] = useState('');
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <Layout btnAction={toggleModal}>
      <div className='container flex flex-row gap-2'>
        <div className="w-3/4 p-4">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Current Feeds
          </p>

          <Blog />
        </div>
        <div className="w-1/4 p-4">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            My Recognitions
          </p>
          <BlogMini/>
        </div>
      </div>



      {
        isOpen &&
        <ModalPage>
          <CreateGreeting />
        </ModalPage>
      }
    </Layout>
  )
}
