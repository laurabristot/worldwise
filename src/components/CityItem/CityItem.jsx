/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useCities } from '../../contexts/CitiesContext'
import useFlagEmojiToPNG from '../../hooks/useFlag'
import styles from './CityItem.module.css'

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date))

export default function CityItem({ city }) {
  const { currentCity } = useCities()
  const { cityName, emoji, date, id, position } = city
  const lastCity = currentCity.id === id
  const flagImage = useFlagEmojiToPNG(emoji)

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          lastCity && styles['cityItem--active']
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          {flagImage && <img src={flagImage.src} alt={flagImage.alt} />}
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}
