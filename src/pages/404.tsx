import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            void router.push("/");
        }, 3000);
    }, [router]);

    return (
        <div className="flex justify-center items-center">
            La page que vous recherchez n&apos;existe pas, vous allez être
            rediriger à la page d&apos;accueil
        </div>
    );
};

export default NotFound;
