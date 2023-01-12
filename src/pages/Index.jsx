import { useLoaderData } from 'react-router-dom';

import { getClients } from '../data/clients';
import Client from './Client';

export const loader = () => {
  const client = getClients();
  return client;
}

const Index = () => {

  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manager</p>

      {clients.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Client</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <Client
                key={client.id}
                client={client}

              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'>No Clients</p>
      )}
    </>

  )
}

export default Index;