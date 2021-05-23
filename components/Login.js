import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="container">
            <div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify- bg-gray-200">
            <div class="content text-3xl text-center md:text-left">
                <h1 class="text-5xl text-blue-600 font-bold">Facebook</h1>
                <p className="mt-2">Connect with friends and the world around you on Facebook.</p>
            </div>
            <div class="container mx-auto flex flex-col items-center ">
                <form class="shadow-lg w-1/2 p-4 flex flex-col bg-white rounded-lg">
                <input type="text" placeholder="Email or Phone Number" class="mb-3 py-3 mt-1 px-4 border border-gray-400 focus:border-blue-300 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <input type="text" placeholder="Pasword" class="mb-3 py-3 px-4 border border-gray-400 focus:border-blue-300 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <button
                 onClick={signIn}
                 class="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold text-lg hover:bg-blue-700">
                     Login
                 </button>
                <a class="text-blue-400 text-center my-2">Forgot Pasword?</a>
                <hr />
                <button class="w-2/3 mx-auto bg-green-600 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg hover:bg-green-700">Create New Account</button>
                </form>
                <p class="text-center text-sm my-4">
                <span class="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
                </p>
            </div>
            </div>
        </div>
    )
}

export default Login
