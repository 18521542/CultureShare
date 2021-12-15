import { Comment, Avatar, Form, Button, Input} from 'antd';
import { avatarSrc } from '../../dummydata/user';
import { RenderComment } from './RenderComment';
import { useState } from 'react';
import MyComment from  "../../model/MyComment";
import moment from 'moment';
import { CommentList } from '../../dummydata/Comment';

const { TextArea } = Input;
//custom input comment form
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);
export const AddCommentForm = () => {
  const [list, setList] = useState(CommentList);
  const [value,SetValue]= useState("");
  const [submitting,SetSubmitting]= useState(false);
  const [time, SetTime]=useState(moment().fromNow())
  
  const handleSubmit = () => {
    //not add comment if the text box is null
    if (value=="") {
      return;
    }
    SetSubmitting(true);
    setTimeout(() => {
      setList(list => [...list,new MyComment("id","SolWannaGone",time,value) ]);
      SetSubmitting(false);
      SetTime();
    }, 1000);
  };

  return (
    <>
      {list.map(RenderComment)}
      <Comment
        avatar={<Avatar src={avatarSrc}  />}
        content={
          <Editor
            onChange={e => SetValue(e.target.value)}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
}
