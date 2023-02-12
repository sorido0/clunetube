



export const LeftNavMenueItems = ({ name, icon, action, className, esde }) => {
    const key = Math.random().toString(36).substr(2, 9);
    return (
        <div className={
            "text-white text-sm hover:bg-white/[0.15] cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg " + className}
            onClick={action}
            key={key}
        >
            {
                esde === "youtube" ? <span className='text-xl mr-5 text-red-600 '>{icon}</span> : <span className='text-xl mr-5'>{icon}</span>

            }
            <span className='text-white text-sm '>{name}</span>

        </div>
    )
}
