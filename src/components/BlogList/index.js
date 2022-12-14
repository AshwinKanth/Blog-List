import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(eachItem => (
        <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
