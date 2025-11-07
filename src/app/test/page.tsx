"use client";

import React from "react";
import { TextArea } from "@/components/ui/text-area";
import { Timeline } from "@/components/ui/timeline";
import { mentorsTimelineData } from "@/data/timeline/mentorsTimelineData";
import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8 space-y-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-neutral-900">
        Components Demo
      </h1>

      <div className="gap-10 flex flex-col items-center">
        <section>
          <h2 className="text-xl font-medium text-purple-700 mb-4">Text Area</h2>
          <TextArea label="Comment" placeholder="Type something..." helperText="Helper Text" />
        </section>
        <section>
          <h2 className="text-xl font-medium text-purple-700 mb-4">Input default</h2>
          <Input label="Email address" required helperText="Please enter a email" icon={Mail} iconAriaLabel="Email icon"/>
          <h2 className="text-xl font-medium text-purple-700 mb-4">Input success</h2>
          <Input label="Email address" required status="success" helperText="Correct Email" icon={Mail} iconAriaLabel="Email icon"/>
          <h2 className="text-xl font-medium text-purple-700 mb-4">Input error</h2>
          <Input label="Email address" required status="error" helperText="Please enter a valid email" icon={Mail} iconAriaLabel="Email icon"/>
        </section>
        <section>
          <h2 className="text-xl font-medium text-purple-700 mb-4">Checkbox</h2>
          <Checkbox label="Checkbox" />
          <Checkbox />
        </section>
        <section>
          <h2 className="text-xl font-medium text-purple-700 mb-4 text-center">Timeline alternate (default)</h2>
          <Timeline items={mentorsTimelineData} />
          <h2 className="text-xl font-medium text-purple-700 mb-4 text-center">Timeline opposite</h2>
          <Timeline items={mentorsTimelineData} variant={"opposite"} />
          <h2 className="text-xl font-medium text-purple-700 mb-4 text-center">Timeline left</h2>
          <Timeline items={mentorsTimelineData} variant={"left"} />
          <h2 className="text-xl font-medium text-purple-700 mb-4 text-center">Timeline right</h2>
          <Timeline items={mentorsTimelineData} variant={"right"} />
        </section>
      </div>
    </main>
  );
}
