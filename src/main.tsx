// Importando o StrictMode do React, que ajuda a identificar potenciais problemas na aplicação
import { StrictMode } from 'react'

// Importando a função createRoot do react-dom/client, que é usada para inicializar a renderização do React
import { createRoot } from 'react-dom/client'

// Importando o arquivo CSS para aplicar estilos globais à aplicação
import './index.css'

// Importando o componente principal da aplicação (App)
import App from './App.tsx'

// Inicializando o React e renderizando o componente App dentro do elemento com id 'root' na página
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* StrictMode ajuda a destacar problemas em componentes React durante o desenvolvimento */}
    <App />
  </StrictMode>,
)
