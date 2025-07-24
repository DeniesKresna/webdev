import HobbyItem from "./hobby-item"

export default function HobbyList({namanya, alamat, hobbies, handleHapusHobi}){
    return (
        <div>
            Ini Komponen Hoby List {namanya} dengan alamat di {alamat}
            <br />bla bla bla
            <br />bla bla bla
            <ul className="list-disc ml-4">
                {
                    hobbies.map((elmen) => {
                        return (
                            <HobbyItem elmen={elmen} handleHapusHobi={handleHapusHobi}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}