const state = {
  projects: [],
  currentProjectId: null,
};
export function getCurrentProject() {
  return state.projects.find(
    (project) => project.id === state.currentProjectId,
  );
}
export default state;
