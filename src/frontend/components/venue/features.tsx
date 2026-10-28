import { Title } from "@trebired/frontend/react";

type Feature = { text: string; title: string };

export function Features({ items }: { items: Feature[] }) {
  return (
    <ul className="tbfm-features">
    {items.map((item) => (
          <li key={item.title}>
          <Title className="tbf-text-xl" level={2}>{item.title}</Title>
          <p>{item.text}</p>
          </li>
    ))}
    </ul>
  );
}
