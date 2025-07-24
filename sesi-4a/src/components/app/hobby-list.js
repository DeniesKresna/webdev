export default function HobbyList({hobbies}){
    return (
        <div className="jeda">
            <ul className="ml-6 list-disc">
                {
                    hobbies.map((el) => {
                        return (
                            <li key={el}>
                                <span>{el} <span className="text-blue-800 cursor-pointer">[delete]</span></span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}