/* eslint-disable react/prop-types */
import { CityItem, Message, Spinner } from '..'
import styles from './CityList.module.css'

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!cities.length) {
    return (
      <Message message="Add your first city, by clicking on a city on the map" />
    )
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city, index) => (
        <CityItem city={city} key={index} />
      ))}
    </ul>
  )
}
