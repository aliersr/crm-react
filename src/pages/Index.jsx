import { useLoaderData } from 'react-router-dom';

import { getClients } from '../data/getClient';
import Client from './Client';

export const Loader = () => {
  const client = getClients();
    return client; 
}

const Index = () => {
  
  const customers = useLoaderData();

 
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customers</h1>
      <p className="mt-3">Manager</p>

      {customers.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Customer</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <Client
                key={customer.id}
                customer={customer}
              
              />
            ))}
          </tbody>
        </table>
      ): (
          <p className='text-center mt-10'>No Customers</p>
      )}
    </>

  )
}

export default Index;