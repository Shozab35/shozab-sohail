import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <svg
          viewBox="0 0 200 50"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#000" />
            </filter>
          </defs>
          <text
            x="10"
            y="35"
            fontFamily="Arial"
            fontSize="30"
            fontWeight="bold"
            fill={s.logoPrimary}
            filter="url(#shadow)"
          >
            Shozab.dev
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
