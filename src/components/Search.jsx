import {useState, useEffect } from 'react'
import Axios from 'axios'

export function Search() {
    function pegaInput(event) {
        console.log(event.target.value)
    }

    return (
        <>
            <div className="Search">
                <input placeholder="Digite um repo" onChange={pegaInput} />
            </div>
            <Repositorios />
        </>
    )
}

export function Repositorios() {   
    const [reposFromApi, setReposFromApi] = useState([])
    const baseURL ='https://api.github.com/users/layllandrade/repos'

    useEffect (() => {
        async function getData(){
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)
        }

        getData()
    }, [])

    return (
        <div>
            {reposFromApi.map(item => {
                return (
                    <div key={item.id}> 
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <a href={item.html_url}>Conferir</a>
                    </div>
                )
            })}
        </div>
    )
}
