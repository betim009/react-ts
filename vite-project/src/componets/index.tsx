type GrettingProps = {
    name: string;
};

let registerNumber = 0;

function Greeting({ name }: GrettingProps) {
    registerNumber = registerNumber + 1;

    return (
        <div className="card">
            <h1>{`Meu nome é: ${name}!`}</h1>
            <h2>{`Meu número de registro é: ${registerNumber}!`}</h2>
        </div>
    );
}

export default Greeting;