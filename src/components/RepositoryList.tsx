import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [username, setUsername] = useState('');
  const [url, setUrl] = useState('');
  const [descricao, setDescricao] = useState('Aguardando pesquisa');

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDescricao(username ? 'Username não encontrado' : 'Aguardando pesquisa');
        setRepositories(data);
      })
  }, [url]);

  return (
    <section className="repository-list">
      <h1>GitHub Explorer</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="GitHub username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button type="submit" onClick={() => { setUrl('https://api.github.com/users/' + username + '/repos') }}>Search</button>
      </div>

      <ul>
        {repositories.length > 0 ? repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />) : <div className="descricao">{descricao}</div>}
      </ul>
    </section>
  )
}