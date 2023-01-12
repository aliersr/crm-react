import { getClient } from "../data/clients";

export async function loader({ params }) {
    const client = await getClient(params.clientId);
    console.log(client);
    
    return {};
}

const EditClient = () => {
    return (
        <div>EditClient</div>
    )
}

export default EditClient