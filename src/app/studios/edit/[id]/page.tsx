import EditStudioPage from "@/components/EditStudio";

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:5000/studios/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div>Studio not found</div>;
  }

  const data = await res.json();

  return <EditStudioPage data={data} />;
};

export default Page;