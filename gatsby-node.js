import fs from 'fs-extra-promise';
import sm from 'sitemap';
import orderBy from 'lodash/orderBy';

// Customize the Webpack config
exports.modifyWebpackConfig = config => {
    // Override Gatsby's image loader to ignore SVGs so we can inline them
    config.loader('images', {
        test: /\.(jpe?g|png|gif)(\?.*)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        loaders: [
            'url-loader?limit=10000',
            'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}' // eslint-disable-line
        ]
    });

    config.loader('svg', {
        test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'svg-sprite-loader'
    });

    return config;
};

const getPriority = page => {
    const { path, data } = page;

    if (path === '/') {
        return 1.0;
    } else if (data && data.showInMenu) {
        return 0.8;
    } else if (data && data.type === 'artwork') {
        return 0.6;
    }
    return 0.4;
};

const pagesToSitemap = pages => {
    return orderBy(
        pages
            .map(p => {
                if (p.path !== undefined && p.path !== '/404.html') {
                    return {
                        url: p.path,
                        changefreq: 'daily',
                        priority: getPriority(p)
                    };
                }
                return undefined;
            })
            .filter(u => u !== undefined),
        ['priority', 'url'],
        ['desc', 'asc']
    );
};

const generateSitemap = pages => {
    const sitemap = sm.createSitemap({
        hostname: 'https://darcychan.com',
        cacheTime: '60000',
        urls: pagesToSitemap(pages)
    });

    console.log('Generating sitemap.xml'); // eslint-disable-line no-console
    fs.writeFileSync(`${__dirname}/public/sitemap.xml`, sitemap.toString());
};

const copyStaticFiles = () => {
    console.log('Copying static files'); // eslint-disable-line no-console
    fs.copySync(`${__dirname}/static/`, `${__dirname}/public/`);
};

export const postBuild = (pages, callback) => {
    generateSitemap(pages);
    copyStaticFiles();
    callback();
};
