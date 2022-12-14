import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='notif_bell'>
            <svg width="65" height="65" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_471)">
                <circle cx="30" cy="25" r="20" fill="white"/>
                </g>
                <path d="M37 26.586V23C37 19.783 34.815 17.073 31.855 16.258C31.562 15.52 30.846 15 30 15C29.154 15 28.438 15.52 28.145 16.258C25.185 17.074 23 19.783 23 23V26.586L21.293 28.293C21.2 28.3857 21.1262 28.4959 21.0759 28.6172C21.0256 28.7386 20.9998 28.8687 21 29V31C21 31.2652 21.1054 31.5196 21.2929 31.7071C21.4804 31.8946 21.7348 32 22 32H38C38.2652 32 38.5196 31.8946 38.7071 31.7071C38.8946 31.5196 39 31.2652 39 31V29C39.0002 28.8687 38.9744 28.7386 38.9241 28.6172C38.8738 28.4959 38.8 28.3857 38.707 28.293L37 26.586ZM37 30H23V29.414L24.707 27.707C24.8 27.6143 24.8738 27.5041 24.9241 27.3828C24.9744 27.2614 25.0002 27.1313 25 27V23C25 20.243 27.243 18 30 18C32.757 18 35 20.243 35 23V27C35 27.266 35.105 27.52 35.293 27.707L37 29.414V30ZM30 35C30.6193 35.0008 31.2235 34.8086 31.7285 34.4502C32.2335 34.0917 32.6143 33.5849 32.818 33H27.182C27.3857 33.5849 27.7665 34.0917 28.2715 34.4502C28.7765 34.8086 29.3807 35.0008 30 35V35Z" fill="black"/>
                <circle cx="37.5" cy="19.5" r="4.5" fill="#FA3F3F"/>
                <defs>
                <filter id="filter0_d_1_471" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.945098 0 0 0 0 0.94902 0 0 0 0 0.980392 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_471"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_471" result="shape"/>
                </filter>
                </defs>
            </svg>
        </div>
        <div className='ligne_1'></div>
        <div className='online_contacts'>
            <div className='contact_photo_1'></div>
            <div className='contact_photo_2'></div>
            <div className='contact_photo_3'></div>
            <div className='contact_photo_4'></div>
        </div>
        <div className='online_container'>
            <div className='online_dot'></div>
            <div className='online'>ONLINE</div>
        </div>
        <div className='search_logo'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z" fill="#828282"/>
            </svg>
        </div>
        <div className='search'>Search...</div>
        <div className='ligne_41'></div>
        <div className='arrow_down'>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.293 0.292999L5.99997 4.586L1.70697 0.292999L0.292969 1.707L5.99997 7.414L11.707 1.707L10.293 0.292999Z" fill="#1C1F37"/>
            </svg>
        </div>
        <div className='contact_photo'></div>
        <div className='contact_infos'>
            <div className='contact_name'>Erza Miller</div>
            <div className='contact_email'>erza.miller@email.com</div>
        </div>
    </div>
  )
}

export default Navbar