import EditStudioPage from "@/components/EditStudio";
import { API_URL } from "@/lib/api";
const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `${API_URL}/studios/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div>Studio not found</div>;
  }

  const data = await res.json();

  return <EditStudioPage data={data} />;
};

export default Page;