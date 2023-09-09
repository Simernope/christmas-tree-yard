
type OrderType = {
    name: string,
    tree: string,
    phoneNumber: string
}

export const sendOrder = (data: OrderType, setIsResponseOk: (value: boolean) => void) => {
    const token = '6497558141:AAHljoBZU0zFrmlVFfgwDetVsbYvTtRARt8'
    const chatsId = ['455910348', '802078730', '5952659463'] // '5952659463'
    const htmlLayout = `*[NEW] Заявка*%0AТовар - _${data.tree}_%0AЗаказчик - _${data.name}_%0AТелефон - _${data.phoneNumber}_`

    if (htmlLayout)
        chatsId.map(chatId => {
            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${htmlLayout}&parse_mode=Markdown`)
                .then((response) => {
                    response.ok
                        ? setIsResponseOk(true)
                        : setIsResponseOk(false)

                })
                .catch(() => setIsResponseOk(false))
        })
}
