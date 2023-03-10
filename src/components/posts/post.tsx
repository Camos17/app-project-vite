import { useState } from "react";

const Post = () => {
    const [state, setState] = useState({
        likes: 0,
        visits: 0
    });

    return(
        <div>
            <h1>{state.likes}</h1>
            <h2>{state.visits}</h2>

            <button onClick={ () => setState( statePrev => ({
                ...statePrev, likes: statePrev.likes+1
            })) }>♥</button>
        </div>
    );

};

export default Post