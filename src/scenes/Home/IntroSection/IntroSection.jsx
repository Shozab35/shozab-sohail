import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I'm Shozab Sohail, a dynamic and results-driven digital marketer and WordPress developer. With a solid foundation in website development and a knack for creating user-friendly WordPress websites, I excel at turning data into engaging online campaigns. My expertise spans content creation, SEO optimization, and social media management, all aimed at driving traffic, generating leads, and achieving business goals.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  WordPress Developer,
                SEO,
Social Media Management,
HTML, Java, CSS,
React (Intermediate),
Video Marketing,
Pay-Per-Click Advertising (PPC),
Google Analytics,
Google Ads,
Email Marketing,
Facebook Ads,
Social Media Marketing,
SEM,
WordPress and Wix,
Facebook Business Manager,
CSM
                </b>
              </i>
              <br />
              and other relevant technologies.<br />
              I find great joy and fulfillment in the process of designing websites.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
         
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/shozab.sohail.73"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/shozab-sohail-044099202/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
