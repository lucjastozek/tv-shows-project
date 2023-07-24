// Season number and episode number must be displayed as an episode code:
// Each part must be zero-padded to two digits.
// Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
// You must extract a pure function to generate this episode code from an episode object, and write unit tests for it with jest.


function generateEpisodeCode(season: number, episode: number): string {
    let seasonStr = String(season);
    let episodeStr = String(episode);

    if (seasonStr.length < 2){
        seasonStr = "0" + seasonStr;
    }

    if (episodeStr.length < 2){
        episodeStr = "0" + episodeStr;
    } 
    return "S" + seasonStr + "E" + episodeStr
}

export { generateEpisodeCode }