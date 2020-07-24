module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        userid: String,
	point: Number
      },
      { timestamps: true }
    )
  );

  return User;
};