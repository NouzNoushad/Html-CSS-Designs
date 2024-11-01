import './App.css'
import NavSection from './components/Nav'
import Users from './components/Users'

function App() {

    return (
        <>
            <NavSection title={"User Data"} showAddButton={true} />
            <Users/>
        </>
    )
}

export default App
