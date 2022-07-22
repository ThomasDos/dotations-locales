import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async (codeInsee: string): Promise<any> =>
    axios
        .post("https://dotations-locales-back.osc-fr1.scalingo.io/commune/", {
            code_insee: codeInsee,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
            console.log("res", res.data);
            return res.data;
        });
