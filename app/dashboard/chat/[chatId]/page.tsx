import { Id } from "../../../../convex/_generated/dataModel";

interface ChatPageProps {
  params: Promise<{
    chatId: Id<"chats">;
  }>;
}

async function page({ params }: ChatPageProps) {
    const {chatId} = await params;
  return <div>page: {chatId}</div>;
}

export default page;
