import Image from "next/image"
import HeaderIcon from "./HeaderIcon"
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,

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


function Header() {
    const [session] = useSession();
    
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" 
                width={40}
                height={40}
                layout="fixed"
                />
        
                <div className="flex ml-2 items-center rounded-full bg-gray-200 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="hidden md:inline-flex bg-transparent flex ml-2 items-center outline-none flex-shrink" type="text" placeholder="Search Facebook"/>
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
                onClick={ signOut }
                className="p-1 hover:bg-gray-200 rounded-full flex items-center cursor-pointer">
                    <Image 
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                    />  
                    <p className="whitespace-nowrap font-semibold ml-2 pr-1">{session.user.name}</p>
                </div>
             
              <PlusIcon className="icon" />
              <ChatIcon className="icon" />
              <BellIcon className="icon" />
              <ChevronDownIcon className="icon" />

            </div>
        </div>


    )
}

export default Header
