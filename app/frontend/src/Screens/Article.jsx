import React, {useState, useEffect} from 'react'

export default function Article() {
  const [state, setstate] = useState([]);

  useEffect(() => {
      fetch('/api/v1/articles')
      .then((res) => res.json())
      .then((data) => setstate(data));
  }, []);

  return (
    <div>
      Articles Bilal Ahmad
      {state.map(({title}) => <div>{title}</div>)}
    </div>
  )
}
