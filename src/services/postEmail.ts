import apiDotations from "./apiDotations";

export default async (email: string) =>
    apiDotations.post(
        `https://jsonplaceholder.typicode.com/posts`

        // , {
        // email,
        // }
    );
