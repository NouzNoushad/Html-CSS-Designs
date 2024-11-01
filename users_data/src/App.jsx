import './App.css'
import NavSection from './components/Nav'
import Users from './components/Users'

function App() {

    return (
        <div className='bg-blue-50 h-fit'>
            <NavSection title={"User Data"} showAddButton={true} />
            <Users/>
        </div>
    )
}

export default App
