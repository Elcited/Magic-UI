import BlogCard from '../ui/BlogCard';
import Section from '../Section';

export default function Blog() {
  return (
    <Section title="Blog" subtitle="Latest Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3-gap-8">
        <BlogCard />
      </div>
    </Section>
  );
}
