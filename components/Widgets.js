import { VideoCameraIcon, SearchIcon, DotsHorizontalIcon, } from "@heroicons/react/solid"
import Contact from "./Contact";

const contacts = [
    {
        name: "Ulises Escoto",
        src: "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/129081032_1555132511541914_5547950848819905821_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FL4WI8xok-QAX-IGpqt&_nc_ht=scontent.fmga3-1.fna&oh=11e53b9d0b9856565cb222d7e53d74e4&oe=60D14D1E"
    },
    {
        name: "Carlos Quiroz",
        src: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/184866534_4175199369209714_8857834224676994457_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ezAouUf4EJEAX_A9R3w&_nc_ht=scontent.fmga3-2.fna&oh=72eef96887568603ecaf95bd0001b00b&oe=60D09B83"
    },
    {
        name: "Jaime Isaac Rivera",
        src: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/130800413_3380696105390976_1106319749319051439_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BLFx1MUvBUkAX-FrKCR&_nc_ht=scontent.fmga3-2.fna&tp=6&oh=b773e6fbadf34cf3a92b8248e331cddf&oe=60D22AD1"
    },
    {
        name: "Jorge Rodriguez",
        src: "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-1/s320x320/186480997_3600367236854950_5792302287122823542_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=scb1C4XThtIAX-_3qBY&_nc_ht=scontent.fmga3-1.fna&tp=7&oh=d577d27342413615d213c22ab79f01fb&oe=60D0ED54"
    },
    {
        name: "Hammer Mairena",
        src: "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/149785606_1970853356389194_5899508583135165100_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=vqdCrfnAOTgAX_hQZqO&_nc_oc=AQkBbxkPXpKabmsEp7fT9Z4M1Eq9Hvud2ZpySD0ONKRkpH-nnYXV2i5PgzhChsLba7Q&_nc_ht=scontent.fmga3-1.fna&tp=27&oh=a45f7a3f5e6c5167b73ee7f987d60647&oe=60D2243E"
    },
    {
        name: "Marvin Andino",
        src: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/124814705_10157836180637992_8491137112043199970_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f-auVjmg6EIAX_ldyn8&_nc_ht=scontent.fmga3-2.fna&oh=fb2b4026704d297e9fbda8297bbaefbb&oe=60D01D7E"
    },

];

function Widgets() {
    return (
        <div className="hidden md:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl mx-2 cursor-default">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-8 p-1 hover:bg-gray-300 rounded-full transition-all duration-150 cursor-pointer"/>
                    <SearchIcon className="h-8 p-1 hover:bg-gray-300 rounded-full transition-all duration-150 cursor-pointer"/>
                    <DotsHorizontalIcon className="h-8 p-1 hover:bg-gray-300 rounded-full transition-all duration-150 cursor-pointer"/>
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact 
                 key={contact.src}
                 src={contact.src}
                 name={contact.name}
                
                />
             ))}
           
        </div>
    );
}

export default Widgets
