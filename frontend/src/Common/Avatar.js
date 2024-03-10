import React from 'react'

function Avatar({ user, classes = 'h-8 w-8 text-xl', alt = 'image' }) {
    return (
        <>
            {
                user?.avatar ?
                    <img
                        className={"rounded-full " + classes}
                        src={"/avatars/" + user?.avatar}
                        alt={alt}
                    /> :
                    <div className={"rounded-full flex flex-row justify-center items-center border-2 border-slate-500 " + classes}>
                        {user?.firstName[0]}
                        {user?.lastName[0]}
                    </div>
            }
        </>
    )
}

export default Avatar