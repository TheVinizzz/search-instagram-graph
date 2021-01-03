import React, {useState} from 'react'
import Axios from 'axios'

export default function Home(){
    const [user, setUser] = useState()
    const [hashUser, setHashUser] = useState('vinip_borges')

    async function searchInstagram() {
        try{ 
            const {data} = await Axios.get(`https://www.instagram.com/${hashUser}/?__a=1`)
            setUser(data.graphql.user)
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <div>
            <div>
                <input type="text" onChange={e => setHashUser(e.target.value)}/>
                <button onClick={searchInstagram}>Search</button>
            </div>
            {!user && (<div>Esperando seu usuario...</div>)}
            {!!user && (
            <div>
                <p>Olá {user.full_name}</p>
                <img src={user.profile_pic_url_hd} alt="user-hd"/>
                <p>Você segue {user.edge_follow.count} pessoas.</p>
                <p>Você tem {user.edge_followed_by.count} seguidores</p>
           </div>
           )}
        </div>
    )
}