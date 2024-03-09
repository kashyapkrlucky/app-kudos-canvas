import React, { useState } from 'react'
import LabelInput from '../Common/LabelInput'
import LabelTextarea from '../Common/LabelTextarea';
import Recognition from './Recognition';

function CreateGreeting() {
    const [greeting, setGreeting] = useState({
        fullname: '',
        category: '',
        message: ''
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setGreeting(() => {
            return { ...greeting, [name]: value }
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md'>
            <div>
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">Create your message</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    This information will be displayed publicly so be careful what you share.
                </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-3">
                <LabelInput label="Full Name" name="fullname" type="text" onChange={onChange} />

                <LabelTextarea label="Message" name="message" onChange={onChange} />


                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Next
                    </button>
                </div>
            </form>

            <div>
                <Recognition greeting={greeting} />
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateGreeting