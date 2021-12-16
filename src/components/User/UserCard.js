import { Avatar, Button, Card, Col, Row } from "antd";
import { avatarSrc,userName } from '../../dummydata/user';
const { Meta } = Card;

export const UserCard = () => {
    return (
        <Card style={{ height: 400 }}>
            <Col  align="middle">
                <Avatar style={{ height: 150, width:150 }} src={avatarSrc} />
                <Meta title={userName} description="A dreamer" />
                <Row align="center" style={{marginTop:20}}>
                    <Button type="primary" style={{width:100}}> Follow</Button>
                    <Button type="primary" style={{marginLeft:10, width:100}}> Contact</Button>
                </Row>
            </Col>
        </Card>
    )
}