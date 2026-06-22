
import Navber from '../components/shared/Navber';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navber />
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayout;

