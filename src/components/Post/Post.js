import "./Post.css";
import { Link } from "react-router-dom";

export const Post = (props) => {
  const { user, title, description, styleOption, country, postId } = props;

  const renderTitle = () => <div>{title}</div>;

  const handleClick = () => {};

  return (
    <Link 
      className={styleOption === "Detail" ? "post-detail-container" : "post-list-container"}
      to={`/${country}/${postId}`}>
      {renderTitle()}
    </Link>
  );
};
