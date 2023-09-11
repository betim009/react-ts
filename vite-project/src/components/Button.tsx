import '../styles/Button.css';

type ButtonProps = {
    children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
    return (
        <button className="styled-btn">
            {children}
        </button>
    )
}

export default Button;