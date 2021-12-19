import "antd/dist/antd.css";
import React from "react";
import { Row, Col} from 'antd';
import { UserCard } from "../../components/User/UserCard";
import { UserCollection } from "../../components/User/UserCollection";
import './UserPage.css';
const UserPage = () => {
    return (
        <div className="userpage-container">
            <Row justify="center" >
                <Col className="backround-block" flex="90%"  />
            </Row>
            <Row justify="center" >
                    <Col className="user-block"  flex="20%">
                        <UserCard/>
                    </Col>
                    <Col className="user-collection-block" flex="67%">
                        <UserCollection/>
                    </Col>
            </Row>                
        </div>
    )
}
export default UserPage;