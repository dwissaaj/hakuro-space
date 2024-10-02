export default function PhotoBlogLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex justify-center items-center w-screen ">
            {children}
        </div>
    )
}