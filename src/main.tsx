
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StoreContext,store } from '@/context/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <StoreContext.Provider value={store}>
        <App />
   </StoreContext.Provider>
    
  
)
