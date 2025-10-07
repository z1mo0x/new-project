import OnlineIcon from '../assets/icons/cardio.png'
import Logo from '/logo.png'
import EmergencyIcon from '../assets/icons/stethoscope.png'
import CancerIcon from '../assets/icons/medical-history.png'

export const config = {
    logo: Logo,
    mainTitle: 'Место для получения медицинской помощи',
    services: [
        {
            id: 1,
            name: "Онлайн-прием",
            text: "Онлайн-прием врача",
            icon: OnlineIcon
        },
        {
            id: 2,
            name: "Экстренный Случай",
            text: "При возникновении экстренного случая",
            icon: EmergencyIcon
        },
        {
            id: 3,
            name: "Лечение рака",
            text: "При возникновении экстренного случая",
            icon: CancerIcon
        },
    ],
    links: [
        {
            title: "Личный кабинет",
            link: "/account",
            secure: true
        },
        {
            title: "Контакты",
            link: "/contacts",
            secure: false
        }
    ]
}