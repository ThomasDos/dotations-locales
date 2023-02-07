const formatLinkForLabelBarChart = (text: string): string => {
    const [libelle, code] = text.split(" ");
    const codeFormatted = code.replace("(", "").replace(")", "");
    return `/${codeFormatted}?libelle=${libelle}`;
};

export default formatLinkForLabelBarChart;
