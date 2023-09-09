import {renderToStaticMarkup} from "react-dom/server"
import {TelegramMessage} from "./TelegramMessage.tsx";

type OrderType = {
    name: string,
    tree: string,
    phoneNumber: string
}

export const staticElement = (data: OrderType) => {
    return renderToStaticMarkup(<TelegramMessage name={data.name} tree={data.tree} phoneNumber={data.phoneNumber}/>)
}

const handleFetch = async (chatId: string, htmlLayout: string) => {
    const token = '6497558141:AAHljoBZU0zFrmlVFfgwDetVsbYvTtRARt8'
    await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${htmlLayout}&parse_mode=html`)
}
export const sendOrder = (data: OrderType, setIsResponseOk: (value:boolean) => void) => {
    const chatsId = ['455910348',] // '5952659463'

    const htmlLayout = staticElement(data)
    if (htmlLayout)
        chatsId.map(chatId => {
            handleFetch(chatId, htmlLayout)
                .then(() => setIsResponseOk(true))
                .catch(() => setIsResponseOk(false))
        })
}
