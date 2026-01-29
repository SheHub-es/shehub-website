import CallToActionLayout from "@/sections/shared/callToAction/CallToActionLayout"

export const CallToAction = () => {
  return (
    <CallToActionLayout
      title="Ready to grow and give back?"
      buttonText="Join the community"
      buttonHref="/auth"
      buttonVariant="secondary-primary"
    />
  )
}

export default CallToAction
