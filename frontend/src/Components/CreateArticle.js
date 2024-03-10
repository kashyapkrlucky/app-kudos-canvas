import React, { useContext, useState } from 'react'
import LabelInput from '../Common/LabelInput'
import LabelTextarea from '../Common/LabelTextarea';
import Recognition from './Recognition';
import BtnSolid from '../Common/BtnSolid';
import BtnOutline from '../Common/BtnOutline';
import LabelDropDown from '../Common/LabelDropDown';
import { UserContext } from '../Contexts/UserContext';

function CreateArticle({ toggleModal, users, postArticle }) {
    const [user] = useContext(UserContext);
    const [article, setArticle] = useState({
        person: '',
        personInfo: null,
        title: '',
        category: '',
        message: '',
        image: '',
        author: ''
    });
    const [stage, setStage] = useState(1);
    const onChange = (e) => {
        const { name, value } = e.target;
        setArticle(() => {
            return { ...article, [name]: value }
        })
    }
    const categories = [
        { _id: 1, name: "Birthday" },
        { _id: 2, name: "Kudos" },
    ];

    const templates = ['1.jpg', '2.jpg', '3.jpg'];

    const chooseTemplate = (name) => {
        setArticle(prev => {
            return { ...prev, image: name }
        })
    }

    const showPreview = () => {
        const item = users.find(x => x._id === article.person);
        setArticle(prev => {
            return { ...prev, personInfo: { name: item.name, avatar: item.avatar}, author: user._id }
        })
        setStage(2);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const payload = {...article};
        delete payload.personInfo;
        console.log(payload);
        postArticle(payload);
    }

    return (
        <div className='w-1/2 flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md'>
            <div>
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">Create your message</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                </p>
            </div>


            {stage === 1 && <form onSubmit={onSubmit} className="space-y-3">
                <div className='flex flex-row gap-4'>
                    <LabelDropDown label='Person' name="person" value={article.person} list={users} onChange={onChange}/>
                    <LabelInput label="Title" name="title" type="text" value={article.title} onChange={onChange} />
                    <LabelDropDown label='Category' name="category" value={article.category} list={categories} onChange={onChange} />
                </div>
                <LabelTextarea label="Message" name="message" value={article.message} onChange={onChange} />
                <div className='flex flex-col gap-2'>
                    <label className="block text-sm font-medium leading-6 text-gray-900 capitalize mb-2">Choose Template</label>
                    <div className='flex flex-row gap-4'>
                        {
                            templates.map(t => (
                                <div key={t} className={'w-20 h-10 border-2 overflow-hidden cursor-pointer ' + (t === article.image ? ' border-gray-900' : '')} onClick={() => chooseTemplate(t)}>
                                    <img src={'/cards/' + t} alt='' className='object-fill' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-4">
                    <BtnOutline label="Close" onClick={toggleModal} />
                    <BtnSolid label="Next" onClick={showPreview} />
                </div>
            </form>}

            {stage === 2 && <div>
                <Recognition article={article} />
                <div className="mt-6 flex items-center justify-end gap-x-4">
                    <BtnOutline label="Back" onClick={() => setStage(1)} />
                    <BtnSolid label="Share" onClick={onSubmit} />
                </div>
            </div>}
        </div>
    )
}

export default CreateArticle