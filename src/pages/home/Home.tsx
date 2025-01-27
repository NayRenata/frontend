import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"
import minhaImagem from '../../assets/logo2.png';

function Home() {
    return (
        <>
            <div className="bg-black flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-3xl font-bold'>
                        "Chegue mais perto, vamos fazer um show!"
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opiniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalPostagem />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                    <img
                            src={minhaImagem}
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                        
                        

                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home