import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of EV Charging: What You Need to Know',
      excerpt: 'As electric vehicles become more popular, the infrastructure for charging them is evolving rapidly...',
      author: 'David Chen',
      date: 'May 12, 2026',
      category: 'EV Trends'
    },
    {
      id: 2,
      title: 'Top 10 Maintenance Tips for Your Luxury Sedan',
      excerpt: 'Keeping your luxury sedan in peak condition requires more than just regular oil changes...',
      author: 'Sarah Jenkins',
      date: 'May 08, 2026',
      category: 'Maintenance'
    },
    {
      id: 3,
      title: 'Yasir E-Vision Wins International Design Award',
      excerpt: 'We are proud to announce that the Yasir E-Vision has been recognized for its revolutionary aesthetic...',
      author: 'Marcus Thorne',
      date: 'May 05, 2026',
      category: 'New Launches'
    }
  ];

  return (
    <div className="blog-page">
      <div className="page-header section-padding">
        <div className="container">
          <span className="subtitle">Yasir Insights</span>
          <h1>News & <span className="gradient-text">Blog</span></h1>
          <p>Stay updated with the latest trends, maintenance tips, and automotive news.</p>
        </div>
      </div>

      <div className="container blog-grid section-padding">
        <div className="blog-posts">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="blog-card glass-card"
            >
              <div className="blog-meta">
                <span className="blog-cat">{post.category}</span>
                <div className="meta-items">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><User size={14} /> {post.author}</span>
                </div>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <button className="read-more">
                Read More <ArrowRight size={18} />
              </button>
            </motion.article>
          ))}
        </div>

        <aside className="blog-sidebar">
          <div className="sidebar-widget glass">
            <h3>Search Blog</h3>
            <div className="search-box">
              <Search size={18} />
              <input type="text" placeholder="Search articles..." />
            </div>
          </div>
          <div className="sidebar-widget glass">
            <h3>Categories</h3>
            <ul className="cat-list">
              <li><span>EV Trends</span> <span>(12)</span></li>
              <li><span>Maintenance</span> <span>(8)</span></li>
              <li><span>New Launches</span> <span>(5)</span></li>
              <li><span>Driving Guides</span> <span>(15)</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
