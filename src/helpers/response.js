module.exports = {

  response(res, status, data, statusCode, pageInfo) {
    const result = {
      data: '',
      statusCode: 200,
      status: false,
      pageInfo: {},
    };
    result.data = data;
    result.statusCode = statusCode;
    result.status = status;
    result.pageInfo = pageInfo;
    return res.status(result.statusCode).json({
      success: result.status,
      data: result.data,
      pageInfo: result.pageInfo,
    });
  },
};
