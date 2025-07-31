/*Example Implementation
<Accordion type='single' collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Accordion heading text that is so long it takes 2 lines
    </AccordionTrigger>
    <AccordionContent>
      Content section text Make sure accordion adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
*/

"use client"

import { cn } from "@/lib/cn"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import * as React from "react"

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    style={{ borderColor: "var(--color-neutral-300)" }}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"


export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "text-[20px] leading-[24px] tracking-[0] flex justify-between items-start font-bold transition-all [&[data-state=open]>svg]:rotate-180 pt-[20px] pb-[20px]",
        className
      )}
      {...props}
    >
      <span className="text-left flex-1 break-words whitespace-normal items-start">{children}</span>
      <svg
        className="w-[22px] h-[22px] transition-transform duration-200"
        fill="none"
      >
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"


export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "pb-[24px] gap-[16px] font-normal overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    style={{ color: "var(--color-button-disabled-text)" }}
    {...props}
  />
))
AccordionContent.displayName = "AccordionContent"

