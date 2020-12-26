import React, {FC} from 'react';
import './home-page.scss'
import Directory from "../../components/directory/Directory";

const HomePage: FC = () => (
    <div className='homepage'>
        <Directory/>
    </div>
)

export default HomePage
