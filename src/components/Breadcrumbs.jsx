import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <nav className="breadcrumbs container">
      <Link to="/">
        <Home size={16} />
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // Format the display name (e.g., "ayurvedic-oil" -> "Ayurvedic Oil")
        const displayName = value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <React.Fragment key={to}>
            <span className="breadcrumb-separator"><ChevronRight size={14} /></span>
            {last ? (
              <span className="breadcrumb-current">{displayName}</span>
            ) : (
              <Link to={to}>{displayName}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
