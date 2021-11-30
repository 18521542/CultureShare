import { Avatar, Card, Col, Row } from "antd";
import Text from 'antd/lib/typography/Text';
export const RenderPost = (card) => {
    return (
        <Card style={{height:90, marginTop:10}}>
          <Row style={{marginLeft:-25, marginTop:-25,maxHeight:90}}>
            <Avatar shape="square" style={{width:90,height:90}}
              src={card.Image}/>
            <Col style={{marginLeft:10}}>
              <Text style={{textAlign:'left',fontSize:20}}>{card.Title}</Text>
              <Text style={{textAlign:'left',fontSize:15}}>{card.SmallDetail}</Text>
              <Row style={{marginTop:10}}>
                <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4" }}>{card.Author} at</Text>
                <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4",marginLeft:5 }}>{card.Time}</Text>
              </Row>
            </Col>            
          </Row>
      </Card>
       
      );
}