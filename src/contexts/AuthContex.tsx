import UsuarioLogin from "..models/UsuarioLogin";
import { createContext } from "react";


interface AuthContexProps{
    usuario:UsuarioLogin
    handleLogout():void
    handleLogin:(usuario: UsuarioLogin): Promise<void>
    isLoading:boolean
}

interface AuthProviderProps{
    children: ReactNode
}


export const AuthContex = createContext({} as AuthContexProps)

export function AuthProvider({children}: AuthProviderProps){

    const[usuario, setUsuario] = useState<UsuarioLogin>({
        id:0,
        nome:"",
        usuario:"",
        senha:"",
        foto:"",
        token:""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin:UsuarioLogin) {
       setIsLoading(true) 

       try {
        await login('/usuarios/logar', usuarioLogin, setUsuario) 
        alert("O usuario foi autenticado com sucesso")
        
       } catch (error) {
        alert("Os dados do usuario estão inconsistente")
        
       }
       setIsLoading(false)
    }
function handleLogout(){
    setUsuario({
        id:0,
        nome:"",
        usuario:"",
        senha:"",
        foto:"",
        token:""
    })
       
}
return(
    <AuthContex.Provider value={{usuario.handleLogin,handleLogout,isLoading}}>
    {children}
    </AuthContex.Provider>
)



}
