// Importação dos pacotes e componentes necessários
import { Link, useNavigate } from 'react-router-dom'; // Importa 'Link' e 'useNavigate' para navegação entre páginas
import './Login.css'; // Importa o arquivo de estilo CSS para o componente

import { ChangeEvent, useContext, useEffect, useState } from 'react'; // Importa hooks do React
import UsuarioLogin from '../../models/UsuarioLogin'; // Importa o modelo de dados do usuário para login
import { RotatingLines } from 'react-loader-spinner'; // Importa um componente de spinner para carregamento
import { AuthContext } from '../../context/AuthContex'; // Importa o contexto de autenticação para gerenciar estado de login

function Login() {
    // Cria um hook de navegação para redirecionar o usuário
    const navigate = useNavigate();

    // Consome os dados do contexto de autenticação
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    // Cria o estado local para armazenar os dados do formulário de login
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    // Efeito colateral que verifica se o usuário já está autenticado
    useEffect(() => {
        // Se o token do usuário estiver presente, redireciona para a página home
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    // Função para atualizar o estado dos dados de login conforme o usuário digita
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin, // Mantém os outros valores de estado
            [e.target.name]: e.target.value // Atualiza o valor do campo com base no nome do campo
        })
    }

    // Função para tratar a submissão do formulário de login
    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() // Previne o comportamento padrão do formulário
        handleLogin(usuarioLogin) // Chama a função de login do contexto passando os dados do usuário
    }

    return (
        <>
            {/* Div principal com grid responsivo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 
                    h-screen place-items-center font-bold ">
                
                {/* Formulário de Login */}
                <form className="flex justify-center items-center flex-col w-1/2 gap-4"
                    onSubmit={login}> {/* Chama a função 'login' ao submeter o formulário */}
                    
                    {/* Título da página */}
                    <h2 className="text-slate-900 text-5xl ">Entrar</h2>

                    {/* Campo de entrada para o nome de usuário */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.usuario} // Valor do campo 'usuario' vinculado ao estado
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} // Atualiza o estado ao digitar
                        />
                    </div>

                    {/* Campo de entrada para a senha */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuarioLogin.senha} // Valor do campo 'senha' vinculado ao estado
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} // Atualiza o estado ao digitar
                        />
                    </div>

                    {/* Botão de login */}
                    <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center
                                   hover:bg-indigo-900 text-white w-1/2 py-2">
                        {/* Exibe o spinner de carregamento se 'isLoading' for verdadeiro */}
                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span> // Caso contrário, exibe o texto "Entrar"
                        }
                    </button>

                    {/* Linha horizontal de separação */}
                    <hr className="border-slate-800 w-full" />

                    {/* Link para página de cadastro */}
                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>

                {/* Imagem de fundo visível apenas em telas grandes */}
                <div className="fundoLogin hidden lg:block"></div>
            </div>
        </>
    );
}

export default Login;
