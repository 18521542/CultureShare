import './Post.css'

export const  Post = (props) => {
    const { user, title, description } = props;
    const renderInfo = {
        user: user || "test user",
        title: title || "Đây là title để test chứ chả có gì cả",
        description: description || "Một nụ cười luôn hé, thế giới vẫn quay, còn tôi vẫn nơi đây đêm nằm mơ,..."
    }

    return(
        <div className="post-container">
            
        </div>
    )
}