import { useAccordionContext } from './Accordion';

export default function AccordionItem({id, title, children, className }) {
  const {openItemId, openItem, closeItem} = useAccordionContext()

  return (
    <li className={className}>
      <h3>{title}</h3>
      <div>{children}</div>
    </li>
  );
}
