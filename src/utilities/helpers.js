export const capitalizeSlug = (slug) => {
    const words = slug.split('-');

    const capitalizedWords = words.map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    return capitalizedWords.join(' ');
}
