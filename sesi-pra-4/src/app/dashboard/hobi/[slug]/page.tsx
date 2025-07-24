interface HobiPageProps {
  params: {
    slug: string;
  };
}

export default async function HobiPage({ params }: HobiPageProps) {
  const {slug} = await params
  return (
    <div className="p-4 text-xl">
      Ini Detail dari Hobi <span className="font-bold">{slug}</span>
    </div>
  );
}