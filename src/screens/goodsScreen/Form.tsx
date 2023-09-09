import {TreeCardProperties} from "./trees.ts";
import {FormEvent, useEffect, useState} from "react";
import {Button} from "../../components";
import {sendOrder} from "../../api";

const Form = (props: { tree: TreeCardProperties }) => {
    const [isResponseOk, setIsResponseOk] = useState<boolean | undefined >()
    const [pending, setPending] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState<string>('')
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [nameError, setNameError] = useState(false)

    const handleFormData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            name: name,
            tree: props.tree.title,
            phoneNumber: phoneNumber
        }
        if (!name) setNameError(true)
        if (!phoneNumber) setPhoneNumberError(true)

        if (props.tree && name && phoneNumber) {
            await setPending(true)
            await sendOrder(data, setIsResponseOk)
        }
    }


    useEffect(() => {
        if (isResponseOk !== null){
            setPending(false)
        }
    }, [sendOrder, isResponseOk])

    return (
        <div className='flex flex-col gap-3'>

            <div className='font-medium mt-5'>Оставьте заявку и мы свяжемся с вами!</div>
            {
                isResponseOk
                    ? <div className='font-bold text-green-900'>Все ок!</div>
                    : isResponseOk !== undefined && <div className='font-bold text-red-500'>Ошибка</div>
            }
            <form className='flex flex-col gap-3' onSubmit={handleFormData}>
                <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="username">
                        Модель
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                        disabled
                        value={props.tree.title}
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
                <div className='mt-2'>
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
        </div>
    )
}


export default Form