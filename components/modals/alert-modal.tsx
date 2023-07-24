"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Are you sure?"
      description="This action can not be undone"
    >
      <div className="flex justify-end items-center pt-6 space-x-2 w-full">
        <Button variant="outline" disabled={loading} onClick={onClose}>
          Cancel
        </Button>

        <Button variant="destructive" disabled={loading} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
