import Head from 'next/head'
import { getSession } from "next-auth/client"
import Header from '../components/Header'
import Login from "../components/Login"
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { db } from '../firebase'

export default function Home({ session, posts }) {
  if (!session) return <Login/>
  return (
    <div className="h-screen overflow-hidden bg-gray-200">
      <Head>
        <title>Facebook</title>
      </Head>
    {/* Header */}
    <Header/>
    <main className="flex">
        {/* Sidebar */}
          <Sidebar/>
        {/* feed */}
          <Feed posts={posts}/>
        {/* widgets */}
          <Widgets/>
    </main>

    </div>
  );
}

export async function getServerSideProps (context) {
  const session = await getSession(context);

  const post = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = post?.docs.map( (post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session,
      post: docs
    }
  }
}