import React from 'react'

import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <IconContext.Provider value={{ size: '1.8rem' }} >
            <div className="main-footer">
                <p>This app has been built for in ReactJS and some additional components</p>
                <div className='main-icons'>
                    <a href="https://github.com/mcpavao">
                        <p><FaGithub/></p>
                    </a>
                    <a href="https://www.linkedin.com/in/mateus-pavao">
                        <p><FaLinkedin/></p>
                    </a>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Footer


