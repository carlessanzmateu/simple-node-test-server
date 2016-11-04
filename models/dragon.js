'use strict'

const dragonSchema = mongoose.Schema({
    name: String,
  });

module.exports = mongoose.model('Dragon', dragonSchema);
