import classes from "./Post.module.css";
function Post(props) {
  const { name, title } = props;
  // console.log(author, body);
  return (
    <div className={classes.post}>
      <p>{title}</p>
      <p>{name}</p>
    </div>
  );
}

export default Post;
