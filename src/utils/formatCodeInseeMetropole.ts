export default (codeInsee: string): string => {
    const isMetropole = codeInsee.match(/^(751|132|6938)/gm);

    if (isMetropole) {
        switch (isMetropole[0]) {
            case "751":
                return "75056";
            case "132":
                return "13055";
            case "6938":
                return "69123";
            default:
                return codeInsee;
        }
    } else {
        return codeInsee;
    }
};
