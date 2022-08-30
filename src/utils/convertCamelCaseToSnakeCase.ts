export default (str: string) =>
    str
        .split(/(?=[A-Z])/)
        .join("_")
        .toLowerCase();
