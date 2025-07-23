
import { Button } from "@/components/ui/button"

export default function ButtonTest() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h2 className="text-xl font-bold">Shape Variants</h2>
      <Button variant="default" shape="rounded">Rounded Default</Button>
      <Button variant="default" shape="square">Square Default</Button>
      <Button variant="destructive" shape="square">Square Destructive</Button>
      <Button variant="outline" shape="rounded" size="lg">Rounded Outline</Button>
      <Button variant="secondary" shape="square" size="sm">Small Square Secondary</Button>
    </div>
  )
}
