const {
    // @ts-ignore
    _env_
} = window

const EMAILJS_BASE_URL = _env_ ? _env_.EMAILJS_BASE_URL : process.env.EMAILJS_BASE_URL
const EMAILJS_SERVICE_ID = _env_ ? _env_.EMAILJS_SERVICE_ID : process.env.EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = _env_ ? _env_.EMAILJS_TEMPLATE_ID : process.env.EMAILJS_TEMPLATE_ID
const EMAILJS_USER_ID = _env_ ? _env_.EMAILJS_USER_ID : process.env.EMAILJS_USER_ID
const EMAILJS_ACCESS_TOKEN = _env_ ? _env_.EMAILJS_ACCESS_TOKEN : process.env.EMAILJS_ACCESS_TOKEN

export default {
    cms: {
        apiKey: process.env.CMS_API_KEY,
        graphQlUrl: process.env.CMS_GRAPHQL_URL || 'https://graphql.contentful.com',
        restApiUrl: process.env.CMS_REST_API_URL || 'https://cdn.contentful.com',
        previewRestApiUrl: process.env.CMS_PREVIEW_REST_API_URL || 'https://preview.contentful.com',
        spaceId: process.env.CMS_SPACE_ID,
        environment: process.env.CMS_ENVIRONMENT || 'master',
        preview: process.env.CMS_PREVIEW === 'true'
    },
    emailJs: {
        baseUrl: EMAILJS_BASE_URL,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        userId: EMAILJS_USER_ID,
        accessToken: EMAILJS_ACCESS_TOKEN,
    }
};