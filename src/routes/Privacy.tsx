import { useParams } from 'react-router-dom';

const Privacy = () => {
    let { id } = useParams();  // Fetching data

    return (
        <>Privacy {id}</>
    );
}

export default Privacy;