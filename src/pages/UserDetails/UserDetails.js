import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card } from "antd"

import "./UserDetails.css"
import imgUser from "../../img/img-usuario.png"

const usersUrl = "http://localhost:5000/users/"

const UserDetails = () => {
  const {id} = useParams()
  const [user, setUser] = useState(null)

  const getUser = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    setUser(data)
  }

  useEffect(() => {
    const userUrl = `${usersUrl}${id}`

    getUser(userUrl)
  }, [id])

  return (
    <div className="site-card-border-less-wrapper">

      <Card
        className="card-container"
        title="Detalhes"
      >
        {user && (
          <div className="info-container">
            <img className="img-user" src={imgUser} alt="foto do usuario" />
            <p><span>Nome:</span> {user.name}</p>
            <p><span>Idade:</span> {user.age}</p>
            <p><span>E-mail:</span> {user.email}</p>
            <p><span>Rua:</span> {user.address.street}</p>
            <p><span>Suite:</span> {user.address.suite}</p>
            <p><span>Cidade:</span> {user.address.city}</p>
            <p><span>Cep:</span> {user.address.zipcode}</p>
          </div>
        )}
      </Card>
    </div>
  )
}

export default UserDetails