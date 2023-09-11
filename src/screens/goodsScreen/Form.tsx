import {FC, FormEvent, useEffect, useState} from "react";
import {Button} from "../../components";
import {sendOrder} from "../../api";

type FormProps = {
    tree: {
        "title": string,
        "height": number,
        "rating": number,
        "cost": number,
        "image": string,
        "properties": Array<string>
    }

}

const Form: FC<FormProps> = ({tree}: FormProps) => {
    const [isResponseOk, setIsResponseOk] = useState<boolean | undefined>()
    const [pending, setPending] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState<string>('')
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [nameError, setNameError] = useState(false)

    const handleFormData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            name: name,
            tree: `${tree.title} ${tree.height} см`,
            phoneNumber: phoneNumber
        }
        if (!name) setNameError(true)
        if (!phoneNumber) setPhoneNumberError(true)

        if (tree && name && phoneNumber) {
            await setPending(true)
            await sendOrder(data, setIsResponseOk)
        }
    }


    useEffect(() => {
        if (isResponseOk !== undefined) {
            setPending(false)
        }
    }, [isResponseOk])

    useEffect(() => {
        setIsResponseOk(undefined)
    }, [tree])

    return (
        <div className='flex flex-col gap-3'>
            {
                !isResponseOk &&
                <>

                    <div className='font-medium mt-5'>Оставьте заявку и мы свяжемся с вами!</div>
                    {
                        isResponseOk === false &&
                        <div className='text-red-500'>Ошибка! Попробуйте снова.
                        </div>
                    }
                    <form className='flex flex-col gap-3' onSubmit={handleFormData}>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="username">
                                Модель
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                disabled
                                value={tree.title}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="username">
                                Ваше имя
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text" placeholder="Как вас зовут?"
                                value={name}
                                onChange={(e) => {
                                    setNameError(false)
                                    setName(e.target.value)
                                }}
                            />
                            {
                                nameError &&
                                <p className="text-red-500 text-xs italic">Пожалуйста, введите имя.</p>
                            }
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">
                                Ваш номер телефона
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phoneNumber" type="text" placeholder="Укажите номер телефона"
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumberError(false)
                                    setPhoneNumber(e.target.value)
                                }
                                }
                            />
                            {
                                phoneNumberError &&
                                <p className="text-red-500 text-xs italic">Пожалуйста, введите номер телефона.</p>
                            }
                        </div>
                        <div className='mt-2 sticky bottom-0'>
                            <Button buttonType={'gradient'}>
                                {
                                    pending ?
                                        <div className='flex gap-2 items-center justify-center'>
                                            <span className="material-symbols-outlined animate-spin">autorenew</span>
                                            <span>Загрузка...</span>
                                        </div>
                                        :
                                        <div>Оставить заявку</div>
                                }

                            </Button>
                        </div>
                    </form>
                </>
            }
            {
                isResponseOk === true &&
                <div className='flex flex-col gap-3 mt-5'>
                    <div className='text-xl font-medium'>Отлично!</div>
                    <div> Заявка на
                        <span className='font-medium'> {tree.title} {tree.height} см</span> стоимостью <span
                            className='font-medium'> {tree.cost} ₽ </span>
                        оставлена
                    </div>

                    <div>Скоро мы свяжемся с вами по номеру
                        <span className='font-medium'> {phoneNumber}</span>
                    </div>
                    <div>По всем вопросам звоните: <span className='font-medium'> +7-999-568-15-77</span></div>
                </div>
            }

        </div>
    )
}


export default Form