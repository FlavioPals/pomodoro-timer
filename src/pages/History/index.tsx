import { HistoryContainer, HistoryList, Status } from "./styles";



export function History() {
    return(
    <HistoryContainer>
        Meu Histórico
        <HistoryList>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Inicio</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                            <Status statusColor="green">Concluido</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                            <Status statusColor="red">Concluido</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                            <Status statusColor="yellow">Concluido</Status>
                        </td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td>
                            <Status statusColor="green">Concluido</Status>
                        </td>
                    </tr>
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>
    )
}