import React,{FC, useState} from 'react';
import axios from 'axios';


const App: FC = () => {
const [imageUrl, setImageUrl] = useState('');
   
const fetchData = () => {
    axios.get('https://dog.ceo/api/breed/hound/images/random')
    .then((response) => {
        setImageUrl(response.data.message);
    })
    .catch((error) => {
        console.error('ERR', error);
    })
};
    return(
        <>
<img alt='dog' src={imageUrl} />
<button onClick={fetchData}>取得</button>
        </>
    );
};
export default App;
