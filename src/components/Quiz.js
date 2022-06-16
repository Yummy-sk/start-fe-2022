export function Quiz({ $target, state }) {
  this.state = state;

  const generateQuizTable = ({ state }) => {
    return state
      .map(item => {
        const { title, docUrl, previewUrl, gitUrl } = item;

        return `
      <tr>
        <td>${title}</td>
        <td>
          <a 
            class="badge bg-secondary" 
            href="${docUrl}"
            >
            문서
          </a>
        </td>
        <td><a href="${previewUrl}" target="_blank">보기</a></td>
        <td><a href="${gitUrl}" target="_blank">git</a></td>
      </tr>
      `;
      })
      .join('');
  };

  this.filerGit = ({ state }) => {
    return state.filter(item => item.gitUrl);
  };

  this.setState = ({ nextState }) => {
    this.state = nextState;

    $target.innerHTML = generateQuizTable({ state: nextState });
  };

  this.render = () => {
    $target.innerHTML = generateQuizTable({ state: this.state });
  };
}
