import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React.js: A Beginner's Guide",
      excerpt:
        "Learn the basics of React.js and how to create your first React application with this comprehensive guide for beginners.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s",
      slug: "getting-started-with-react",
      link: "https://react.dev/", // Added link field
    },
  ]

  const categories = ["All", "React", "JavaScript", "CSS", "Next.js", "Full-Stack", "Web Design"]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
          <p className="text-muted-foreground md:text-xl">
            Thoughts, tutorials, and insights on web development and technology
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    <Tag className="mr-1 h-3 w-3" />
                    {post.category}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-3 text-xs">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={post.link}>
                  <Button variant="ghost" className="p-0 hover:bg-transparent">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  )
}
