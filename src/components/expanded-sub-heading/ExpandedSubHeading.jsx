import style from './expandedSubHeading.module.css'

const ExpandedSubHeading = ({ text }) => {
  return <h3 className={style.heading}>{text}</h3>;
};

export default ExpandedSubHeading;
