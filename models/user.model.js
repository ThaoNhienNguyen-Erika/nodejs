module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        userid: String,
	point: number
      },
      { timestamps: true }
    )
  );

  return User;
};