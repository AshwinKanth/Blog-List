import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails

  return (
    <li className="blog-list-item">
      <div className="details-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="description">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
