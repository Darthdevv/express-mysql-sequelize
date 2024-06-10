

export const createPosts = async (req, res, next) => {
  res.status(201).json({ message: 'Post created' });
};

export const retreivePosts = async (req, res, next) => {
  res.status(201).json({ message: 'Posts retrieved' });
};

export const retreivePost = async (req, res, next) => {
  res.status(201).json({ message: 'Post retrieved' });
};

export const updatePosts = async (req, res, next) => {
  res.status(201).json({ message: 'Post updated' });
};

export const deletePosts = async (req, res, next) => {
  res.status(201).json({ message: 'Post deleted' });
};
