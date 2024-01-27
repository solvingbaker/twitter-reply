import './App.css';
import { TwitterFollowCar } from './TwitterFollowCar';

export function App() {


    return (
        <section className='App'>
            <TwitterFollowCar userName={"midudev"} isFollowing>
                Alexis German
            </TwitterFollowCar>

            <TwitterFollowCar userName={"pheralb"} isFollowing={false}>
                Pablo Hermandez
            </TwitterFollowCar>
        </section>
    )
}