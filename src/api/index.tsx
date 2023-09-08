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

export const sendOrder = (data: OrderType) => {
    const chatsId = ['455910348',] // '5952659463'
    const token = '6497558141:AAHljoBZU0zFrmlVFfgwDetVsbYvTtRARt8'
    const htmlLayout = staticElement(data)
    if (htmlLayout)
        chatsId.map(chatId => {
            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${htmlLayout}&parse_mode=html`)
                .then(() => console.log('ok'))
                .catch(error => console.log(error))
        })
}
