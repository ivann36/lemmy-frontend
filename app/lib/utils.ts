function selectFirstFiveWords(inputString: string, number: number): string {
    // Split the input string into an array of words
    const wordsArray = inputString.split(' ');

    // Select the first five words from the array
    const selectedWords = wordsArray.slice(0, number);

    // Join the selected words back into a string
    const result = selectedWords.join(' ');

    return result;
}