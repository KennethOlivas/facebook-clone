import Image from "next/image"
import HeaderIcon from "./HeaderIcon"
import {
    BellIcon,
    ChatIcon,
    MoonIcon,
    ChevronDownIcon,
    CogIcon,
    LogoutIcon,
} from '@heroicons/react/solid';

import {
    PlusIcon,
    HomeIcon,
    PlayIcon,
    UserGroupIcon,
    SearchIcon,
    ShoppingCartIcon,
  
} from '@heroicons/react/outline'
import { useSession, signOut } from "next-auth/client";
import { Menu } from "@headlessui/react"


function Header() {
    const [session] = useSession();
    let drop = false

    return (
        <div>
            <div className="sticky top-0 z-50 bg-white dark:bg-dark-gray flex items-center p-2 lg:px-5 shadow-md">
                {/* Left */}
                <div className="flex items-center">
                    <Image src="https://links.papareact.com/5me" 
                    width={40}
                    height={40}
                    layout="fixed"
                    />
            
                    <div className="flex ml-2 items-center rounded-full bg-gray-200 p-2 dark:bg-dark-gray-background">
                        <SearchIcon className="h-6 text-gray-600 "/>
                        <input className="hidden md:inline-flex bg-transparent flex ml-2 items-center outline-none flex-shrink dark:text-white" type="text" placeholder="Search Facebook"/>
                    </div>
                </div>
                {/* Center */}

                <div className="flex justify-center flex-grow">
                    <div className="flex space-x-6 md:space-x-2">
                        <HeaderIcon active Icon={HomeIcon}/>
                        <HeaderIcon Icon={PlayIcon}/>
                        <HeaderIcon Icon={ShoppingCartIcon}/>
                        <HeaderIcon Icon={UserGroupIcon}/>
                    </div>
                </div>

                {/* Rigth */}
            

                <div className="flex items-center sm:space-x-2 justify-end">
                    {/* Profile */}
                    <div   
                   
                    className="p-1 hidden xl:inline-flex hover:bg-gray-200 dark:hover:bg-dark-gray-hover rounded-full flex items-center cursor-pointer">
                        <Image 
                        className="rounded-full"
                        src={session.user.image}
                        width={40}
                        height={40}
                        layout="fixed"
                        />  
                        <p className="whitespace-nowrap font-semibold ml-2 pr-1 dark:text-white">{session.user.name}</p>
                    </div>
                
                <PlusIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <Menu as="div">
                    <Menu.Button className="focus:outline-none"><ChevronDownIcon className="icon mt-2" /></Menu.Button>
                    <Menu.Items class={` absolute right-0  rounded-lg mt-1 bg-white border dark:border-dark-gray dark:text-white  shadow-xl mr-4 dark:bg-dark-gray`}>   
                        <div   
                        
                        className="hover:bg-gray-200 pl-4 flex items-center cursor-pointer rounded-t-lg dark:hover:bg-dark-gray-hover">
                            <Image 
                            className="rounded-full "
                            src={session.user.image}
                            width={60}
                            height={60}
                            layout="fixed"
                            />  
                            <div className="grid mr-4 py-8 pr-6">
                            <p className="whitespace-nowrap font-semibold ml-2 pr-1 text-xl">{session.user.name}</p>
                            <p className="whitespace-nowrap text-gray-500  ml-2 pr-1">Your profile </p>
                            </div>
                        
                        </div>
                        <hr className="mx-2 dark:text-dark-gray-hover"></hr>
                        <div   
                        className="hover:bg-gray-200 pl-4 flex items-center cursor-pointer dark:hover:bg-dark-gray-hover dark:text-white">
                             <CogIcon  className="h-10 w-10 py-2 px-2 mr-2 bg-gray-300 text-center rounded-full dark:bg-dark-gray-search "/>
                            <div className="grid py-2 pr-6">
                            <p className="whitespace-nowrap font-semibold ml-2 pr-1 ">Give feedback</p>
                            <p className="whitespace-nowrap text-gray-500  ml-2 pr-1 text-sm ">Help us improve the new Facebook</p>
                            </div>
                        </div>
                        <hr className="mx-2 dark:text-dark-gray-hover"></hr>

                        <button class="focus:outline-none flex w-full font-semibold text-left items-center transition-colors duration-200 px-4 py-2 text-normal text-gray-900 rounded hover:bg-gray-200 dark:hover:bg-dark-gray-hover dark:text-white">    
                        <CogIcon className="h-10 w-10 py-2 px-2 mr-2 bg-gray-300 text-center rounded-full dark:bg-dark-gray-search"/> Settings
                        </button>
                           
                        <button class="focus:outline-none flex w-full font-semibold text-left items-center transition-colors duration-200 px-4 py-2 text-normal text-gray-900 rounded hover:bg-gray-200 dark:hover:bg-dark-gray-hover dark:text-white">    
                        <MoonIcon className="h-10 w-10 py-2 px-2 mr-2 bg-gray-300 text-center rounded-full dark:bg-dark-gray-search"/> DarkMode
                        </button>
                           
                        <button onClick={ signOut }  class="focus:outline-none flex w-full font-semibold text-left items-center transition-colors duration-200 px-4 py-2 text-normal text-gray-900 rounded hover:bg-gray-200 dark:hover:bg-dark-gray-hover dark:text-white">    
                        <LogoutIcon className="h-10 w-10 py-2 px-2 mr-2 bg-gray-300 text-center rounded-full dark:bg-dark-gray-search"/> Logout
                        </button>
                        <div className="mx-4 text-sm text-gray-600 mb-2">
                        <p>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies ·</p>
                        <p>More · Facebook © 2021</p>
                        </div>
                       
                    </Menu.Items>
                </Menu>
                
                </div>
            </div>

            

        </div>



    )
}

export default Header
