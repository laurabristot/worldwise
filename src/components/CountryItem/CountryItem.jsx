/* eslint-disable react/prop-types */
import useFlagEmojiToPNG from '../../hooks/useFlag'
import styles from './CountryItem.module.css'

export default function CountryItem({ country }) {
  const flagImage = useFlagEmojiToPNG(country.emoji)
  return (
    <li className={styles.countryItem}>
      <span>
        {flagImage && <img src={flagImage.src} alt={flagImage.alt} />}
      </span>
      <span>{country.country}</span>
    </li>
  )
}
