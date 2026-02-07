"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const commentFormSchema = z.object({
  comment: z.string().min(3, "Comment must be at least 3 characters.").max(500, "Comment is too long."),
});

export function CommentForm({ postId }: { postId: string }) {
  const form = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof commentFormSchema>) {
    // In a real app, this would be a server action.
    console.log({ postId, ...values });
    await new Promise(resolve => setTimeout(resolve, 1000));
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Share your thoughts..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </form>
    </Form>
  )
}
