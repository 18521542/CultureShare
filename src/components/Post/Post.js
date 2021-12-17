import './Post.css'

export const  Post = (props) => {
    const { user, title, description, styleOption } = props;

    const renderInfo = {
        styleOption: styleOption || "Detail",
        user: user || "test user",
        title: title || "Đây là title để test chứ chả có gì cả",
        description: description || "Một nụ cười luôn hé, thế giới vẫn quay, còn tôi vẫn nơi đây đêm nằm mơ,..."
    }

    return(
        (styleOption==="Detail") ? 
        (<div className="post-list-container"></div>) : 
        (<div className="post-detail-container"></div>)
    )
}