import React from 'react'
import NavBar from '../Components/NavBar'

function Layout({ children, btnAction }) {
    return (
        <>
            <div className="min-h-full">
                <NavBar btnAction={btnAction}/>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Layout