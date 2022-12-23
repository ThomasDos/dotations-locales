import { ImageFixed } from "components/ui";
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
        <div className="flex flex-col justify-center items-center p-10">
            <ImageFixed
                src="/images/error.png"
                width={128}
                height={128}
                alt="une icone d'un écran en erreur"
            />
            <p className="mt-4 text-lg font-bold text-center">
                La page que vous recherchez n&apos;existe pas, vous allez être
                rediriger à la page d&apos;accueil
            </p>
        </div>
    );
};

export default NotFound;
