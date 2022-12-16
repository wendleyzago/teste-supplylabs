import { useState, useEffect } from "react"
import TableContainer from "../../components/TableContainer"

const url = "http://localhost:5000/"

const Home = () => {

  const [users, setUsers] = useState([])

  const getUsers = async (url) => {
    
    const response = await fetch(url)
    const data = await response.json()

    data.map((item) => {
      const fullName = item.name.split(" ")
      item.name = fullName[0]
      item.lastname = fullName[1]
      item.key = item.id
    })

    setUsers(data)
  }

  useEffect(() => {
    const users = `${url}users`

    getUsers(users)
  }, [])

  return (
    <div>
      <TableContainer data={users}/>
    </div>
  )
}

export default Home