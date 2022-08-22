from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(2200), nullable=False)
    user_id = db.Column(db.Integer, foreign_key=('users.id') nullable=False)
    post_id = db.Column(db.Integer, foreign_key=('posts.id') nullable=False)

    post = db.relationship("Post", )
