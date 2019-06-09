const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  id: {
    type: String,
  },
  source: {
    type: String,
  },
});

userSchema.statics.findByLogin = async (login) => {
    let user = await this.findOne({
      username: login,
    });
  
    if (!user) {
      user = await this.findOne({ email: login });
    }
  
    return user;
  };

userSchema.pre('remove', (next) => {
    this.model('Event').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

module.exports = User;