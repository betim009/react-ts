import React, { useState } from 'react';
import Team from './Team';
import data from '../data/data';

function Table() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredTeams = data.filter(team => team.time.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filteredTeams);
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Filtrar por time"
            />

            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Pontos</th>
                        <th>Vitórias</th>
                        <th>Derrotas</th>
                        <th>Empates</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((team, index) => (
                        <Team
                            key={index}
                            team={team}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
