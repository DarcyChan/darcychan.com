import sortBy from 'lodash/sortBy';

export const getArtworksFromRoute = (route, category) => {
    if (category) {
        return route.pages.filter(
            page => page.data.category === category && page.data.type === 'artwork'
        );
    }
    return route.pages.filter(
        page => page.data.type === 'artwork'
    );
};
