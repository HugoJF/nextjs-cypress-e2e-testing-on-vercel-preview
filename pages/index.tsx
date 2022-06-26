import type {NextPage} from 'next'
import Counter from "../components/Counter";

const Home: NextPage = () => {

    return <main className="flex items-center justify-center min-h-screen text-5xl text-white bg-gray-900">
        <Counter
            increments={10}
        />
    </main>
}

export default Home
