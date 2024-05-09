import { useRouteError } from "react-router-dom";

// Doing better types for error messages, manually created
// Doesen't matter so much, bcs during runtime these types are gone anyway
interface IError {
    statusText?: string,   // ? -> optional
    message?: string,
}

const ErrorPage = () => {
    const error = useRouteError() as IError;
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>  {/* This statement only stays during runtime */}
            </p>
        </div>
    );
}

export default ErrorPage;