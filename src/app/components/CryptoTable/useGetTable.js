import { useEffect, useState } from 'react'

const useGetTable = () => {
    const [state, setState] = useState({ data: [], isLoading: true });

  const updateState = data => {
    setState({
      data: data,
      isLoading: false,
    });
  };

  useEffect(() => {
    const init = async () =>{
        try {
          const res = await fetch('http://localhost:4000/api');
          const data = await res.json();
          updateState(data);
        } catch (err) {
          console.log(err);
        }
      };

    init();
  }, []);
  
  return state;

}

export default useGetTable