import { useState } from 'react';
import { MovieType } from '../types';
import './Input.css';

export type FormDataType = Omit<MovieType, 'id'>;

function Form({ onAddNewMovie }: { onAddNewMovie: (movie: FormDataType) => void }) {
    // const [name, setName] = useState('');
    // const [image, setImage] = useState('');

    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        image: '',
        description: '',
        director: '',
        isFavorited: false,
        releaseYear: new Date().getFullYear(),
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? event.target.checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddNewMovie(formData);
        // limpar os campos / states
        setFormData({
            name: '',
            image: '',
            description: '',
            director: '',
            isFavorited: false,
            releaseYear: new Date().getFullYear(),
        });
        // dar um aviso
        alert('Filme adicionado com sucesso!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    onChange={(event) => handleInputChange(event)}
                    value={formData.name}
                />
                <label htmlFor="name">Nome do Filme</label>
            </div>

            <div className="input">
                <input
                    type="text"
                    name="image"
                    id="image"
                    placeholder=""
                    onChange={(event) => handleInputChange(event)}
                    value={formData.image}
                />
                <label htmlFor="image">Imagem</label>
            </div>

            <div className="input">
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder=""
                    onChange={(event) => handleInputChange(event)}
                    value={formData.description}
                />
                <label htmlFor="description">Descrição</label>
            </div>

            <div className="input">
                <input
                    type="text"
                    name="director"
                    id="director"
                    placeholder=""
                    onChange={(event) => handleInputChange(event)}
                    value={formData.director}
                />
                <label htmlFor="director">Diretor</label>
            </div>

            <div className="input">
                <input
                    type="number"
                    name="releaseYear"
                    id="releaseYear"
                    placeholder=""
                    onChange={(event) => handleInputChange(event)}
                    value={formData.releaseYear}
                />
                <label htmlFor="releaseYear">Ano de Lançamento</label>
            </div>

            <div className="input">
                <input
                    type="checkbox"
                    name="isFavorited"
                    id="isFavorited"
                    onChange={(event) => handleInputChange(event)}
                    checked={formData.isFavorited}
                />
                <label htmlFor="isFavorited">Favorito</label>
            </div>

            <button type="submit">Add</button>
        </form>
    );
}

export default Form;