import "./Post.css";
import { Link } from "react-router-dom";
import { Divider } from "antd";

export const Post = (props) => {
  const { user, title, description, styleOption, country, postId } = props;

  const renderTitle = () => <div>{title}</div>;

  const renderPostContentViaDetailStyle = () => (
    <div className="contentContainer-post-detail">
      <img
        className="image-post-detail"
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
      />
      <Divider>Thông tin</Divider>

      <div>
        <span style={{fontWeight:"bold"}}>Tiêu đề:</span>
        <span> {title}</span>
      </div>

      <div>
        <div style={{fontWeight:"bold"}}>Mô tả:</div>
          <span> 
            {description}
            {          
              <Link 
                className="link"
                to={`/${country}/${postId}`}>
                {<span style={{marginLeft: "10px"}}>Xem thêm</span>}
              </Link>
            }
          </span>
        
      </div>
      

      <div className="created-by">
        <span style={{fontWeight:"bold"}}>Created By:</span>
        <span>
          <img
            className="small-avatar-post"
            src={user.avatar}
          />
        </span>
      </div>
    </div>
  )

  const renderPostContentViaListStyle = () => (
    <div>
      List
    </div>
  )

  const handleClick = () => {};

  return (
    <div className={styleOption === "Detail" ? "post-detail-container" : "post-list-container"}>
      {(styleOption === "Detail") ? renderPostContentViaDetailStyle() : renderPostContentViaListStyle()}
    </div>
  );
};
