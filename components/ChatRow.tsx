import { Id, Doc } from "../convex/_generated/dataModel"
import { NavigationContext } from "../lib/NavigationProvider";
import { use } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { TrashIcon } from  "@radix-ui/react-icons"


export function ChatRow ({
    chat, 
    onDelete,
   } : {
    chat: Doc<"chats">;
    onDelete: (id: Id<"chats">) => void;
}) {

    const router = useRouter();
    const { closeMobileNav } = use(NavigationContext);

    const handleClick = () => {
        router.push(`/dashboard/chats/${chat._id}`);
        closeMobileNav();
    };

    return (
    <div
    className="group rounded-xl border border-gray-200/30 bg-white/50 backdrop-blur-sm
    hover:bg-white/80 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
    onClick={handleClick}
    >
        <div className="p-4">
            <div className="flex justify-between items-start">
                chat

                <Button
                variant="ghost"
                size="icon"
                className="opacity-0 group-hover:opacity-100
                -mr-2 -mt-2 ml-2 transition-opacity
                duration-200"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(chat._id);
                }}
                >
                    <TrashIcon className="h-4 w-4 text-gray-400
                    hover:text-red-500 transition-colors"/>

                </Button>
            </div>
            

            {/* Last Message */}
            {/* lastMessage && (
                <p className="text-xs text-gray-400 mt-1.5 font-medium">
                    <TimeAgo date={lastMessage.createdAt} />
                </p>
            )}*/}
        </div>
    </div>)
}

export default ChatRow