interface CardCategoryProps {
  label: string;
}

export function CardCategory({ label }: CardCategoryProps) {
  return (
    <a
      href=""
      className="pt-1.5 pb-1 pr-6 pl-6 mr-4 mb-4 font-medium text-center bg-blueNCS text-white rounded-lg scale-95 hover:bg-blueNCSLight hover:scale-105 "
    >
      {label}
    </a>
  );
}
