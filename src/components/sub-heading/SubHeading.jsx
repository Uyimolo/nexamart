import style from './subHeading.module.css'

const SubHeading = ({text}) => {
  return (
    <div>
      <p className={style.heading_text}>{text}</p>
    </div>
  )
}

export default SubHeading
