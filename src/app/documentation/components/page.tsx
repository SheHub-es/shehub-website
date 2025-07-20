"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function ComponentsPage() {
  const [selectedFramework, setSelectedFramework] = useState("");

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mt-4 mb-20">UI Components Playground</h1>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <section className="space-y-4 text-center">
          <h2 className="text-xl font-semibold">Theme Toggle</h2>
          <div className="flex justify-center">
            <ModeToggle />
          </div>
        </section>

        <section className="space-y-4 text-center">
          <h2 className="text-xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Select Example</h2>
          <Select onValueChange={(value: string) => setSelectedFramework(value)}>
            <SelectTrigger className="w-[200px] mx-auto">
              <SelectValue placeholder="Choose an example" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="example1">Example 1</SelectItem>
              <SelectItem value="example2">Example 2</SelectItem>
              <SelectItem value="example3">Example 3</SelectItem>
            </SelectContent>
          </Select>
          {selectedFramework && (
            <p className="text-sm text-muted-foreground text-center">
              This is an example: <strong>{selectedFramework}</strong>
            </p>
          )}
        </section>
        <section className="space-y-4 text-center">
          <h2 className="text-xl font-semibold">Icon Examples</h2>
          <div className="flex justify-center gap-6 flex-wrap items-center text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <Icons.User className="w-6 h-6" />
              <span className="text-xs">Lucide User</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Icons.Instagram className="w-6 h-6 text-pink-500" />
              <span className="text-xs">Lucide Instagram</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Icons.Linkedin className="w-6 h-6 text-blue-500" />
              <span className="text-xs">Lucide LinkedIn</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Icons.LinkedinLogo className="w-6 h-6 text-blue-600" />
              <span className="text-xs">Custom LinkedIn</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
