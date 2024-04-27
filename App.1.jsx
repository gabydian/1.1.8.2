import {personagens} from "./personagensRE";
export function App1() {
    return (
        <div>
            <h4>Personagens da família Redfield</h4>
            <ul>
                {personagens
                    .filter(personagem => personagem.nome.includes('Redfield'))
                    .map(personagem => (
                        <li key={personagem.nome}>
                            <img src={personagem.url} alt={personagem.nome} height={'200'} />
                            <h3>{personagem.nome}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default App1;