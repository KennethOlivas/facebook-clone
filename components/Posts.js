import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";


function Posts() {
    const [realtimePosts] = useCollection(db.collection("posts").orderBy("timestamp","desc"));

    return <div>
        
            {realtimePosts?.docs.map((posted) => (
                <Post 
                 key={posted.id}
                 name={posted.data().name}
                 message={posted.data().message}
                 email={posted.data().email}
                 timestamp={posted.data().timestamp}
                 image={posted.data().image}
                 postImage={posted.data().postImage}
                />
             ))}
        
    </div>
}

export default Posts
