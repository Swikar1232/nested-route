import {Link, NavLink, Outlet} from 'react-router-dom'
function Dashboard (){
    return(
        <div>
            <h2>Dashboard</h2>
            <nav>
                <Link to="profile">Profile</Link>
                  <Link to="settings">Settings</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Dashboard;