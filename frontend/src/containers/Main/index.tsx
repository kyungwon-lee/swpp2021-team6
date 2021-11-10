import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { History } from 'history';
import Post from '../../components/Post';
import Filter from '../Filter';
import * as actionCreators from '../../store/actions';
import './index.scss';
import { AppState } from '../../store/store';
import { PostEntity } from '../../types/post';
import AddButton from '../../components/AddButton';

interface Props {
  history: History;
}

const Main = ({ history }: Props) => {
  // const [posts, setPosts] = useState(mockPosts);
  const posts = useSelector((state: AppState) => state.post?.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getPosts());
  }, []);

  return (
    <div className="main">
      <div className="filter-container">
        <Filter />
      </div>
      <div className="post-container">
        {posts.map((post: PostEntity) => (
          <Post key={post.post_id} post={post} />
        ))}
      </div>
      <AddButton history={history} />
    </div>
  );
};

export default Main;
