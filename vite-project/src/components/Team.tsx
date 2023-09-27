import TeamType from '../types/team'

type TeamProps = {
    team: TeamType,
}

function Team({ team }: TeamProps) {
    return (
        <tr>
            <td>{team.time}</td>
            <td>{team.pontos}</td>
            <td>{team.vitorias}</td>
            <td>{team.derrotas}</td>
            <td>{team.empates}</td>
        </tr>
    );
}

export default Team;
