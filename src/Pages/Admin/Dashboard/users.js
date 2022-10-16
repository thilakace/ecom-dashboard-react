import React, { useEffect } from "react";
import SideBar2 from "../Components/sidebar2";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminHomeLayout from "../Components/layout";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const Users = () => {

    useEffect(() => {
         console.log("get users");
    })
   return (
       <AdminHomeLayout >
       <Container>
           <Row>
              <Col>
              <Card>
                 <Card.Body>
                 <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                 </Card.Body>
             </Card>
              </Col>
           </Row>
       </Container>
       </AdminHomeLayout>
   
   )
}

export default Users;