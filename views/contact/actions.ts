"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.email("Invalid email").max(200),
  message: z.string().trim().min(1, "Message is required").max(4000),
});

export type ContactFields = { name: string; email: string; message: string };

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string[]>>;
  values?: ContactFields;
};

const escapeMd = (s: string) =>
  s.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1");

export const submitContact = async (
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> => {
  const values: ContactFields = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = schema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
      values,
    };
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_USER_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_USER_ID) {
    return { status: "error", message: "Server is not configured.", values };
  }

  const { name, email, message } = parsed.data;
  const text = [
    "*New message*",
    "",
    `*Name:* ${escapeMd(name)}`,
    `*Email:* ${escapeMd(email)}`,
    "",
    "*Message:*",
    escapeMd(message),
  ].join("\n");

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_USER_ID,
          text,
          parse_mode: "MarkdownV2",
          disable_web_page_preview: true,
        }),
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return {
        status: "error",
        message: "Failed to send. Try again later.",
        values,
      };
    }
  } catch (err) {
    console.error("[telegram] fetch error", err);
    return {
      status: "error",
      message: "Network error. Try again later.",
      values,
    };
  }

  return { status: "success", message: "Message sent — talk soon!" };
};
