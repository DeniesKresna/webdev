export default async function DashboardHobiPage({ params }){
    /*
        params: {
            slug: "sugeng"
        }
    */
    const {slug} = await params
    return (
        <div className="p-2">
            Ini Adalah Detail Hobi {slug}
        </div>
    )
}