import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, MapPin, Trophy, Users } from "lucide-react"
import Image from "next/image"
import zmart from "@/assets/zmart.png"
import logomaster from "@/assets/logomaster.png"
import sharelift from "@/assets/sharelift.png"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Winner for Python Mini Project Competition",
      organization: "Z-mart Shoppy",
      date: "November 2023",
      description: "Developed a Python application that secured 3rd position in the competition.",
      icon: <Trophy className="h-5 w-5 text-primary" />,
      image: zmart, // Correctly importing the image from assets
    },
    {
      title: "Winner for Logo Master Competition",
      organization: "Career Katta forum, K.K.Wagh Institute of Engineering Education and Research",
      date: "December 2022",
      description: "Created a logo design that won 3rd place in the competition.",
      icon: <Award className="h-5 w-5 text-primary" />,
      image: logomaster,
    },
    {
      title: "Winner for Database Mini Project Competition",
      organization: "ShareLift-Connecting College Student for Share Rides",
      date: "November 2024",
      description: "Designed and implemented a database project that secured 2nd position.",
      icon: <Trophy className="h-5 w-5 text-primary" />,
      image: sharelift, // Keeping placeholder for now
    },
    {
      title: "250+ question on Coding Platform",
      organization: "LeetCode",
      date: "Present",
      description: "Solved Multiple coding problems on LeetCode, enhancing my problem-solving skills.",
      icon: <Trophy className="h-5 w-5 text-primary" />,
      image: "data:image/jpeg;base64,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", // Keeping placeholder for now
    }


  ]

  const extracurricular = [
    {
      title: "Core Member of Computer Society of India Students' Chapter",
      organization: "K.K. Wagh Institute of Engineering Education and Research",
      period: "2024-25",
      description: "Actively contributing to the organization of technical events and workshops.",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: "Sponsorship and Curation Team",
      organization: "Innov-era, A National Level Hackathon organized by KKWIEER",
      period: "2023",
      description: "Responsible for securing sponsorships and curating content for the hackathon.",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Achievements & Extracurricular</h1>
          <p className="text-muted-foreground md:text-xl">
            A showcase of my accomplishments and involvement in activities beyond academics
          </p>
        </div>

        {/* Achievements Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">{achievement.icon}</div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{achievement.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                  <p className="pt-2 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Extracurricular Activities</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {extracurricular.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">{activity.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                      <CardDescription>{activity.organization}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{activity.period}</span>
                  </div>
                  <p className="pt-2">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>MERN Stack Development</CardTitle>
                <CardDescription>30DaysCoding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Completed a comprehensive course on MERN stack development, covering MongoDB, Express.js, React.js, and
                  Node.js.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Issued: November 2024</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Database Managment System</CardTitle>
                <CardDescription>IIT Kharagpur</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Completed a course on database management systems, covering SQL, NoSQL, and database design principles.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Issued: October 2024</p>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Volunteer Work
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Volunteer Work</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Technical Workshop Instructor</CardTitle>
                <CardDescription>Computer Society of India Students' Chapter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Conducted workshops on web development basics for junior students, helping them understand fundamental
                  concepts and build their first websites.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">2023 - Present</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Event Coordinator</CardTitle>
                <CardDescription>College Technical Fest</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Coordinated technical competitions and managed participant registrations for the annual college
                  technical festival.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">2022 - 2023</p>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  )
}

