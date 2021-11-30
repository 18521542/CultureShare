import { Avatar, Button, Card, Col, Row } from "antd";
const { Meta } = Card;
const avatarImage="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/001befb0738b11e98bc52d654e80e4ac.jpg";
export const UserCard = () => {
    return (
        <Card style={{ height: 400 }}>
            <Col  align="middle">
                <Avatar style={{ height: 150, width:150 }} src={avatarImage} />
                <Meta title="SolWannaGone" description="A dreamer" />
                <Row align="center" style={{marginTop:20}}>
                    <Button type="primary" style={{width:100}}> Follow</Button>
                    <Button type="primary" style={{marginLeft:10, width:100}}> Contact</Button>
                </Row>
            </Col>
        </Card>
    )
}