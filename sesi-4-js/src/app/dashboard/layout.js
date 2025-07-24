import LaySidebar from "@/components/layout/sidebar"
export default function DashboardLayout({ children }){
    return (
        <div className="flex">
            <LaySidebar />
            <main>
                {children}
            </main>
        </div>
    )
}