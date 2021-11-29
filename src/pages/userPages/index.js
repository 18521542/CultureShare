import "./index.css";
import "antd/dist/antd.css";
import React, { createElement } from "react";
import {Avatar, Tabs,Card, Image,Col, Row,Button,  Pagination} from 'antd';
import Text from 'antd/lib/typography/Text';
const { TabPane } = Tabs;
const { Meta } = Card;
const cardInfo = [
  {
    Title: "Sự kiện quan trọng nhất lịch sử châu Âu",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/c3080ed0805911e8a6b0c5cb69e980dc.jpg",
    SmallDetail: 'Theo bạn, sự kiện nào là quan trọng nhất trong lịch sử châu Âu, và vì sao? ...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Nghi thức tế sống thời cổ đại",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/e3b3de6009e811ea808cb1515b486c8b.jpg",
    SmallDetail: 'Tại sao các nền văn minh cổ đại lại thực hiện nghi thức tế sống? Trả lời bởi Spencer...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Việt Nam trung đại thời Hậu Lê thịnh vượng đến mức nào? [Phần 1] đến mức nào?đến mức nào?đến mức nào?",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/fcda9fc0800811e8b4d50995a8530ace.jpg",
    SmallDetail: 'Source: http://qr.ae/TU1bqW Trả lời bởi Hoang Nghiem (严黄), Quân dục hòa, Tất bị chiến Nhà Lê (1428-1789) về cơ bản chính là “thời...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Các ngôn ngữ Rôman thông hiểu lẫn nhau đến mức độ nào?",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/89ed4ee0766711e8b4294958dde6e8db.jpg",
    SmallDetail: 'Source: http://qr.ae/TUp7YT Trả lời bởi Thomas Bereni, người nói tiếng Pháp bản ngữ Mutual Intelligibility , Romance...',
    Author: "admin",
    Time: "17.01.2021"
  },

  {
    Title: "Những chiến binh trung cổ (p.1)",
    Image: "https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-thumbnails/ea820a60a10811e68ed297728133375f.jpg",
    SmallDetail: 'Bài viết còn nhiều thiếu sót. Mong được góp ý I. QUÂN CUNG KỴ BINH MÔNG CỔ Sự thành công bành trướng của đại đế chế Mông Cổ gắn...',
    Author: "admin",
    Time: "17.01.2021"
  },
];
const renderCard = (card, index) => {
    return (
      <Card style={{height:90, marginTop:10}}>
      <Row style={{marginLeft:-25, marginTop:-25,maxHeight:90}}>
        <Avatar shape="square" style={{width:90,height:90}}
          src={card.Image}/>
        <Col style={{marginLeft:10}}>
          <Row >
            <Text style={{textAlign:'left',fontSize:20}}>{card.Title}</Text>
          </Row>
          <Row>
            <Text style={{textAlign:'left',fontSize:15}}>{card.SmallDetail}</Text>
          </Row>
          <Row style={{marginTop:10}}>
            <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4 " }}>{card.Author} at</Text>
            <Text style={{textAlign:'left',fontSize:15, color:"#adb6c4 ",marginLeft:5 }}>{card.Time}</Text>
          </Row>
        </Col>
        
      </Row>
    </Card>
     
    );
  };
  
const backgroundUrl="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-cover/dfaa3e7050e211ecb0507957d8f5fde3.jpeg";
const UserPage = () => {
    return (
        <div className="mainBody">
            <div style={{height:300,backgroundImage:`url(${backgroundUrl})` , marginTop:10}}></div>
            <Card className="panel-user" style={{ height: 400 }}>
            <Col  align="middle">
                <Avatar className="avatar" alt="example" style={{ height: 150, width:150 }} 
                            src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
                        />
                <Meta className="panel-name"
                    title="SolWannaGone"
                    description="A dreamer"
                    />
                <Row align="center" style={{marginTop:20}}>
                    <Button type="primary" style={{width:100}}> Follow</Button>
                    <Button type="primary" style={{marginLeft:10, width:100}}> Contact</Button>
                </Row>
            </Col>
            </Card>

          <div>        
            <Tabs className="tab" defaultActiveKey="1" type="line" size={"large"} >
              <TabPane tab="Your posts" key="1">
                <Col>
                {cardInfo.map(renderCard)}
                </Col>
                <Pagination style={{marginTop:10,float:"right"}} defaultCurrent={1} total={50} />
              </TabPane>
              <TabPane tab="Favorite list" key="2">
              <Col>
                {cardInfo.map(renderCard)}
                {cardInfo.map(renderCard)}
                </Col>
                <Pagination style={{marginTop:10,float:"right"}} defaultCurrent={1} total={50} />
              </TabPane>
              <TabPane tab="Reading later" key="3">
              
              </TabPane>
              
            </Tabs>
          </div>
        </div>
    )
}

export default UserPage;