"use client";

import React from "react";
import { TextArea } from "@/components/ui/text-area";
import { Timeline } from "@/components/ui/timeline";
import { mentorsTimelineData } from "@/data/timeline/mentorsTimelineData";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8 space-y-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold text-neutral-900">
        Components Demo
      </h1>

      <div className="gap-5 justify-center items-center">
        <section>
          <h2 className="text-xl font-medium text-purple-700 mb-4">Text Area</h2>
          <TextArea label="Comment" placeholder="Type something..." helperText="Helper Text" />
        </section>
        <section>
          <h2 className="text-xl font-medium text-purple-700 mb-4 text-center">Timeline</h2>
          <Timeline items={mentorsTimelineData} />
        </section>
      </div>
    </main>
  );
}
