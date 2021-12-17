import './Post.css'

export const  Post = (props) => {
    const { user, title, description, styleOption } = props;

    const Info = {
        user: user || "test user",
        title: title || "Đây là title để test chứ chả có gì cả",
        description: description || "Một nụ cười luôn hé, thế giới vẫn quay, còn tôi vẫn nơi đây đêm nằm mơ,..."
    }

    const renderTitle = () => (
        <div>{Info.title}</div>
    )

    const handleClick = () => {
        
    }

    return(
        (styleOption==="Detail") ? 
        (<div className="post-detail-container" onClick={handleClick}>
            {renderTitle()}
        </div>) : 
        (<div className="post-list-container" onClick={handleClick}>
            {renderTitle()}
        </div>)
    )
}