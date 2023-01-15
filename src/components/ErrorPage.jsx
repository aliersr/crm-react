import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    
    return (
        <div className='space-y-8'>
            <h1 className='text-center text-6xl font-extrabold mt-20 text-blu-900'>CRM Clientes</h1>
            <p className='text-center my-4 bg-red-600 text-white font-bold p-3 uppercase'>Error: 
                <span className='text-center p-3 uppercase'>{error.statusText || error.message}</span>
            </p>
        </div>
    )

}


export default ErrorPage;
