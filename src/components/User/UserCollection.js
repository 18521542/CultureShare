import { Pagination, Tabs } from "antd";
import { favoritePosts } from "../../dummydata/favoritePost";
import { RenderPost } from "./RenderPost";
const { TabPane } = Tabs;
const cardInfo = favoritePosts;
const maxPost=100;
//NOTE: 10 posts per page
//so with 100 post we have 10 page
//u will see the pagination show 10 page!
export const UserCollection = () => {
    return (
        <Tabs className="tab" defaultActiveKey="1" type="line" size={"large"} >
              <TabPane tab="Your posts" key="1">
                {cardInfo.map(RenderPost)}
                <Pagination style={{marginTop:10,float:"right"}} defaultCurrent={1} total={maxPost} />
              </TabPane>
              <TabPane tab="Favorite list" key="2">
                {cardInfo.map(RenderPost)}
                <Pagination style={{marginTop:10,float:"right"}} defaultCurrent={1} total={maxPost} />
              </TabPane>
              <TabPane tab="Reading later" key="3">              
              </TabPane>              
            </Tabs>
    )
}