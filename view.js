export const view = ({ jobs }) => {
  return `
    <h1> There are ${jobs.length} jobs</h1>
    ${jobs
      .map((job) => {
        return `<div>${job.title}</div>`;
      })
      .join("")}
    
    `;
};
