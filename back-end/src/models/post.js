import { DataTypes, Model } from 'sequelize'

import sequelize from '.'

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Post',
  }
)

export default Post
