// Navcontext.jsx

import React, { createContext, useState } from 'react'

export const Navbarcontext = createContext()

const Navcontext = ({ children }) => {

    const [navopen, setNavopen] = useState(false)

    return (
        <div>
            <Navbarcontext.Provider value={[navopen, setNavopen]}>
                {children}
            </Navbarcontext.Provider>
        </div>
    )
}

export default Navcontext