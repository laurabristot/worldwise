import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, PageNav } from '../../components'
import { useAuth } from '../../contexts/AuthContext'
import styles from './Login.module.css'

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com')
  const [password, setPassword] = useState('qwerty')
  const { login, isAuth } = useAuth()

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (email && password) {
      login(email, password)
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/app', { replace: true })
    }
  }, [isAuth, navigate])

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  )
}
