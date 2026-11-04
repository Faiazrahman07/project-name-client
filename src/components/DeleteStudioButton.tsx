"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteStudioButton({ id }: { id: string }) {
  const router = useRouter();

  const confirmDelete = () => {
  if (window.confirm("Are you sure you want to delete this studio?")) {
    handleDelete();
  }
};

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/studios/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      toast.success("Studio deleted successfully");
      router.refresh();
    } else {
      toast.error("Failed to delete studio");
    }
  };

  return <button onClick={confirmDelete }>Delete</button>;
}