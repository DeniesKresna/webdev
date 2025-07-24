export default function LaySidebar(){
    return (
        <aside className="w-64 bg-gray-100 p-4">
            <h2 className="font-bold mb-4">Sidebar</h2>
            <div className="flex-row">
                <ul className="space-y-2">
                    <li><a href="/">HomePage</a></li>
                    <li><a href="/dashboard/profil">Profil</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
                <div className="flex-auto">

                </div>
            </div>
        </aside>
    )
}