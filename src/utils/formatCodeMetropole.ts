export default (code: string): string => {
    const isMetropole = code.match(/^(751|132|6938)/gm);

    if (isMetropole) {
        const metropoleCode = isMetropole[0];

        if (metropoleCode === "751") {
            return "75056";
        }
        if (metropoleCode === "132") {
            return "13055";
        }
        if (metropoleCode === "6938") {
            return "69123";
        }
    }

    return code;
};
