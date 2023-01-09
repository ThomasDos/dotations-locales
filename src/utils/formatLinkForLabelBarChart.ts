const formatLinkForLabelBarChart = (text: string): string => {
    const [commune, codeInsee] = text.split(" ");
    const codeInseeFormatted = codeInsee.replace("(", "").replace(")", "");
    return `/${codeInseeFormatted}?commune=${commune}`;
};

export default formatLinkForLabelBarChart;
