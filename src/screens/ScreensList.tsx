import {AdvantagesScreen, ContactsScreen, GoodsScreen, MainScreen, MiniAdvanScreen, QuestionsScreen} from "./";

const ScreensList = () => {
    return(
        <div className='px-4 flex flex-col gap-8'>
            <MainScreen/>
            <AdvantagesScreen/>
            <GoodsScreen/>
            <MiniAdvanScreen/>
            <QuestionsScreen/>
            <ContactsScreen/>
        </div>
    )
}

export default ScreensList