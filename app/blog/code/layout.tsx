export default function CodingBlogLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="w-screen "> 
        {children}
      </div>
    )
  }