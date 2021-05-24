import Image from "next/image";
import { useSession } from "next-auth/client"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
    const [session] = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const submitKey = (e) => {
        
        if(e.keyCode === 13){
            e.preventDefault();
            sendPost()
        }
       
    }

    const sendPost = (e) => {
        console.log("entre")
        if(!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost,"data_url");

                removeImage();

                uploadTask.on(
                    "state_change", 
                    null, 
                    error => console.error(error),
                () => {
                    storage.ref("posts").child(doc.id).getDownloadURL().then(url => {
                        db.collection("posts").doc(doc.id).set (
                            {
                            postImage: url,
                            },
                            { merge: true}
                        );
                    });
                })
            };
        });

        inputRef.current.value = ""
    };
    
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);

        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }


    const removeImage = () => {
        setImageToPost(null);
    }

    return <div className="bg-white p-2 rounded-xl text-gray-500 shadow-md font-medium mt-6 ">
        <div className="flex space-x-4 p-4 items-center ">
         
            <Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            />

            <from onSubmit={sendPost} className="flex flex-1" >
                <input onKeyDown={submitKey}
                 ref={inputRef}
                 className="rounded-full h-12 placeholder-gray-500 bg-gray-200 flex-grow px-5 focus:outline-none hover:bg-gray-300" 
                 type="text" 
                 placeholder={`What's on your mind, ${session.user.name} ?`} 
                 />
                <button hidden type="submit" onClick={sendPost}>
                    Submit
                </button>

                {imageToPost && (
                    <div  className="flex flex-col ml-2  cursor-pointer">
                        <img className="h-10 object-contain filter hover:brightness-110 transition duration-150 transform hover:scale-105"
                        src={imageToPost} 
                        alt="" />
                        <p onClick={removeImage} className="text-sm text-center hover:text-red-500 transition duration-200">Remove</p>
                    </div>
                )}
            </from>
        </div>

        <div className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500" />
                <p className="text-xs sm:text-sm xl:text-base">
                    live Video
                </p>

                   </div>
            <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                <PhotographIcon className="h-7 text-green-400" />
                <p className="text-xs sm:text-sm xl:text-base">
                    Photo/Video
                </p>
                <input 
                 ref={filePickerRef} 
                 hidden 
                 onChange={addImageToPost} 
                 type="file" 
                />
            </div>
            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-500" />
                <p className="text-xs sm:text-sm xl:text-base">
                    Felling/Activity
                </p>
            </div>

            <div>
                
            </div>
        </div>
    </div>
    
}

export default InputBox
