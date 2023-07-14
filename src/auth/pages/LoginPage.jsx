import { Link } from 'react-router-dom';

export const LoginPage = () => {

    return(
        <div className='h-screen flex bg-gradient-to-br from-teal-300 to-teal-100'>
            <h1>LoginPage</h1>
            <Link to='/register'>go to register</Link>
        </div>
    )

}