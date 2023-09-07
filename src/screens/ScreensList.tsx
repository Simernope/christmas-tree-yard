import {
    AdvantagesScreen,
    ContactsScreen,
    FeedbackScreen,
    GoodsScreen,
    MainScreen,
    MiniAdvantagesScreen,
    QuestionsScreen
} from "./";

const ScreensList = () => {
    return (
        <div className='px-4 flex flex-col gap-20'>
            <MainScreen/>
            <AdvantagesScreen/>
            <GoodsScreen/>
            <MiniAdvantagesScreen/>
            <FeedbackScreen/>
            <QuestionsScreen />
            <ContactsScreen/>
        </div>
    )
}

export default ScreensList