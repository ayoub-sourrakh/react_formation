import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='logo_title_container'>
            <div className='title'>Dash</div>
            <div className='logo_container'>
                <div className='logo_box'>
                    <div className='vector_circle'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='vector_thunderbolt'>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0L0 7H4V12L10 5H6V0Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='rectangle_2'></div>
            </div>
        </div>
        <div className='button_menu'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" fill="white" stroke="#DADADA"/>
                <path d="M21.939 12.939L14.879 20L21.939 27.061L24.061 24.939L19.121 20L24.061 15.061L21.939 12.939Z" fill="#445BFF"/>
            </svg>
        </div>
        <div className='main_menu'>MAIN MENU</div>
        <div className='dashboard_container'>
            <div className='rectangle_3'></div>
            <div className='logo_title_dashboard_container'>
                <div className='title_dashboard'>Dashboard</div>
                <div className='logo_dashboard_container'>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.87868 0.87868C0 1.75736 0 3.17157 0 6V12C0 14.8284 0 16.2426 0.87868 17.1213C1.75736 18 3.17157 18 6 18H14C16.8284 18 18.2426 18 19.1213 17.1213C20 16.2426 20 14.8284 20 12V6C20 3.17157 20 1.75736 19.1213 0.87868C18.2426 0 16.8284 0 14 0H6C3.17157 0 1.75736 0 0.87868 0.87868ZM14 5C14.5523 5 15 5.44772 15 6V14C15 14.5523 14.5523 15 14 15C13.4477 15 13 14.5523 13 14V6C13 5.44772 13.4477 5 14 5ZM7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8V14C5 14.5523 5.44772 15 6 15C6.55229 15 7 14.5523 7 14V8ZM11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15C10.5523 15 11 14.5523 11 14V10Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='inbox_container'>
            <div className='logo_title_inbox_container'>
                <div className='title_inbox'>Inbox</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V17.0909C20 17.9375 20 18.3608 19.8739 18.6989C19.6712 19.2425 19.2425 19.6712 18.6989 19.8739C18.3608 20 17.9375 20 17.0909 20H12C7.58172 20 4 16.4183 4 12V12Z" stroke="#CCD2E3" stroke-width="2"/>
                        <path d="M9 11L15 11" stroke="#51CBFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15H15" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='notification_container'>
                    <div className='rectangle_42'>
                        <div className='notifica'>1</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='workspace'>Worskpace</div>
        <div>
            <div className='logo_title_accounts_container'>
                <div className='title_accounts'>Accounts</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7956 20.7059C17.4537 19.6427 16.7004 18.7033 15.6526 18.0332C14.6047 17.3632 13.3208 17 12 17C10.6792 17 9.3953 17.3632 8.34743 18.0332C7.29957 18.7033 6.5463 19.6427 6.20445 20.7059" stroke="#CCD2E3" stroke-width="2"/>
                        <circle cx="12" cy="10" r="3" stroke="#51CBFF" stroke-width="2" stroke-linecap="round"/>
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#CCD2E3" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div className='logo_title_schedule_container'>
                <div className='title_schedule'>Schedule Post</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="6" width="18" height="15" rx="2" stroke="#CCD2E3" stroke-width="2"/>
                        <path d="M4 11H20" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                        <path d="M9 16H15" stroke="#51CBFF" stroke-width="2" stroke-linecap="round"/>
                        <path d="M8 3L8 7" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                        <path d="M16 3L16 7" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div className='logo_title_communities_container'>
                <div className='title_communities'>Communities</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" stroke="#CCD2E3" stroke-width="2"/>
                        <path d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11" stroke="#51CBFF" stroke-width="2" stroke-linecap="round"/>
                        <path d="M20 20L17 17" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div className='logo_title_analytics_container'>
                <div className='title_analytics'>Analytics</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17" stroke="#51CBFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#CCD2E3" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='general'>General</div>
        <div>
            <div className='logo_title_files_container'>
                <div className='title_files'>Files & Folders</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7Z" stroke="#CCD2E3" stroke-width="2"/>
                        <path d="M3 7H6C6.98142 7 7.47214 7 7.89443 7.21115C8.31672 7.42229 8.61115 7.81486 9.2 8.6L9.8 9.4C10.3889 10.1851 10.6833 10.5777 11.1056 10.7889C11.5279 11 12.0186 11 13 11H18C18.9319 11 19.3978 11 19.7654 10.8478C20.2554 10.6448 20.6448 10.2554 20.8478 9.76537C21 9.39782 21 8.93188 21 8V8" stroke="#CCD2E3" stroke-width="2"/>
                        <path d="M7 16H15" stroke="#48B4E9" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div className='logo_title_settings_container'>
                <div className='title_settings'>Settings</div>
                <div className='icon'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.08168 13.9445C2.55298 12.9941 2.28862 12.5188 2.28862 12C2.28862 11.4812 2.55298 11.0059 3.08169 10.0555L4.43094 7.63L5.85685 5.24876C6.4156 4.31567 6.69498 3.84912 7.14431 3.5897C7.59364 3.33028 8.13737 3.3216 9.22483 3.30426L12 3.26L14.7752 3.30426C15.8626 3.3216 16.4064 3.33028 16.8557 3.5897C17.305 3.84912 17.5844 4.31567 18.1431 5.24876L19.5691 7.63L20.9183 10.0555C21.447 11.0059 21.7114 11.4812 21.7114 12C21.7114 12.5188 21.447 12.9941 20.9183 13.9445L19.5691 16.37L18.1431 18.7512C17.5844 19.6843 17.305 20.1509 16.8557 20.4103C16.4064 20.6697 15.8626 20.6784 14.7752 20.6957L12 20.74L9.22483 20.6957C8.13737 20.6784 7.59364 20.6697 7.14431 20.4103C6.69498 20.1509 6.4156 19.6843 5.85685 18.7512L4.43094 16.37L3.08168 13.9445Z" stroke="#CCD2E3" stroke-width="2"/>
                        <circle cx="12" cy="12" r="3" stroke="#48B4E9" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <div className='help_logo'>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_1)">
                    <circle cx="36" cy="32" r="20" fill="#AABBFA"/>
                    </g>
                    <path d="M36 18.6667C28.648 18.6667 22.6666 24.648 22.6666 32C22.6666 39.352 28.648 45.3333 36 45.3333C43.352 45.3333 49.3333 39.352 49.3333 32C49.3333 24.648 43.352 18.6667 36 18.6667ZM37.3333 40H34.6666V37.3333H37.3333V40ZM38.6346 33.4867C38.3733 33.6973 38.1213 33.8987 37.9213 34.0987C37.3773 34.6413 37.3346 35.1347 37.3333 35.156V35.3333H34.6666V35.1107C34.6666 34.9533 34.7053 33.5413 36.0346 32.212C36.2946 31.952 36.6173 31.688 36.956 31.4133C37.9346 30.62 38.5773 30.0413 38.5773 29.244C38.5618 28.5704 38.2833 27.9297 37.8014 27.4588C37.3195 26.988 36.6724 26.7244 35.9986 26.7246C35.3249 26.7248 34.678 26.9887 34.1963 27.4597C33.7146 27.9308 33.4364 28.5717 33.4213 29.2453H30.7546C30.7546 26.3533 33.108 24 36 24C38.892 24 41.2453 26.3533 41.2453 29.2453C41.2453 31.3747 39.6733 32.6453 38.6346 33.4867V33.4867Z" fill="#017EFA"/>
                    <defs>
                    <filter id="filter0_d_0_1" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </div>
            <div className='rectangle_53'></div>
            <div className='need_help'>Need Help with Dash?</div>
            <div className='rectangle_54'>
                <div className='help_center'>Go to help center</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar