export const fetchApi = async () => {
    const response = await fetch('https://www.omdbapi.com/?apikey=58eeaad1&s=naruto');

    if (!response.ok) {
        throw new Error(`Failed to fetch coordinates`);
    }

    const json = await response.json();

    return json;
};
