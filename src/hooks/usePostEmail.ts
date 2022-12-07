import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation, UseMutationResult } from "react-query";
import postEmail from "services/postEmail";

export default (
    email: string,
    codeInsee: string,
    commune: string
): UseMutationResult<any, AxiosError, string, Error> =>
    useMutation(
        ["postEmail", email],
        async (userEmail: string) => postEmail(userEmail, codeInsee, commune),
        {
            onSuccess: () => {
                toast.success("Merci pour votre souscription");
            },
            onError: error => {
                const status = error?.response?.status;
                const errorMessage =
                    status === 403
                        ? "Cet email a déjà été souscrit"
                        : "Une erreur s'est produite merci de réessayer";

                toast.error(errorMessage, {
                    duration: 5000,
                });
            },
        }
    );
