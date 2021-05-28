import Image from "next/image"

function Contact({src, name}) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative bg-gray-200 cursor-pointer p-2 rounded-xl hover:bg-gray-300
        transition-all duration-150">
            <Image 
            className="rounded-full"
            src={src} 
            width={40} 
            height={40}
         
            objectFit="cover"
            />

           <p>{name}</p>

           <div className="absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full"></div>
        </div>
    )
}

export default Contact
