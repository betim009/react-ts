function LuckyNumbers() {
    const luckyNumbers = () => Math.floor(Math.random() * 60 + 1);

    const myNumbers = [
        luckyNumbers(),
        luckyNumbers(),
        luckyNumbers(),
        luckyNumbers(),
        luckyNumbers(),
        luckyNumbers(),
    ];

    return (
        <>
            <h2 className="subtitle">Seus números da sorte da Mega-Sena são:</h2>
            <ul>
                {myNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </>
    );
}

export default LuckyNumbers;