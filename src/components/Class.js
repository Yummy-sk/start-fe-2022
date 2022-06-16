export function Class({ $target, state }) {
  const generateLiks = ({ links }) => {
    return links
      .map((link, idx) => {
        return `
        <a
          href="${link}"
          class="badge bg-secondary"
          target="_blank"
        >
        ${idx + 1}
        </a>
      `;
      })
      .join('');
  };

  const generateClassTable = ({ state }) => {
    return state
      .map((item, idx) => {
        const { title, date, docUrl, gitUrl, links } = item;

        return `
        <tr>
          <th scope="row">${idx + 1}</th>
          <td>${title}</td>
          <td>
            <a 
              href="${docUrl}"
              class="badge bg-secondary" 
              target="_blank"
            >
            문서
            </a>
          </td>
          <td>
            ${generateLiks({ links })}
          </td>
          <td>${date}</td>
          <td>
            <a href="${gitUrl}">git</a>
          </td>
        </tr>
      `;
      })
      .join('');
  };

  this.filterLinks = ({ state }) => {
    return state
      .filter(item => item.links.length > 0)
      .sort((a, b) => {
        return a.links.length - b.links.length;
      });
  };

  this.setState = ({ nextState }) => {
    this.state = nextState;

    console.log(this.$target);

    $target.innerHTML = generateClassTable({ state: this.state });
  };

  this.render = () => {
    $target.innerHTML = generateClassTable({ state });
  };
}
