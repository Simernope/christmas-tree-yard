import {FC} from "react";

type OrderType = {
    name: string,
    tree: string,
    phoneNumber: string
}

export const TelegramMessage: FC<OrderType> = ({name, tree, phoneNumber}: OrderType) => {
    return(
        <b>
            <b>[NEW] Заявка;</b> <pre>  Товар - {tree};  Закзчик - {name};  Телефон - {phoneNumber};</pre>
        </b>
    )
}