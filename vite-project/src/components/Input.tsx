type InputProps = {
    onChange: () => void;
}

function Input({ onChange }: InputProps) {
    return (
        <>
            <h1>Digite teu nome:</h1>
            <input name="firstName" onChange={onChange} />
        </>
    );
}

export default Input;