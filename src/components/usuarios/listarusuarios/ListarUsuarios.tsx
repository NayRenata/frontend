
import axios from 'axios'; // Importa o Axios para fazer a requisição HTTP
import { useEffect, useState } from 'react';

// Interface que define a estrutura dos usuários.
interface Usuario {
  id: number;
  name: string;
}

function ListarUsuarios() {
  // Estado para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Função assíncrona para consultar os usuários
  async function consultarUsuarios() {

    try {
      // Faz a requisição HTTP para obter os dados dos usuários e atualiza o estado
      const response = await axios.get('/users'); // Substitua a URL conforme necessário
      setUsuarios(response.data); // Atualiza o estado com os dados recebidos
    } catch (error: any) {
      alert('Erro ao buscar os usuários!');
    }
    
  }

  // Usando useEffect para chamar a função de consulta quando o componente é montado
  useEffect(() => {
    consultarUsuarios();
  }, []); // O array vazio [] garante que isso aconteça apenas uma vez

  return (
    <div className='lista'>
      <h1>Lista de usuários - Gerada pelo Axios</h1>
      <ul>
        {/* Mapeia os usuários e exibe cada um na lista */}
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
