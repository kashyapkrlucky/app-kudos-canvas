import React from 'react'

function Recognition({ article }) {
    return (
        <div className="w-full bg-cover rounded-md flex flex-col justify-center items-center text-center gap-4" style={{ "backgroundImage": `url(/cards/${article.image})`, height: '400px' }}>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {article?.title}
            </h3>
            <img src={"/avatars/" + article.personInfo.avatar} alt="" className="h-24 w-24 rounded-full bg-gray-50" />
            <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dancing-script">
                {article?.personInfo?.name}
            </h3>
            <p className="mt-5 w-1/2 line-clamp-3 text-sm leading-6 text-gray-900">{article.message}</p>
        </div>
    )
}

export default Recognition