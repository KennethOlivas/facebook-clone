import Image from "next/image";

import { 
    ChatAltIcon, 
    ShareIcon, 
    ThumbUpIcon,
} from "@heroicons/react/outline"
 
function Post({ name, message, email, timestamp, image, postImage }) {
    return (
        <div className="flex flex-col ">
           <div className="p-5 bg-white mt-5 rounded-t-xl dark:bg-dark-gray">
               <div className="flex items-center space-x-2">
                   <img className="rounded-full" src={image} width={40} height={40} alt="" />
                    <div>
                        <p className="font-medium dark:text-white">{name}</p>
                        <p className="text-sm text-gray-400 dark:text-white">
                            {new Date(timestamp?.toDate()).toLocaleDateString()}
                        </p>
                    </div>
               </div>
               <p className="pt-4 dark:text-white">{message}</p>
           </div>
           {postImage && (
               <div className="relative h-56 md:h-96 bg-black"> 
                   <Image 
                   src={postImage} 
                   objectFit="cover"
                   layout="fill"
                   />
                </div>
           )}

           <div className="flex justify-between items-center bg-white rounded-b-xl text-gray-400 border-t dark:text-white dark:bg-dark-gray dark:border-dark-gray">
               <div className="inputIcon">
                    <ThumbUpIcon className="h-4"/>
                    <p className="Text-xs sm:text-base">Like</p>

               </div >
                   
               <div className="inputIcon">
                    <ChatAltIcon className="h-4"/>
                    <p className="Text-xs sm:text-base">Coment</p>
               </div>
                   
               <div className="inputIcon">
                    <ShareIcon className="h-4"/>
                    <p className="Text-xs sm:text-base">Share</p>
               </div>
           </div>
        </div>
    );
}

export default Post
