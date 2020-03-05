import { Comment, Tooltip, Avatar } from 'antd';
import request from '@/utils/request';
import React from 'react';
import { connect } from 'react-redux'
import style from './comment.css'
class CommentImpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Commentlist: []
    };
  };
  componentWillMount() {
    this.getData();
  }
  getData = () => {
    request(`/api/comment`).then((res) => {
      return res
    }).then(({ data }) => {
      this.setState({
        Commentlist: data.list
      })
    })
  }
  render() {
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
                        <img alt="" src={data.url} className={style.image} key={i}/>
                      )
                    })
                  }
                </p>
              </div>
            )
          })
        }
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  return { list: state.Commentlist }
}
export default connect(mapStatetoProps)(CommentImpl)