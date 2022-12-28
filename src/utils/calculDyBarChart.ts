const calculDyBarChart = (dotationsLength: number) => {
    switch (true) {
        case dotationsLength <= 2:
            return dotationsLength * -18;
        case dotationsLength <= 3:
            return dotationsLength * -13;
        case dotationsLength <= 4:
            return dotationsLength * -12;
        case dotationsLength <= 6:
            return dotationsLength * -8;
        case dotationsLength <= 8:
            return dotationsLength * -6;
        case dotationsLength <= 10:
            return dotationsLength * -5;
        case dotationsLength <= 12:
            return dotationsLength * -4;
        case dotationsLength <= 14:
            return dotationsLength * -3.5;
        case dotationsLength <= 18:
            return dotationsLength * -3;
        default:
            return dotationsLength * -2;
    }
};

export default calculDyBarChart;
