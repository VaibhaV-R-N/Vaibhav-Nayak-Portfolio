import { MdAccessTimeFilled } from "react-icons/md";

function BlogWrapper({title,tags,date,children}) {
  return (
    <div className="w-full h-auto p-6">
        <div className="w-full p-2 h-auto flex flex-col items-center justify-center gap-16 mb-4">
            <p className="text-white text-2xl font-semibold">{title}</p>
            <div className="w-full h-16 flex items-center justify-between border-b-2 border-red-500">
                <p className="text-yellow-400 w-1/2 text-md font-medium">{tags}</p>
                <div className="w-1/2 h-1/4 flex items-center justify-end gap-2" > 
                    <MdAccessTimeFilled className="text-yellow-400 h-full "/>
                    <h4 className="text-red-500 text-md font-normal">{date}</h4>
                </div>
            </div>
        </div>
        {children}
    </div>
  )
}

export default BlogWrapper