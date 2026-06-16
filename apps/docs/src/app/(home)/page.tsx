import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        shadcn/ui components for ntuniso projects
      </h1>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">
        อยู่ระหว่าง indev และจำเป็นต้องมี shadcn ถึงจะใช้ได้นะ :)
      </h3>
      <p>
        <Link href="/docs" className="font-medium text-xl underline">
          /docs
        </Link>
      </p>
    </div>
  );
}
