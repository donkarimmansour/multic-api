const Host = {
  ROOT: "http://localhost:3001",
  PREFIX: "/v1/api",
  FRONTEND: "http://localhost:3000",
}

const ApiEndpoints = {
    UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    signup: `/signup`,  
    edit: `/edit/:id`,
    image: `/image/:id`,
    delete: `/delete/:id`,
    count: `/count`,
    me: `/me`,
    suspension: `/suspension/:id`,
    forgotPassword: `/forgot-password`,
    resetPassword: `/reset-password/:id`,
    confirmEmail: `/confirm-email/:id`,
  },
  
  FileEndpoints: {
    route: `${Host.PREFIX}/file`,
    getSingleImageView: `/get-single-image/:id/view`,
    getSingleImageDownload: `/get-single-image/:id/download`,
    createSingleImage: `/create-single-image`,
  },
  SubscribeEndpoints: {
    route: `${Host.PREFIX}/subscribe`,
    list: `/list`,
    create: `/create` ,
    count: `/count` ,
    delete: `/delete/:id`
  },
  ContactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    list: `/list`,
    create: `/create` ,
    count: `/count` ,
    delete: `/delete/:id`
  },

  CvEndpoints: {
    route: `${Host.PREFIX}/cv`,
    list: `/list`,
    create: `/create`,
    delete: `/delete/:id`,
    edit: `/edit/:id`,
    count: `/count`,
  },
};

module.exports = {ApiEndpoints , Host}