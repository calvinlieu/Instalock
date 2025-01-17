from .db import db
from .user_followers import UserFollower
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.Integer, unique=True)
    bio = db.Column(db.String(150))
    website = db.Column(db.String())
    gender = db.Column(db.String())
    profile_image_url = db.Column(db.String())

    posts = db.relationship('Post', back_populates='user')
    comments = db.relationship('Comment', back_populates='user')
    likes = db.relationship('Like', back_populates='user')
    # followers = db.relationship('UserFollower', back_populates='follower')
    # following = db.relationship('UserFollower', back_populates='user')
    images = db.relationship('Image', back_populates='user')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'phone_number': self.phone_number,
            'bio': self.bio,
            'website': self.website,
            'gender': self.gender,
            'profile_image_url': self.profile_image_url,
        }
