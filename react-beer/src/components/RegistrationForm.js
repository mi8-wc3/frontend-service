import React from 'react'
import '../styles.css'

const RegistrationForm = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [isFirstFormActive, setIsFirstFormActive] = React.useState(true)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleFormToggle = () => {
    setIsFirstFormActive(!isFirstFormActive)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Referer': 'http://localhost:8080/swagger-ui.html',
        },
        body: data,
      });

      if (response.ok) {
        console.log('Аутентификация успешно выполнена');
        // Добавьте здесь логику для перенаправления пользователя после успешной аутентификации
      } else {
        console.error('Ошибка при аутентификации');
        // Добавьте здесь обработку ошибки аутентификации, например, отображение сообщения об ошибке
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      // Добавьте здесь обработку других ошибок, возникающих при отправке запроса
    }
  };

  return (
    <div className="registration-container">
      <div className="background-images">
        <img
          className="heart-bottle"
          src="./beer-pics/heart_bottle.png"
          alt="heart-bottle"
        />
        <img className="bubblz" src="./beer-pics/bubblz.png" alt="bubblz" />
        <img className="cap" src="./beer-pics/cap.png" alt="cap" />
        <img className="cap2" src="./beer-pics/cap2.png" alt="cap2" />
      </div>
      <div
        className={`login-window ${
          isFirstFormActive ? '' : 'second-form-active'
        }`}
      >
        <div className="form-toggle">
          <button
            onClick={() => setIsFirstFormActive(true)}
            className={isFirstFormActive ? 'active' : ''}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsFirstFormActive(false)}
            className={!isFirstFormActive ? 'active' : ''}
          >
            Register
          </button>
        </div>
        {isFirstFormActive ? (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="custom-button">
              <img
                height={45}
                width={16}
                src="./beer-pics/beer-button.png"
                alt="beer-button"
              />
              <img
                height={45}
                width={45}
                src="./beer-pics/bottle-opener-full.png"
                alt="bottle-opener"
              />
            </button>
          </form>
        ) : (
          <form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="custom-button"
            >
              <img
                height={45}
                width={16}
                src="./beer-pics/beer-button.png"
                alt="beer-button"
              />
              <img
                height={45}
                width={45}
                src="./beer-pics/bottle-opener-full.png"
                alt="bottle-opener"
              />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default RegistrationForm
