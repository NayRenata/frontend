import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContex'


function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>

            <img
                className='w-full h-72 object-cover border-b-8 border-white'
                src="/src/assets/logo.png" alt="Capa do Perfil" />

            <img
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                src="/src/assets/logo1.png"
                alt={`Foto de perfil de ${usuario.nome}`} />

            <div
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-black text-white text-2xl items-center justify-center p-10"
            >
                <p >Sou desenvolvedora backend, apaixonada por tecnologia e sempre em busca de aprender mais. Atualmente, estou explorando o frontend para expandir meus conhecimentos e conseguir criar soluções completas e inovadoras.  </p>
                
            </div>

        </div>
    )
}

export default Perfil