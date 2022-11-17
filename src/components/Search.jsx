import {useState, useEffect } from 'react'
import Axios from 'axios'

export function Search() {
    const [reposFromApi, setReposFromApi] = useState([])
    const [termoBuscado, setTermoBuscado] = useState('')
    const [repositoriosFiltrados, setRepositoriosFiltrados] = useState([])
    const baseURL ='https://api.github.com/users/layllandrade/repos'

    useEffect (() => {
        async function getData(){
            const response = await Axios.get(baseURL)
            setReposFromApi(response.data)
        }
        getData()
    }, [])

    function pegaInput(event) {
        setTermoBuscado(event.target.value)
    }

    useEffect(()=> {
        setRepositoriosFiltrados(reposFromApi.filter(reposFromApi => {
            return reposFromApi.name.includes(termoBuscado)
        }))
    },[reposFromApi, termoBuscado])

    return (
        <>
            <div className="Search">
                <input placeholder="Digite um repo" onChange={pegaInput} />
                {repositoriosFiltrados.map(reposFromApi => {
                    return(
                        <>
                        <h3 key={reposFromApi.id}>{reposFromApi.name}</h3>
                        <p>{reposFromApi.description}</p>
                        <a href={reposFromApi.html_url}>Conferir</a>
                        </>
                )
                })}
            </div>
        </>
    )
}