export default (code: string): string => {
    const isMetropole = code.match(/^(751|132|6938)/gm);

    if (isMetropole) {
        switch (isMetropole[0]) {
            case "751":
                return "75056";
            case "132":
                return "13055";
            case "6938":
                return "69123";
            default:
                return code;
        }
    } else {
        return code;
    }
};
