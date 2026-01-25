"use client";

import IconMail from "@/components/icons/IconMail";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import SectionWrapper from "@/sections/shared/sectionWrapper/SectionWrapper";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      acceptTerms: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left side - Information */}
          <div className="flex flex-col gap-6 md:gap-8 text-center md:text-left">
            <h1 className="font-primary text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[color:var(--color-black)]">
              Let's{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--color-gradient-brand)" }}
              >
                connect!
              </span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              Either you want to collaborate, mentor, partner with us or just know more
              about SheHub, please fill in the form or send us an email.
            </p>

            <p className="text-[color:var(--color-black)] font-semibold text-lg leading-relaxed">
              We'd love to hear from you
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Icon icon={IconMail} size="md" className="text-icon-default" aria-hidden="true" />
              <a
                href="mailto:info@shehub.es"
                className="text-primary font-medium hover:underline"
              >
                info@shehub.es
              </a>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="w-full flex justify-center md:justify-start">
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col gap-6 w-full md:max-w-full lg:max-w-[584px]"
              aria-label="Contact form"
            >
              <Input
                label="Full name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder=""
                className="w-full"
                required
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=""
                className="w-full"
                required
              />

              <TextArea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleTextAreaChange}
                placeholder="Type your message..."
                className="w-full"
                required
              />

              <Checkbox
                label="I accept the terms"
                checked={formData.acceptTerms}
                onChange={handleCheckboxChange}
                required
                checkboxProps={{ name: "acceptTerms" }}
              />

              <Button
                type="submit"
                variant="primary-primary"
                size="lg"
                shape="rounded"
                className="w-full md:w-auto h-12 lg:h-[48px] lg:w-[106px] lg:min-w-[106px] lg:max-w-[106px]"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
