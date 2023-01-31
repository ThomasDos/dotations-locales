import { ImageFixed } from "components/ui";

const LandingIntroduction = () => {
    return (
        <div className="flex flex-col md:flex-row py-4 px-6 items-center mx-auto mt-10 bg-green-tilleul-verveine-975 w-11/12">
            <ImageFixed
                src="/images/incubateur-territoires.png"
                width={120}
                height={68}
                alt="logo de l'incubateur des territoires ANCT"
            />
            <div className="md:ml-8 text-justify">
                Les montants des dotations sont calculés sur la base de la{" "}
                <u>loi de finances 2022</u> avec les{" "}
                <u>critères de répartitions 2022</u>. Pour rappel, seule la
                notification officielle de la DGF fait foi.
            </div>
        </div>
    );
};

export default LandingIntroduction;
