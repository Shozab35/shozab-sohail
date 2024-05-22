import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Shozab Sohail </span>
        from <span className={s.purple}> Punjab, Pakistan.</span>
        <br />
        My expertise lies in digital marketing and WordPress development,{' '}
        <br />
        where I merge tech prowess with creative strategies.
        <br />
        <br />
        I am doing a Bachelor's degree in Computer Science and
        <br />
       
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
