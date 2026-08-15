import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";


export const navigation = [
    { name: "Formatter", href: "#formatter" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
] as const;


export const socials = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/your-profile",
        icon: FaLinkedin,
    },
    {
        name: "Github",
        href: "https://github.com/your-username",
        icon: FaGithub,
    },
    {
        name: "Email",
        href: "mailto:hello@yourdomain.com",
        icon: MdMail
    },
] as const;

