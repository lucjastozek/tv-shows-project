function compareShowsAlphabetically(
    firstStr: string,
    secondStr: string
): number {
    const first = firstStr.toLowerCase();
    const second = secondStr.toLowerCase();

    return first > second ? 1 : -1;
}

export { compareShowsAlphabetically };
