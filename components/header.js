import React from 'react';
import ReactDOM from 'react-dom';
import sortBy from 'lodash/sortBy';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Motion, spring } from 'react-motion';

import 'scss/header.scss';
import Nav from 'components/nav';
import Icon, {Glyph} from 'components/icon';


export default class Header extends React.Component {
    render() {
        const { location, pages, handleMenuToggle, menuVisible } = this.props;
        
        const menuItems = sortBy(
            pages,
            page => page.data.id
        ).filter(page => page.data.showInMenu === true);
        
        let currentCategory = pages.filter(page => page.path === location)[0]
        let currentCategoryLink = null;
        if (currentCategory) {
            currentCategory = currentCategory.data.category;
            currentCategoryLink = menuItems.filter(page => page.data.category === currentCategory)[0];
        }

        return(
            <header className="page-header">
                <h1 className="page-brand-wrapper">
                    <Link className="brand page-brand" 
                          to={prefixLink('/')}
                          onClick={() => handleMenuToggle('collapse')}>
                        <span className="brand-title page-brand-title">{config.siteTitle}</span>
                        <span className="brand-subtitle page-brand-subtitle">{config.siteSubTitle}</span>
                        <span className="page-brand-abbr">{config.siteAbbr}</span>
                    </Link>
                    {currentCategory && !menuVisible &&
                        <Link className="page-brand page-brand-category" 
                              to={prefixLink(currentCategoryLink.path)}
                              onClick={() => handleMenuToggle('collapse')}>
                            {currentCategoryLink.data.title}
                        </Link>}
                    {menuVisible && 
                        <span className="page-brand-category">
                            Menu
                        </span>}
                    <button className="page-nav-toggle" type="button" onClick={() => handleMenuToggle()}>
                        {menuVisible &&                        
                            <span className="close">
                                Close
                                <Icon glyph={Glyph.Close} />
                            </span>}
                        {!menuVisible &&   
                            <span className="menu">
                                Menu
                                <Icon glyph={Glyph.Menu} />
                            </span>}
                    </button>
                </h1>
                
                <Motion style={{x: spring(menuVisible ? 1 : 0, {stiffness: 300, damping: 30})}}>
                    {({x}) => 
                        <div className="page-nav-overlay"
                             style={{
                                 display: x === 0 ? 'none' : 'block',
                                 opacity: x
                             }}/>}
                </Motion>
                
                <Motion style={{x: spring(menuVisible ? 0 : -100, {stiffness: 300, damping: 30})}}>
                    {({x}) => 
                        <Nav className={menuVisible ? 'page-nav-open' : ''}
                             location={location} 
                             pages={menuItems} 
                             handleMenuToggle={handleMenuToggle} 
                             style={{
                                 display: x === -100 ? 'none' : 'block',
                                 WebkitTransform: `translate(0, ${x}%)`,
                                 transform: `translate(0, ${x}%)`,
                             }}/>}
                </Motion>                
            </header>
        )
    }
}
