function Post(props) {
  const { title, body } = props.post

  return (
    <div className="container">
      <div className="post">
        <div className="post-title">
          <h2 className="post-title-value">{title}</h2>
        </div>
        <div className="post-body">
          <p className="post-body-value">{body}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
