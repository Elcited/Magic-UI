import { type Post } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  data: Post;
}

export default function BlogCard({ data }: BlogCardProps) {
  return (
    <a href={`/blog/${data.slug}`} className="block">
      <div className="bg-background rounded-lg p-4 mb-4 border hover:shadow-sm transition-shadow duration-200">
        {data.image && (
          <img
            width={1200}
            height={630}
            src={data.image}
            alt={data.title}
            className="rounded-t-lg object-cover border"
          />
        )}
        {!data.image && (
          <div className="bg-gray-200 h-[180px] mb-4 rounded"></div>
        )}
        <p className="mb-2">
          <time
            dateTime={data.publishedAt}
            className="text-sm text-muted-foreground"
          >
            {formatDate(data.publishedAt)}
          </time>
        </p>

        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-foreground mb-4">{data.summary}</p>
      </div>
    </a>
  );
}
