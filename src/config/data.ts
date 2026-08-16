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



export const faqs = [
    {
        question: "What is a JSON formatter?",
        answer:
            "A JSON formatter takes compact or poorly formatted JSON and adds indentation, spacing, and line breaks so the data is easier to read and understand.",
    },
    {
    question: "Why should I use SontuCode JSON Formatter instead of other tools?",
    answer:
        "SontuCode is designed to be fast, simple, privacy-friendly, and easy to use. You can format, validate, beautify, and minify JSON without creating an account or sending your JSON to our servers. Your data is processed directly in your browser and stays on your device. SontuCode does not store your JSON data in our application or on our servers.",
    },
    {
        question: "Is my JSON uploaded to a server?",
        answer:
            "No. The formatter is designed to process your JSON directly in your browser. Your JSON does not need to be uploaded to a SontuCode server for formatting or validation.",
    },
    {
        question: "Can I copy or download formatted JSON?",
        answer:
            "Yes. After formatting your JSON, you can copy the result to your clipboard or download it as a JSON file.",
    },
    {
        question: "Is this JSON formatter free?",
        answer:
            "Yes. The SontuCode JSON Formatter and Validator is free to use directly in your browser.",
    },
    {
        question: "What happens if my JSON is invalid?",
        answer:
            "The validator identifies that the JSON is invalid and provides an error message to help you locate the problem. Common issues include missing commas, unmatched brackets, invalid quotes, and incorrect JSON syntax.",
    },
];

