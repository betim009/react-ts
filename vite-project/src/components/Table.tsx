import Team from './Team'
import data from '../data/data'

function Table() {
    return (
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
                {data.map((team, index) => (
                    <Team
                        key={index}
                        team={team}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Table;
