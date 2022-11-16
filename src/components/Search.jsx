export function Search() {
    function pegaInput(event) {
        console.log(event.target.value)
    }
    return (
        <div className="Search">
            <input placeholder="Digite um repo" onChange={pegaInput} />
        </div>
    )
}