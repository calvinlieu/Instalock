from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class ImageForm(FlaskForm):
  user_id = IntegerField("User_id", validators=[DataRequired()])
  post_id = IntegerField("Post_id", validators=[DataRequired()])
