const axios = require("axios");
const _ = require("lodash");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.blogStats = catchAsync(async (req, res, next) => {
  const { data } = await axios.get(
    `https://intent-kit-16.hasura.app/api/rest/blogs`,
    {
      headers: {
        "x-hasura-admin-secret":
          "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
      },
    }
  );

  const blogs = data.blogs;
  const sizeBlogs = _.size(blogs);
  const maxString = _.maxBy(blogs, "title.length");

  const blogsWithPrivacy = _.filter(blogs, (blog) =>
    _.includes(blog.title.toLowerCase(), "privacy")
  );
  const numberOfBlogsWithPrivacy = _.size(blogsWithPrivacy);
  const uniqueBlogTitles = _.uniqBy(blogs, "title").map((blog) => blog.title);

  res.status(200).json({
    "Total number of blogs": sizeBlogs,
    "The title of the longest blog": maxString.title,
    "Number of blogs with privacy in the title": numberOfBlogsWithPrivacy,
    uniqueBlogTitles,
    blogs,
  });
});
