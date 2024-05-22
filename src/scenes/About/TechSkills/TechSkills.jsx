import React from 'react';
import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiAmazonaws,
  SiHootsuite,
  SiGoogleanalytics,
  SiGoogleads,
  SiMailchimp, // Importing the Email Marketing icon
  SiFacebook, // Importing the Facebook Ads icon
} from 'react-icons/si';
import { FaWordpress, FaSearch } from 'react-icons/fa'; // Importing the new WordPress and SEO icons

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <FaWordpress /> {/* Replaced the WordPress icon */}
      </li>
      <li className={s.techIcon}>
        <FaSearch /> {/* Added the Search (SEO) icon */}
      </li>
      <li className={s.techIcon}>
        <SiHootsuite /> {/* Added the Hootsuite icon for Social Media Management */}
      </li>
      <li className={s.techIcon}>
        <SiGoogleanalytics /> {/* Added the Google Analytics icon */}
      </li>
      <li className={s.techIcon}>
        <SiGoogleads /> {/* Added the Google Ads icon */}
      </li>
      <li className={s.techIcon}>
        <SiMailchimp /> {/* Added the Email Marketing icon */}
      </li>
      <li className={s.techIcon}>
        <SiFacebook /> {/* Added the Facebook Ads icon */}
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      
    </ul>
  );
};

export default TechSkills;
