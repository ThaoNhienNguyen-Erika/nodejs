module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        userid: String,
	point: Integer
      },
      { timestamps: true }
    )
  );

  return User;
};