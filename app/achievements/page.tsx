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

