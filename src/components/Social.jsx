import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub />,
        path: ''
    },
    {
        icon: <FaLinkedin />,
        path: ''
    },
    {
        icon: <FaYoutube />,
        path: ''
    },
    {
        icon: <FaTwitter />,
        path: ''
    },
]
export const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((link,index) => (
                    <Link href={link.path} key={index} className={iconStyles}>{link.icon}</Link>
                ))
            }
        </div>
    )
}