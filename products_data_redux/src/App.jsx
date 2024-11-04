import './App.css'
import NavSection from './components/Nav'
import ProductsSection from './components/Products'

function App() {

    return (
        <div className='flex flex-col'>
            <NavSection showAddButton={true} />
            <ProductsSection />
        </div>
    )
}

export default App
