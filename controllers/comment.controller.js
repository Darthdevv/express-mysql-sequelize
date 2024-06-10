



export const createComments = async (req, res, next) => {
  res.status(201).json({ message: 'Comment created' });
};

export const retreiveComments = async (req, res, next) => {
  res.status(201).json({ message: 'Comments retrieved' });
};

export const retreiveComment = async (req, res, next) => {
  res.status(201).json({ message: 'Comment retrieved' });
};

export const updateComments = async (req, res, next) => {
  res.status(201).json({ message: 'Comment updated' });
};

export const deleteComments = async (req, res, next) => {
  res.status(201).json({ message: 'Comment deleted' });
};