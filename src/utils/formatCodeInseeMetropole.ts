export default (codeInsee: string): string => {
    const isMetropole = codeInsee.match(/^75|13|69/gm);

    if (isMetropole) {
        switch (isMetropole[0]) {
            case "75":
                return "75056";
            case "13":
                return "13055";
            case "69":
                return "69123";
            default:
                return codeInsee;
        }
    } else {
        return codeInsee;
    }
};
