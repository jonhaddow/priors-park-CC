import type { Sermon } from "types";

interface SermonManagerProps {
  sermons: Sermon[];
}
const SermonManager = ({ sermons }: SermonManagerProps) => {
  return (
    <div class="my-6 bg-gray-50 p-4 shadow-md">
      <h3 class="mb-2 font-bold">Sermons</h3>
      <ul>
        {sermons.map((x) => (
          <li class="mb-2" key={x.fileURL}>
            <a href={x.fileURL} class="group flex items-end">
              <div class="flex flex-col justify-center group-hover:text-primary">
                <time class="text-xs font-thin">{x.publishedDate}</time>
                <span>{x.title}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SermonManager;
