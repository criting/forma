"use client";

import { contact } from "@/content/provider";
import { cn } from "@/lib/cn";
import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Enter a valid email"),
  organisation: z.string().trim().optional(),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().trim().min(20, "Add a little more detail (20+ characters)"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "demo" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse({
      name: data.name,
      email: data.email,
      organisation: data.organisation || undefined,
      projectType: data.projectType,
      budget: data.budget || undefined,
      timeline: data.timeline || undefined,
      message: data.message,
    });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    setSubmitting(true);

    if (!contact.endpoint) {
      await new Promise((r) => setTimeout(r, 450));
      setSubmitting(false);
      setStatus("demo");
      form.reset();
      return;
    }

    try {
      const res = await fetch(contact.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("demo");
      form.reset();
    } catch {
      setStatus("error");
      setErrors({ message: "Could not send. Try email instead." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {!contact.endpoint ? (
        <div
          role="note"
          className="rounded-[var(--radius-control)] border border-rule bg-paper-sunken px-4 py-3 text-sm text-muted"
        >
          <strong className="text-ink">Demo form.</strong> No endpoint configured — submissions
          stay local. Set <code className="text-mono normal-case tracking-normal">contact.endpoint</code>{" "}
          in content to connect Formspree, Basin, or your API.
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name} />
        <Field label="Email" name="email" type="email" required error={errors.email} />
      </div>

      <Field label="Organisation" name="organisation" error={errors.organisation} optional />

      <div className="grid gap-6 md:grid-cols-3">
        <SelectField
          label="Project type"
          name="projectType"
          required
          error={errors.projectType}
          options={contact.projectTypes}
        />
        <SelectField
          label="Budget"
          name="budget"
          error={errors.budget}
          options={contact.budgetBands}
          optional
        />
        <SelectField
          label="Timeline"
          name="timeline"
          error={errors.timeline}
          options={contact.timelines}
          optional
        />
      </div>

      <div>
        <label htmlFor="message" className="text-mono mb-2 block normal-case tracking-normal">
          Message <span className="text-signal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={inputClass(Boolean(errors.message))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-signal">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-[var(--radius-control)] bg-signal px-6 py-3 text-sm font-medium text-paper-raised transition-colors hover:bg-signal-hover disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send enquiry"}
        </button>
        {status === "demo" ? (
          <p role="status" className="text-sm text-ink">
            Demo submission recorded locally — nothing was sent to a server.
          </p>
        ) : null}
        {status === "error" && Object.keys(errors).length === 0 ? (
          <p role="alert" className="text-sm text-signal">
            Something went wrong. Email {contact.email} instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-mono mb-2 block normal-case tracking-normal">
        {label}{" "}
        {required ? <span className="text-signal">*</span> : null}
        {optional ? <span className="text-meta"> (optional)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={inputClass(Boolean(error))}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-signal">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  optional,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  optional?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-mono mb-2 block normal-case tracking-normal">
        {label}{" "}
        {required ? <span className="text-signal">*</span> : null}
        {optional ? <span className="text-meta"> (optional)</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className={inputClass(Boolean(error))}
        aria-invalid={Boolean(error)}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-signal">{error}</p> : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-[var(--radius-control)] border bg-paper-raised px-3 py-3 text-ink outline-none transition-colors",
    hasError ? "border-signal" : "border-rule focus:border-ink",
  );
}
