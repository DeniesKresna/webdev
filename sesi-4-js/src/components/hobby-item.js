import { redirect } from 'next/navigation'
export default function HobbyItem({elmen, handleHapusHobi}){
    const keHalamanDetailHobi = (el) => {
        redirect(`/dashboard/hobi/${el}`)
    }
    return (
        <li className="mt-2" key={elmen}>
            {elmen}
            <button
                onClick={() => handleHapusHobi(elmen)}
                className="bg-red-900 ring-1 text-white rounded-sm px-2 text-xs cursor-pointer">
                    delete
            </button>
            <button
                onClick={() => keHalamanDetailHobi(elmen)}
                className="ml-2 bg-blue-900 ring-1 text-white rounded-sm px-2 text-xs cursor-pointer">
                    detail
            </button>
        </li>
    )
}