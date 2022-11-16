import toast from "react-hot-toast";
import { useMutation } from "react-query";
import postEmail from "services/postEmail";

export default (email: string) =>
    useMutation(
        ["postEmail", email],
        async (userEmail: string) => postEmail(userEmail),
        {
            onSuccess: () => {
                toast.success("Merci pour votre souscription");
            },
            retry: 1,
        }
    );
