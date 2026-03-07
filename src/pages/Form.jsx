import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Image as ImageIcon, 
  Send, 
  User,
  Trash2,
  ThumbsUp,
  ThumbsDown,
  X,
  MoreHorizontal,
  CornerDownRight,
  Clock,
  TrendingUp,
  Plus
} from 'lucide-react';
import { auth, db } from '../firebase';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  updateDoc,
  serverTimestamp,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/Form.css';

const Form = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activePost, setActivePost] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [showNewTopic, setShowNewTopic] = useState(false);
  const [topicTitle, setTopicTitle] = useState('');

  // Auth və posts dinləmə
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribePosts = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    });

    return () => {
      unsubscribeAuth();
      unsubscribePosts();
    };
  }, []);

  // Şəkil seçmə
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Yeni mövzu/post yaratmaq
  const handleCreateTopic = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Daxil olun!');
      return;
    }
    if (!topicTitle.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'posts'), {
        title: topicTitle,
        text: newPost,
        image: selectedImage || null,
        author: user.displayName || user.email.split('@')[0],
        authorId: user.uid,
        authorInitial: (user.displayName || user.email).charAt(0).toUpperCase(),
        createdAt: serverTimestamp(),
        likes: 0,
        dislikes: 0,
        likedBy: [],
        dislikedBy: [],
        comments: []
      });
      setTopicTitle('');
      setNewPost('');
      setSelectedImage(null);
      setShowNewTopic(false);
    } catch (error) {
      console.error('Xəta:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Şərh əlavə etmək
  const handleAddComment = async (postId) => {
    if (!user) {
      alert('Daxil olun!');
      return;
    }
    if (!commentText.trim()) return;

    const postRef = doc(db, 'posts', postId);
    const post = posts.find(p => p.id === postId);
    
    const newComment = {
      id: Date.now().toString(),
      text: commentText,
      author: user.displayName || user.email.split('@')[0],
      authorId: user.uid,
      authorInitial: (user.displayName || user.email).charAt(0).toUpperCase(),
      createdAt: new Date().toISOString(),
      likes: 0
    };

    try {
      await updateDoc(postRef, {
        comments: [...(post.comments || []), newComment]
      });
      setCommentText('');
    } catch (error) {
      console.error('Şərh xəta:', error);
    }
  };

  // Like/Dislike
  const handleVote = async (postId, type, currentData) => {
    if (!user) {
      alert('Daxil olun!');
      return;
    }

    const postRef = doc(db, 'posts', postId);
    const isLiked = currentData.likedBy?.includes(user.uid);
    const isDisliked = currentData.dislikedBy?.includes(user.uid);

    try {
      if (type === 'like') {
        if (isLiked) {
          await updateDoc(postRef, {
            likes: currentData.likes - 1,
            likedBy: currentData.likedBy.filter(id => id !== user.uid)
          });
        } else {
          const updates = {
            likes: currentData.likes + 1,
            likedBy: [...(currentData.likedBy || []), user.uid]
          };
          if (isDisliked) {
            updates.dislikes = currentData.dislikes - 1;
            updates.dislikedBy = currentData.dislikedBy.filter(id => id !== user.uid);
          }
          await updateDoc(postRef, updates);
        }
      } else {
        if (isDisliked) {
          await updateDoc(postRef, {
            dislikes: currentData.dislikes - 1,
            dislikedBy: currentData.dislikedBy.filter(id => id !== user.uid)
          });
        } else {
          const updates = {
            dislikes: currentData.dislikes + 1,
            dislikedBy: [...(currentData.dislikedBy || []), user.uid]
          };
          if (isLiked) {
            updates.likes = currentData.likes - 1;
            updates.likedBy = currentData.likedBy.filter(id => id !== user.uid);
          }
          await updateDoc(postRef, updates);
        }
      }
    } catch (error) {
      console.error('Vote xəta:', error);
    }
  };

  // Post silmə
  const handleDeletePost = async (postId, authorId) => {
    if (!user || user.uid !== authorId) return;
    if (window.confirm('Bu müzakirəni silmək istədiyinizə əminsiniz?')) {
      await deleteDoc(doc(db, 'posts', postId));
      if (activePost === postId) setActivePost(null);
    }
  };

  // Vaxt formatı
  const formatTime = (timestamp) => {
    if (!timestamp) return 'indi';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = (now - date) / 1000;

    if (diff < 60) return 'indi';
    if (diff < 3600) return `${Math.floor(diff / 60)} dəq`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} saat`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} gün`;
    return date.toLocaleDateString('az-AZ');
  };

  return (
    <div className="forum-modern">
      {/* Header */}
      <header className="forum-header-modern">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon-modern">
              <MessageSquare size={28} />
            </div>
            <div className="logo-text">
              <h1>Lumina Forum</h1>
              <span>Tələbə Community</span>
            </div>
          </div>
          
          <div className="header-actions">
            {user ? (
              <div className="user-info-modern">
                <div className="user-avatar-modern">
                  {(user.displayName || user.email).charAt(0).toUpperCase()}
                </div>
                <span className="user-name">{user.displayName || user.email.split('@')[0]}</span>
              </div>
            ) : (
              <button className="login-btn-modern" onClick={() => window.location.href = '/login'}>
                Daxil ol
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="forum-main-modern">
        {/* Yeni mövzu düyməsi */}
        {user && (
          <button 
            className="new-topic-btn-modern"
            onClick={() => setShowNewTopic(!showNewTopic)}
          >
            <Plus size={20} />
            {showNewTopic ? 'Bağla' : 'Yeni Müzakirə'}
          </button>
        )}

        {/* Yeni mövzu formu */}
        {showNewTopic && user && (
          <div className="topic-form-modern">
            <div className="form-header">
              <h3>Yeni müzakirə başlat</h3>
              <button className="close-form-btn" onClick={() => setShowNewTopic(false)}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleCreateTopic}>
              <input
                type="text"
                placeholder="Mövzu başlığı..."
                className="topic-title-input"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
                maxLength={100}
              />
              
              <textarea
                placeholder="Fikirlərinizi bölüşün..."
                className="topic-content-input"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows={4}
              />
              
              {selectedImage && (
                <div className="image-preview-modern">
                  <img src={selectedImage} alt="Preview" />
                  <button type="button" className="remove-image-btn" onClick={() => setSelectedImage(null)}>
                    <X size={16} />
                  </button>
                </div>
              )}

              <div className="form-actions-modern">
                <label className="image-upload-btn">
                  <ImageIcon size={18} />
                  <span>Şəkil əlavə et</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageSelect}
                    hidden
                  />
                </label>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || !topicTitle.trim()}
                  className="submit-topic-btn"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Göndərilir...' : 'Paylaş'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts siyahısı */}
        <div className="posts-container-modern">
          {posts.length === 0 ? (
            <div className="empty-state-modern">
              <MessageSquare size={48} className="empty-icon" />
              <h3>Hələ müzakirə yoxdur</h3>
              <p>İlk müzakirəni siz başladın!</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="post-modern">
                {/* Post Header */}
                <div className="post-header-modern">
                  <div className="author-info-modern">
                    <div className="author-avatar-modern" style={{
                      background: `hsl(${post.authorInitial.charCodeAt(0) * 15}, 70%, 60%)`
                    }}>
                      {post.authorInitial}
                    </div>
                    <div className="author-details">
                      <span className="author-name-modern">{post.author}</span>
                      <span className="post-time-modern">
                        <Clock size={12} /> {formatTime(post.createdAt)}
                      </span>
                    </div>
                  </div>
                  
                  {user?.uid === post.authorId && (
                    <button 
                      className="delete-post-btn"
                      onClick={() => handleDeletePost(post.id, post.authorId)}
                      title="Sil"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>

                {/* Post Content */}
                <div className="post-content-modern">
                  <h2 className="post-title-modern">{post.title}</h2>
                  <p className="post-text-modern">{post.text}</p>
                  
                  {post.image && (
                    <div className="post-image-container">
                      <img src={post.image} alt="Post content" className="post-image-modern" />
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="post-footer-modern">
                  <div className="vote-section-modern">
                    <button 
                      className={`vote-btn-modern up ${post.likedBy?.includes(user?.uid) ? 'active' : ''}`}
                      onClick={() => handleVote(post.id, 'like', post)}
                    >
                      <ThumbsUp size={18} />
                      <span>{post.likes || 0}</span>
                    </button>
                    
                    <button 
                      className={`vote-btn-modern down ${post.dislikedBy?.includes(user?.uid) ? 'active' : ''}`}
                      onClick={() => handleVote(post.id, 'dislike', post)}
                    >
                      <ThumbsDown size={18} />
                      <span>{post.dislikes || 0}</span>
                    </button>
                  </div>

                  <button 
                    className={`comment-toggle-btn ${activePost === post.id ? 'active' : ''}`}
                    onClick={() => setActivePost(activePost === post.id ? null : post.id)}
                  >
                    <MessageSquare size={18} />
                    <span>{post.comments?.length || 0} şərh</span>
                  </button>
                </div>

                {/* Comments Section */}
                {activePost === post.id && (
                  <div className="comments-section-modern">
                    <div className="comments-divider"></div>
                    
                    {/* Add Comment */}
                    {user ? (
                      <div className="add-comment-modern">
                        <div className="comment-input-wrapper-modern">
                          <input
                            type="text"
                            placeholder="Şərh yazın..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                          />
                          <button 
                            onClick={() => handleAddComment(post.id)}
                            disabled={!commentText.trim()}
                            className="send-comment-btn"
                          >
                            <Send size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="login-to-comment">Şərh yazmaq üçün <a href="/login">daxil olun</a></p>
                    )}

                    {/* Comments List */}
                    <div className="comments-list-modern">
                      {post.comments?.length === 0 ? (
                        <p className="no-comments-modern">Hələ şərh yoxdur</p>
                      ) : (
                        post.comments.map((comment) => (
                          <div key={comment.id} className="comment-modern">
                            <div className="comment-header-modern">
                              <div className="comment-author-avatar" style={{
                                background: `hsl(${comment.authorInitial.charCodeAt(0) * 15}, 70%, 60%)`
                              }}>
                                {comment.authorInitial}
                              </div>
                              <div className="comment-meta">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-time">{formatTime(comment.createdAt)}</span>
                              </div>
                            </div>
                            <p className="comment-text-modern">{comment.text}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Form;