import ScreensList from "./screens/ScreensList.tsx";
import {Footer, Header} from "./components";
import {useMediaQuery} from "./hooks/useMediaQuery.ts";

function App() {
    return (
        <div className='w-full bg-white'>
            <Header/>
            <main
                className={`container mx-auto ${useMediaQuery('(min-width: 1000px)') ? 'mt-[127px]' : ' mt-[82px]'} mb-[100px] `}>
                <ScreensList/>
            </main>
            <Footer />
        </div>
    )
}

export default App