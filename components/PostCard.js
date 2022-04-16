import { Card } from "antd";

const PostCard = ({ title, url, created, author }) => {
  return (
    <Card
      style={{ margin: 15 }}
      cover={<img alt="too lazy to fix this" src={url} />}
    >
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p className="date-text">{new Date(created * 1000).toDateString()}</p>
    </Card>
  );
};

export default PostCard;
