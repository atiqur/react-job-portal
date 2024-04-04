import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Card = ({ title, subtitle, bg, style, linkText, link }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='mt-2 mb-4'>{subtitle}</p>
      <Link to={link} className={style}>
        {linkText}
      </Link>
    </div>
  )
}

export default Card
