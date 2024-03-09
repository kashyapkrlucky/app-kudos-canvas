import React from 'react'

function SubNavBar({ pageTitle, btnAction }) {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{pageTitle}</h1>
                {btnAction && <button className='bg-purple-600 text-white rounded-md px-3 py-2 text-sm font-medium' onClick={btnAction}>Create</button>}
            </div>
        </header>
    )
}

export default SubNavBar