import axios from "axios"
const xzswedevAPI = axios.create({
  baseURL: "https://xzswe-dev-105696.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return xzswedevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_cddfs_list(payload) {
  return xzswedevAPI.get(`/api/v1/cddfs/`)
}
function api_v1_cddfs_create(payload) {
  return xzswedevAPI.post(`/api/v1/cddfs/`, payload)
}
function api_v1_cddfs_retrieve(payload) {
  return xzswedevAPI.get(`/api/v1/cddfs/${payload.id}/`)
}
function api_v1_cddfs_update(payload) {
  return xzswedevAPI.put(`/api/v1/cddfs/${payload.id}/`, payload)
}
function api_v1_cddfs_partial_update(payload) {
  return xzswedevAPI.patch(`/api/v1/cddfs/${payload.id}/`, payload)
}
function api_v1_cddfs_destroy(payload) {
  return xzswedevAPI.delete(`/api/v1/cddfs/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return xzswedevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return xzswedevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_zass_list(payload) {
  return xzswedevAPI.get(`/api/v1/zass/`)
}
function api_v1_zass_create(payload) {
  return xzswedevAPI.post(`/api/v1/zass/`, payload)
}
function api_v1_zass_retrieve(payload) {
  return xzswedevAPI.get(`/api/v1/zass/${payload.id}/`)
}
function api_v1_zass_update(payload) {
  return xzswedevAPI.put(`/api/v1/zass/${payload.id}/`, payload)
}
function api_v1_zass_partial_update(payload) {
  return xzswedevAPI.patch(`/api/v1/zass/${payload.id}/`, payload)
}
function api_v1_zass_destroy(payload) {
  return xzswedevAPI.delete(`/api/v1/zass/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return xzswedevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return xzswedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return xzswedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return xzswedevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return xzswedevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return xzswedevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return xzswedevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return xzswedevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return xzswedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return xzswedevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return xzswedevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cddfs_list,
  api_v1_cddfs_create,
  api_v1_cddfs_retrieve,
  api_v1_cddfs_update,
  api_v1_cddfs_partial_update,
  api_v1_cddfs_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_zass_list,
  api_v1_zass_create,
  api_v1_zass_retrieve,
  api_v1_zass_update,
  api_v1_zass_partial_update,
  api_v1_zass_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
