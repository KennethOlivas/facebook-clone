import StoryCard from "./StoryCard"
import Image from "next/image"

const stories = [
    {
        name: "Ulises Escoto",
        src: "/Images/dreyvenStories.jpg",
        profile: "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/129081032_1555132511541914_5547950848819905821_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FL4WI8xok-QAX-IGpqt&_nc_ht=scontent.fmga3-1.fna&oh=11e53b9d0b9856565cb222d7e53d74e4&oe=60D14D1E"
    },
    {
        name: "Carlos Quiroz",
        src: "/Images/carlosStories.jpg",
        profile: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/184866534_4175199369209714_8857834224676994457_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ezAouUf4EJEAX_A9R3w&_nc_ht=scontent.fmga3-2.fna&oh=72eef96887568603ecaf95bd0001b00b&oe=60D09B83"
    },
    {
        name: "Jaime Isaac Rivera",
        src: "/Images/jaimeStories.jpg",
        profile: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-1/p200x200/130800413_3380696105390976_1106319749319051439_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=BLFx1MUvBUkAX-FrKCR&_nc_ht=scontent.fmga3-2.fna&tp=6&oh=b773e6fbadf34cf3a92b8248e331cddf&oe=60D22AD1"
    },
    {
        name: "Jorge Rodriguez",
        src: "/Images/jorgeStories.jpg",
        profile: "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-1/s320x320/186480997_3600367236854950_5792302287122823542_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=scb1C4XThtIAX-_3qBY&_nc_ht=scontent.fmga3-1.fna&tp=7&oh=d577d27342413615d213c22ab79f01fb&oe=60D0ED54"
    },
    {
        name: "Hammer Mairena",
        src: "/Images/hammerStories.jpg",
        profile: "https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/149785606_1970853356389194_5899508583135165100_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=vqdCrfnAOTgAX_hQZqO&_nc_oc=AQkBbxkPXpKabmsEp7fT9Z4M1Eq9Hvud2ZpySD0ONKRkpH-nnYXV2i5PgzhChsLba7Q&_nc_ht=scontent.fmga3-1.fna&tp=27&oh=a45f7a3f5e6c5167b73ee7f987d60647&oe=60D2243E"
    },
    {
        name: "Marvin Andino",
        src: "/Images/marvinStories.jpg",
        profile: "https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/124814705_10157836180637992_8491137112043199970_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f-auVjmg6EIAX_ldyn8&_nc_ht=scontent.fmga3-2.fna&oh=fb2b4026704d297e9fbda8297bbaefbb&oe=60D01D7E"
    },

];

function Stories() {
    return <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (

                <StoryCard 
                    key={story.src} 
                    name={story.name} 
                    src={story.src} 
                    profile={story.profile} 
                />
            ))}
        </div>;
}

export default Stories
