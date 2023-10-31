import { useEffect, useState } from 'react'

const useFlagEmojiToPNG = (flag) => {
  const [flagImage, setFlagImage] = useState(null)

  useEffect(() => {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join('')

    const flagImageUrl = `https://flagcdn.com/24x18/${countryCode}.png`

    const image = new Image()
    image.src = flagImageUrl
    image.alt = 'flag'

    image.onload = () => {
      setFlagImage(image)
    }
  }, [flag])

  return flagImage
}

export default useFlagEmojiToPNG
