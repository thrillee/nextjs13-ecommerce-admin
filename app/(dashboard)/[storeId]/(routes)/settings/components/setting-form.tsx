"use client";
import { useState } from "react";

import * as z from "zod";

import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SettingsFormProps {
  initialStoreData: Store;
}

const formScheme = z.object({
  name: z.string().min(1),
});

type SettingFormValues = z.infer<typeof formScheme>;

const SettingsForm: React.FC<SettingsFormProps> = ({ initialStoreData }) => {
  const form = useForm<SettingFormValues>({
    resolver: zodResolver(formScheme),
    defaultValues: initialStoreData,
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SettingFormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading title="Settings" description="Manage Store Preferences" />
        <Button variant="destructive" size="icon" onClick={() => { }}>
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Store name..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading} className="ml-auto">
            Save Changes
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SettingsForm;
