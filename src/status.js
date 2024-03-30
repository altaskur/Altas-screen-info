let status = 'Libre';

const getStatus = () => status;

const changeStatus = (newStatus) => {
  status = newStatus;
  return status;
};

module.exports = {
  getStatus,
  changeStatus,
};
