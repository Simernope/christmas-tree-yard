import {AdvantagesScreen, ContactsScreen, GoodsScreen, MainScreen, MiniAdvanScreen, QuestionsScreen} from "./";

const ScreensList = () => {
    return(
        <div className='px-4 md:px-0 flex flex-col gap-8'>
            <MainScreen/>
            <AdvantagesScreen/>
            <GoodsScreen/>
            <MiniAdvanScreen/>
            <GoodsScreen/>
            <QuestionsScreen/>
            <ContactsScreen/>
        </div>
    )
}

export default ScreensList