import React, { useState } from 'react';
import './Birthday.css'

const persons = [
    {
        id: 1,
        name: "Bertie Yates",
        age: 29,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
        id: 2,
        name: "Hester Hogan",
        age: 32,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
        id: 3,
        name: "Larry Little",
        age: 36,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
        id: 4,
        name: "Sean Walsh",
        age: 34,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
        id: 5,
        name: "Lola Gardner",
        age: 29,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    }
]


const Birthday = () => {
    const [person, setPerson] = useState(persons);

    return (
        <>
            <div id='root'>
                <main>
                    <section className='container'>
                        <h3>5 Birthday's Today</h3>
                        {person.map((x) => {
                            const { id, name, age, img } = x;
                            return (
                                <article className='person' key={id}>
                                    <img src={img} alt={name} />
                                    <div>
                                        <h4>{name}</h4>
                                        <p>{age} years</p>
                                    </div>
                                </article>
                            )
                        })}
                        <button className='btn' onClick={()=>setPerson([])}>clear all</button>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Birthday