import Head from 'next/head'
import { getSession } from "next-auth/client"
import Header from '../components/Header'
import Login from "../components/Login"
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home({ session }) {
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
          <Feed/>
        {/* widgets */}
    </main>

    </div>
  );
}

export async function getServerSideProps (context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}