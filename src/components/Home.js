import Dashboard from "./Home-components/Dashboard"

const Home = () => {

    return (
        <div className="home">
            <div className="dashboard-header">
                <header id="username-dashboard"> User name</header>
                <div className="dash-buttons">
                    <button> create a room </button>
                    <button> join a room </button>
                </div>
            </div>
            
           <Dashboard />
        </div>
    )
}

export default Home
