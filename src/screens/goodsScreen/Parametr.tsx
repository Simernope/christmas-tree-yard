export const Parameter = (props: { circleColor: string, item: string }) => (
    <div className='flex gap-2'>
        <div className={`w-[24px] h-[24px] rounded-[24px] ${props.circleColor}`}></div>
        <div>{props.item}</div>
    </div>
)