function Button() {
    const handleClick = () => {
        alert('Meu primeiro event handler click')
    }

    return (
        <>
            <button onClick={handleClick}>
                Clique em mim!
            </button>

            <br></br>
            <br></br>

            <button onClick={() => alert("Segundo evento")}>
                Clique em mim! 2
            </button>

            <button onClick={() => alert("Segundo evento")}>
                Clique em mim! 3
            </button>
        </>

    )
}

export default Button;