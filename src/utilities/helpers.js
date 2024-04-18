export const capitalizeSlug = (slug) => {
    const words = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
}
