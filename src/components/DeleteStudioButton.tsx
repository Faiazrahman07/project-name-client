"use client";
import { API_URL } from "@/lib/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteStudioButton({ id }: { id: string }) {
  const router = useRouter();

  const confirmDelete = () => {
  if (window.confirm("Are you sure you want to delete this studio?")) {
    handleDelete();
  }
};

  const handleDelete = async () => {
  try {
    const res = await fetch(`${API_URL}/studios/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to delete studio");
    }

    toast.success("Studio deleted successfully!");
    router.refresh();

  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Something went wrong!"
    );
  }
};


  return <button onClick={confirmDelete }>Delete</button>;
}