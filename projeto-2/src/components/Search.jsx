export function Search() {
    function pegaInput(event) {
        console.log(event.target.value)
    }
    return (
        <div className="Search">
            <input placeholder="Digite sua busca" onChange={pegaInput} />
        </div>
    )
    }