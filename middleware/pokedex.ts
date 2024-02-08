export default defineNuxtRouteMiddleware((to) => {
  const paramsId = +to.params.id;

  if (isNaN(paramsId) || paramsId < 0 || paramsId > 1302) {
    return navigateTo('/page-not-found');
  }
})