import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/pablom58'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/pablom58'
    },
]
export const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((link,index) => (
                    <a href={link.path} target="_blank" style={{textDecoration: "none"}} key={index} className={iconStyles}>{link.icon}</a>
                ))
            }
        </div>
    )
}