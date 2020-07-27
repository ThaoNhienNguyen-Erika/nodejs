module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        userid: String,
        username: String,
	      point: Number
      },
      { timestamps: true }
    )
  );

  return User;
};