import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())

function GithubUser() {
  const { data, error } = useSWR(`https://api.github.com/users`, fetcher)

  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occured</h3>}
      {data && !error && <ul>
        {data.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}</ul>}
    </div>
  );
}

export default GithubUser;