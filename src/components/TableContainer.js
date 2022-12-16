import { Button, Table } from "antd"
import Column from "antd/es/table/Column"
import { Link } from "react-router-dom"

const TableContainer = ({data}) => {

  const pagination = {
    pageSize: 5
  }

  return (
    <Table 
      dataSource={data} 
      pagination={pagination}
    >
        <Column 
          title="ID" 
          dataIndex="id" 
          key="id" 
          sorter={(a, b) => a.id - b.id}
        />
        <Column 
          title="Nome" 
          dataIndex="name" 
          key="name"
        />
        <Column 
          title="Sobrenome" 
          dataIndex="lastname" 
          key="lastname"/>
        <Column 
          title="Idade" 
          dataIndex="age" 
          key="age" 
          sorter={(a, b) => a.age - b.age}
        />
        <Column 
          title="E-mail" 
          dataIndex="email" 
          key="email"/>
        <Column 
          title="Ações" 
          dataIndex="actions" 
          key="actions"
          render={(_, record) => <Link to={`/users/${record.id}`}><Button type="primary">Mais detalhes</Button></Link>}
        />
     </Table>
  )
}

export default TableContainer