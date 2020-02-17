import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react'
import style from "./style.css";

const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <Comment {...props} />}
    />
  );
  
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item className={style.TextArea}>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="secondary">
          发表评论
        </Button>
      </Form.Item>
    </div>
  );
  
  class CommentArea extends React.Component {
    state = {
      comments: [],
      submitting: false,
      value: '',
    };
  
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
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: <p>{this.state.value}</p>,
              datetime: moment().fromNow(),
            },
            ...this.state.comments,
          ],
        });
      }, 1000);
    };
  
    handleChange = e => {
      this.setState({
        value: e.target.value,
      });
    };
  
    render() {
      const { comments, submitting, value } = this.state;
  
      return (
        <div>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            content={
              <Editor
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

export default function ({ children }) {
    return (
        <div>
            <Comment
                actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                author={<span>Han Solo</span>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                    </p>
                }
            >
                {children}
            </Comment>
            <CommentArea/>
        </div>
    )
}
