import { useNavigate, Form, useLoaderData, useActionData, redirect } from "react-router-dom";
import { getClient, updateClient } from "../data/clients";
import FormClient from "../components/FormClient";
import Error from "../components/Error";

export async function loader({ params }) {
    const client = await getClient(params.clientId);
    //Custom error message
    if (Object.values(client).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Client not found'
        })
    }

    return client;
}

export async function action({ request, params }) {

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

    await updateClient(params.clientId, data);
    return redirect('/')
}


const EditClient = () => {

    const navigate = useNavigate();
    const client = useLoaderData();
    const errors = useActionData();


    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editing Client</h1>
            <p className="mt-3">Fill in all the fields, there are required.</p>

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

                    <FormClient
                        client={client}
                    />

                    <input
                        className='mt-5 w-full bg-blue-800 p-3 uppercase text-white text-lg'
                        type="submit"
                        value="Edit Client"
                    />
                </Form>

            </div>
        </>
    )
}

export default EditClient;