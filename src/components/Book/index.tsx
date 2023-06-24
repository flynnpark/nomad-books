interface Props {
  coverUrl: string;
  purchaseUrl: string;
  title: string;
}

function Book({ title }: Props) {
  return (
    <div>
      <span>{title}</span>
    </div>
  );
}

export default Book;
