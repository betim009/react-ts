import { useEffect, useState } from "react";

type GreetingProps = {
    name: string;
};

function Greeting({ name }: GreetingProps) {

    const [registerNumber, setRegisterNumber] = useState(0)

    useEffect(() => {
        setRegisterNumber((prev) => prev + 1);
    }, []);
    
    return (
        <div className="card">
            <h1>{`Meu nome é: ${name}!`}</h1>
            <h2>{`Meu número de registro é: ${registerNumber}!`}</h2>
        </div>
    );
}

export default Greeting;
