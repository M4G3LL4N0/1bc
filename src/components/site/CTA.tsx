import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function CTA() {
  return (
    <Card className="mx-auto my-14 w-full max-w-7xl">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-semibold text-white">Ready to operate at 1BC standards?</h3>
          <p className="mt-2 max-w-2xl text-slate-300">
            Join a legal and ethical high-performance environment where execution quality is measured,
            transparent, and continuously improved.
          </p>
        </div>
        <Button href="/contact">Apply for Membership</Button>
      </div>
    </Card>
  );
}
