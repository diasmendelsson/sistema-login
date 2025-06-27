export default function HeaderBox({type="title", title, subtext, user}){
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl lg:text-30 font-semibold text-gray-900  mb-4">
                {title}
                {type === 'saudações' && (
                    <span className="text-blue-400">&nbsp;{user}</span>
                )}
            </h1>
            <p className="header-box-subtext mb-2">{subtext}</p>
        </div>
    )
}