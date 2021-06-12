import Image from "next/image";
import { db } from '../firebase'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef, Component } from 'react'
import firebase from "firebase";


import { 
    ChatAltIcon, 
    ShareIcon, 
    ThumbUpIcon,
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/outline"
 
function Post({ name, message, email, timestamp, image, postImage, id }) {
    const inputRef = useRef(null);
    const deletePost = () => {
        db.collection("posts").doc(id).delete().then(() => {
            console.log(id);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    let [isOpen, setIsOpen] = useState(false)


    const closeModal = () => {
        setIsOpen(false)
    }
    
    const openModal = () => {
       
        setIsOpen(true)
    }

    const updatePost = () => {
        db.collection("posts").doc(id).update({
            message: inputRef.current.value,
            name: name,
            email: email,
            image: image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        closeModal();
    }
    
    return (
        <div className="flex flex-col ">
           <div className="p-5 bg-white mt-5 rounded-t-xl dark:bg-dark-gray">
               <div className="flex items-center justify-end  transition-colors duration-150 space-x-2">
                    <TrashIcon onClick={deletePost} className="h-8 text-right rounded-full p-1 hover:bg-gray-100 cursor-pointer text-gray-400 dark:hover:bg-dark-gray-hover dark:text-white"/>
                    <PencilIcon onClick={openModal} className="h-8 text-right rounded-full p-1 hover:bg-gray-100 cursor-pointer text-gray-400 dark:hover:bg-dark-gray-hover dark:text-white"/>
               </div>
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

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto  "
                onClose={closeModal}
                >
                <div className="min-h-screen px-4 text-center ">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="dark:bg-dark-gray-background inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                       
                        <Dialog.Title
                        as="h3"
                        className="text-lg text-center font-medium leading-6 dark:text-white"
                        >
                        Edit Post
                        </Dialog.Title>
                        
                        <div className="mt-2">
                            
                        <input  
                        className="w-full rounded-full h-12 placeholder-gray-500 bg-gray-200 dark:bg-dark-gray-search dark:hover:bg-dark-gray-hover dark:text-white flex-grow px-5 focus:outline-none hover:bg-gray-300" 
                        type="text"
                        ref={inputRef}
                        />
                           
                        </div>

                        <div className="mt-4 flex items-center space-x-2">
                        <button
                            type="button"
                            className="w-1/2 inline-flex justify-center px-6 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:bg-dark-gray dark:hover:bg-dark-gray-hover dark:text-gray-400"
                            onClick={updatePost}
                        >
                            Post
                        </button>
                        <button
                            type="button"
                            className="w-1/2 inline-flex justify-center px-6 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:bg-dark-gray dark:hover:bg-dark-gray-hover dark:text-gray-400"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default Post
