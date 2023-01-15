import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';

import FormNewClient from '../components/FormNewClient';
import Error from '../components/Error';
import { addNewClient } from '../data/clients';



export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const email = formData.get('email');

  //Validations
  const errors = [];

  if (Object.values(data).includes('')) errors.push('All fields are required');


  let regEx = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
  if (!regEx.test(email)) errors.push('Invalid Email');

  //Return data If there are any Error.
  if (Object.keys(errors).length) return errors;

  await addNewClient(data);

  return redirect('/');

}


const NewClient = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill in all the fields to register a new client</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate('/')}
        >
          Back
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errors?.length && errors.map((error, i) => <Error key={i}>
          {error}
        </Error>)}

        <Form
          method='post'
          noValidate
        >

          <FormNewClient
          />

          <input
            className='mt-5 w-full bg-blue-800 p-3 uppercase text-white text-lg'
            type="submit"
            value="Register Client"
          />
        </Form>

      </div>
    </>
  )
}

export default NewClient;