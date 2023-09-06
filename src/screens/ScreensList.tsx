import {AdvantagesScreen, ContactsScreen, GoodsScreen, MainScreen, MiniAdvantagesScreen, QuestionsScreen} from "./";

const ScreensList = () => {
    return(
        <div className='px-4 flex flex-col gap-8'>
            <MainScreen/>
            <AdvantagesScreen/>
            <GoodsScreen/>
            <MiniAdvantagesScreen />
            <QuestionsScreen/>
            <ContactsScreen/>
        </div>
    )
}

export default ScreensList