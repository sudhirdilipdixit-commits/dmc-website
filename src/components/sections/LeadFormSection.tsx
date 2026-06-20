"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const courses = [
  "Distance MBA — General",
  "Online MBA — Marketing",
  "Online MBA — Finance",
  "Online MBA — HR",
  "Online MBA — Operations",
  "Not sure yet — help me choose",
];

const bullets = [
  "Honest comparisons across 47+ universities",
  "Counselling is genuinely free — no card details ever",
  "We tell you if a distance MBA is the wrong choice for you",
];

export function LeadFormSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      course: fd.get("course") as string,
      city: fd.get("city") as string,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submission_failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at +91 86696 61005.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="enquire" className="pb-[clamp(56px,9vw,110px)]">
      <div className="wrap grid grid-cols-[1fr_1.1fr] gap-[clamp(40px,6vw,72px)] items-start max-lg:grid-cols-1">
        {/* Left copy */}
        <div>
          <span className="eyebrow">Your next step</span>
          <h2 className="font-display font-bold text-[clamp(28px,4vw,42px)] leading-[1.15] tracking-[-0.02em] text-navy mt-6">
            One conversation.{" "}
            <span className="font-voice italic font-medium text-navy-2">
              No commitment.
            </span>
          </h2>
          <p className="text-slate-600 mt-[18px] text-[17px] max-w-[42ch]">
            Tell us about yourself in four short fields. A counsellor will call
            within 24 hours with a shortlist matched to your goal, not a sales
            pitch.
          </p>
          <div className="mt-7 grid gap-3.5">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3 items-start text-[15px] text-ink">
                <span className="w-[18px] h-[18px] rounded-full bg-saffron-50 border-2 border-saffron shrink-0 mt-0.5" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white border border-hairline rounded-2xl p-[clamp(28px,4vw,40px)] shadow-card">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-saffron-50 border-2 border-saffron flex items-center justify-center text-saffron text-2xl font-bold mx-auto mb-5">
                ✓
              </div>
              <h3 className="font-display font-semibold text-navy text-xl mb-2">
                We&rsquo;ve got your request!
              </h3>
              <p className="text-slate-600 max-w-[34ch] mx-auto">
                A counsellor will call you within 24 hours — often the same
                day.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display font-semibold text-navy text-[20px] mb-1.5">
                Request a callback
              </h3>
              <p className="text-slate-500 text-sm mb-7">
                Replies typically within 24 hours, often the same day.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-[18px]">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-[0.08em] uppercase text-slate-500 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Rahul Verma"
                    required
                    className="input-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold tracking-[0.08em] uppercase text-slate-500 mb-2"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    className="input-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-xs font-semibold tracking-[0.08em] uppercase text-slate-500 mb-2"
                  >
                    Course of interest
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    className="input-base"
                  >
                    <option value="">Select a programme</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs font-semibold tracking-[0.08em] uppercase text-slate-500 mb-2"
                  >
                    Your city
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Pune"
                    required
                    className="input-base"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm">{error}</p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full !py-4 !text-base mt-2"
                  disabled={loading}
                  arrow
                >
                  {loading ? "Submitting…" : "Speak to a counsellor"}
                </Button>

                <p className="text-[13px] text-slate-400 text-center">
                  By submitting, you agree to receive a call from our
                  counsellor. No spam, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
