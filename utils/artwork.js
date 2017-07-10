import sortBy from 'lodash/sortBy';

export const CategoryTypes = {
    Project: 'project',
    Design: 'design',
    Illustration: 'illustration'
};

export const categoryOrder = [
    CategoryTypes.Project,
    CategoryTypes.Design,
    CategoryTypes.Illustration
];

export const getArtworksFromRoute = (route, category) => {
    if (category) {
        return sortBy(
            route.pages.filter(
                page =>
                    page.data.category === category &&
                    page.data.type === 'artwork'
            ),
            page => page.data.id
        );
    }
    return route.pages.filter(page => page.data.type === 'artwork');
};

export const getNextArtwork = (route, page) => {
    const category = page.data.category;
    const catIndex = categoryOrder.indexOf(category);
    const artworks = getArtworksFromRoute(route, category);
    const artIndex = artworks.indexOf(page);

    if (artIndex >= 0 && artIndex < artworks.length - 1) {
        // Get next artwork in same category
        return artworks[artIndex + 1];
    } else if (catIndex >= 0 && catIndex < categoryOrder.length - 1) {
        // Get first artwork of the next category
        return getArtworksFromRoute(route, categoryOrder[catIndex + 1])[0];
    }

    return false;
};
