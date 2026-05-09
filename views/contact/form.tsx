"use client";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import Script from "next/script";
import { Button } from "@/components/button";
import { submitContact, type ContactState } from "./actions";
import { Icon } from "@/components/icon";
import { toast } from "sonner";

const initialState: ContactState = { status: "idle" };

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="bg-yellow disabled:opacity-60 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <span>
          <Icon
            name="loaderCircle"
            className="inline animate-spin self-center mr-1.5"
          />
          <span>Sending...</span>
        </span>
      ) : (
        "Send It!"
      )}
    </Button>
  );
};

export const ContactForm = () => {
  const [state, formAction] = useActionState(submitContact, initialState);
  const errors = state.status === "error" ? state.errors : undefined;
  const values = state.status === "error" ? state.values : undefined;

  useEffect(() => {
    if (!state.message) return;
    if (state.status === "success") toast.success(state.message);
    if (state.status === "error") toast.error(state.message);
  }, [state]);

  return (
    <>
    <form
      action={formAction}
      className="bg-cream border-4 rounded-xl gap-3.5 flex flex-col shadow p-5 sm:p-7"
      autoComplete="off"
    >
      <div className="font-secondary tracking-normal text-xl">
        Send a Message
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-extrabold" htmlFor="name">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Who are you?"
          className="border-3 py-2.5 px-3.5 text-sm font-semibold shadow-sm focus:border-blue focus:shadow-blue outline-none rounded-lg bg-cream-dark"
          required
          maxLength={100}
          autoComplete="off"
          aria-invalid={!!errors?.name}
          defaultValue={values?.name ?? ""}
          key={`name-${state.status}-${state.message ?? ""}`}
        />
        {errors?.name && (
          <p className="text-xs text-red-600 font-semibold">{errors.name[0]}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-extrabold" htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          className="border-3 py-2.5 px-3.5 text-sm font-semibold shadow-sm focus:border-blue focus:shadow-blue outline-none rounded-lg bg-cream-dark"
          required
          maxLength={200}
          aria-invalid={!!errors?.email}
          defaultValue={values?.email ?? ""}
          key={`email-${state.status}-${state.message ?? ""}`}
        />
        {errors?.email && (
          <p className="text-xs text-red-600 font-semibold">
            {errors.email[0]}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-extrabold" htmlFor="msg">
          Message
        </label>
        <textarea
          id="msg"
          name="message"
          placeholder="What's on your mind?"
          className="border-3 py-2.5 px-3.5 text-sm font-semibold shadow-sm focus:border-blue focus:shadow-blue outline-none rounded-lg bg-cream-dark resize-y min-h-25"
          required
          maxLength={4000}
          autoComplete="off"
          aria-invalid={!!errors?.message}
          defaultValue={values?.message ?? ""}
          key={`message-${state.status}-${state.message ?? ""}`}
        />
        {errors?.message && (
          <p className="text-xs text-red-600 font-semibold">
            {errors.message[0]}
          </p>
        )}
      </div>
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="absolute -left-2000 opacity-0 pointer-events-none"
      />
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-theme="light"
      />
      <SubmitButton />
    </form>
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" />
    </>
  );
};
