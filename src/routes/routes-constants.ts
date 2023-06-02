export const API_ROUTES = {
  CONFIGURATION: {
    GET: "/configurations", // GET: "/configDetails",
    CREATE: "/configurations",
  },
  DEPARTMENT: {
    GET: "/departments",
  },
  JOBS: {
    GET: "/jobs", //GET: "/jobDetails",
  },
  DOWNLOADS: {
    GET: "/jobs/report/download", // GET: "/downloads",
  },
  FILEVALIDATORS: {
    GET: "/jobs/report/filevalidation", // GET: "/fileValidators",
  },
  TEMPLATEVALIDATORS: {
    GET: "/jobs/report/templatevalidation", //GET: "/templateValidators",
  },
  UPLOADS: {
    GET: "/jobs/report/upload", // GET: "/uploads",
  },
};
export const ROUTES = {
  PUBLIC: {},
  PRIVATE: {},
};
