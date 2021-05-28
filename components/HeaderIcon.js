function HeaderIcon({ Icon, active}) {
    return (
        <div className="flex items-center cursor-pointer px-0 lg:px-8 md:px-4 sm:px-4 sm:h-14 md:hover:bg-gray-100
        rounded-xl active:border-b-2 active:border-blue-500 group transition-all duration-150">
            <Icon className={`h-6 text-gray-500 text-center group-hover:text-blue-500 sm:h-7 mx-auto
            ${
                active && "text-blue-500"
            }`}/>
        </div>
    )
}

export default HeaderIcon
