const stringToBoolean = (str: string | undefined): boolean => {
    if (!str) return false;
    return str.toLowerCase() === "true";
};

export default stringToBoolean;
