import Title from "./Title";

const footerName = 'Alberto';

function Footer() {
    return (
        <div className="p5 bg-dark text-white text-center Footer">
            <Title />
            <p>Entre em contato com a galeria! Fale com o {footerName}</p>
        </div>
    )
}

export default Footer;