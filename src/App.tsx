// Importação dos componentes e bibliotecas necessários
import Home from './pages/home/Home'; // Componente para a página inicial (Home)
import Navbar from './components/navbar/Navbar'; // Componente de navegação (Navbar)
import Footer from './components/footer/Footer'; // Componente de rodapé (Footer)
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Para configuração das rotas
import Cadastro from './pages/cadastro/Cadastro'; // Página de cadastro
import './App.css'; // Arquivo de estilo global
import Login from './pages/login/Login'; // Página de login
import { AuthProvider } from './context/AuthContex'; // Contexto para autenticação

import FormTema from './temas/formtema/FormTema'; // Página de formulário para criação/edição de temas
import DeletarTema from './temas/deletartema/DeletarTema'; // Página de deletação de temas
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ListaTemas from './temas/listatemas/ListaTemas';


// Componente principal que organiza as rotas e exibe a estrutura da aplicação
function App() {
    return (
        <>
        {/* Provider para o contexto de autenticação, tornando as informações acessíveis em toda a aplicação */}
        <AuthProvider>
            {/* Configuração das rotas utilizando o React Router */}
            <ToastContainer />
            <BrowserRouter>
                {/* Navbar será exibido em todas as páginas */}
                <Navbar/>
                
                {/* Container para as páginas principais da aplicação, com uma altura mínima de 80vh */}
                <div className="min-h-[80vh]">
                    {/* Definição das rotas da aplicação */}
                    <Routes>
                        {/* Rota para a página de login ("/") */}
                        <Route path="/" element={<Login />} />
                        {/* Rota para a página inicial após login ("/home") */}
                        <Route path="/home" element={<Home />} /> 
                        {/* Rota para a página de cadastro de novos usuários */}
                        <Route path="/cadastro" element={<Cadastro />} />
                        {/* Rota para login, também leva à página de login */}
                        <Route path="/login" element={<Login />} />
                        {/* Rota para exibir a lista de temas */}
                        <Route path="/temas" element={<ListaTemas />} />
                        {/* Rota para criar um novo tema */}
                        <Route path="/cadastrartema" element={<FormTema/>} />
                        {/* Rota para editar um tema específico, passando o id como parâmetro */}
                        <Route path="/editartema/:id" element={<FormTema/>} />
                        {/* Rota para deletar um tema específico, passando o id como parâmetro */}
                        <Route path="/deletartema/:id" element={<DeletarTema />} />
                        <Route path="/postagens" element={<ListaPostagens />} />
                        <Route path="/cadastrarpostagem" element={<FormPostagem />} />
                        <Route path="/editarpostagem/:id" element={<FormPostagem />} />
                        <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                        <Route path="/perfil" element={<Perfil/>} />
                        
                    </Routes>
                </div>
                
                {/* Footer será exibido em todas as páginas */}
                <Footer/>
            </BrowserRouter>   
        </AuthProvider>

        </>
    )
}

export default App;
