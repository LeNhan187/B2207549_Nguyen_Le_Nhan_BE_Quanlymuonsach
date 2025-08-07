const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    hoLot: String,
    ten: String,
    ngaySinh: Date,
    diaChi: String,
    dienThoai: String,
});

module.exports = mongoose.model('User', UserSchema);