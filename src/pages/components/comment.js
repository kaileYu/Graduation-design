// import { Comment, Tooltip, Avatar } from 'antd';
import { Comment, Tooltip, Avatar, Button, Input, Form } from 'antd';
import request from '@/utils/request';
import React from 'react';
import { connect } from 'react-redux'
import style from './comment.css'
import moment from 'moment';
import axios from 'axios'
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting }) => (
  <div>
    <Form.Item method='post'>
      <TextArea rows={4} onChange={onChange} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        <span className={style.submitButton}>评论</span>
      </Button>
    </Form.Item>
  </div>
);
class CommentImpl extends React.Component {
  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: '用户',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };
  constructor(props) {
    super(props);
    this.state = {
      Commentlist: [],
      comments: [],
      submitting: false,
      value: ''
    };
  };
  postComment = () => {
    axios.post('/api/comment',{
      data: {
        comment: "TextArea.value",
        name: "this.state.comments.author"
      }
    }).then(function (response) {
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }

  componentWillMount() {
    this.getData();
  }
  getData = () => {
    request(`/api/comment`).then((res) => {
      return res
    }).then(({ data }) => {
      this.setState({
        Commentlist: data
      })
    })
  }
  render() {
    const { comments, submitting, value} = this.state;
    return (
      <div className={style.comment}>
        {
          this.state.Commentlist.map(function (item, i) {
            return (
              <div>
                <Comment key={i}
                  author={item.name}
                  avatar={
                    <Avatar
                      src={item.portrait}
                      alt={item.name}
                    />
                  }
                  content={
                    <p key={i} className={style.content}>{item.comment}</p>
                  }
                  datetime={
                    <Tooltip key={i}>
                      <span key={i} className={style.time}>{item.time}</span>
                    </Tooltip>
                  }
                />
                <p className={style.imageBox}>
                  {
                    item.image.map(function (data, i) {
                      return (
                        <img alt="" src={data.url} className={style.image} key={i} />
                      )
                    })
                  }
                </p>
              </div>
            )
          })
        }
        {comments}
        <Comment
          content={
            <Editor
              onClick={this.postComment}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return { list: state.Commentlist }
}
export default connect(mapStatetoProps)(CommentImpl)