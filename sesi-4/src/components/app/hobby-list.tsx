export default function HobbyList({hobbies}){
    return (
        <div className="jeda">
            <ul className="list-dics ml-6">
                {
                    hobbies.map((el) => {
                        <li key={el}>
                            {el}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}