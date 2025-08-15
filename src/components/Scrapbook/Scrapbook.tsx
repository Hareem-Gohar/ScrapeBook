import ScrapbookItem from "./ScrapbookItem";
import { scrapbookItems } from "./scrapbookData";
import "./scrapbook.css";

export default function Scrapbook() {
  return (
    <section className="py-12 rounded-lg shadow-inner bg-[url('/images/dots-bg.png')] bg-repeat">
      <h2 className="text-xl font-semibold mb-6">Scrapbook</h2>
      <div className="flex gap-8 flex-wrap justify-center">
        {scrapbookItems.map((item) => (
          <ScrapbookItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
