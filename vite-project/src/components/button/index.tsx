import './index.css'

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
    return (
        <button className='btn' onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;