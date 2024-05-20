
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"

export function HeroSection() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <SchoolIcon className="h-6 w-6" />
          <span className="sr-only">School Attendance System</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/dashboard">
            Dashboard
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Login
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Contact Us
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Support
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Careers
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your School Attendance
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                    Our school attendance system helps you effortlessly track and manage student attendance, ensuring a
                    more efficient and organized academic environment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#">
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="400"
                src="/undraw.svg"
                width="400" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Top Rated Schools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Best Schools</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Filter through the top 5 rated colleges, schools, and universities.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <FilterIcon className="w-4 h-4 mr-2" />
                      Filter by Type
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    <DropdownMenuCheckboxItem>College</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>School</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>University</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <ListIcon className="w-4 h-4 mr-2" />
                      Sort by Rating
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    <DropdownMenuRadioGroup value="highToLow">
                      <DropdownMenuRadioItem value="highToLow">High to Low</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="lowToHigh">Low to High</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid gap-4">
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Harvard University</h3>
                      <p className="text-gray-500 dark:text-gray-400">College</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Stanford University</h3>
                      <p className="text-gray-500 dark:text-gray-400">University</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">MIT</h3>
                      <p className="text-gray-500 dark:text-gray-400">College</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Yale University</h3>
                      <p className="text-gray-500 dark:text-gray-400">University</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Princeton University</h3>
                      <p className="text-gray-500 dark:text-gray-400">University</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from our satisfied customers about their experience with our school attendance system.
                </p>
              </div>
              <div
                className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="space-y-4">
                    <blockquote className="text-lg font-semibold leading-snug">
                      The school attendance system has been a game-changer for our school. Its easy to use and has
                      saved us so much time.
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Principal, Acme High School</div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="space-y-4">
                    <blockquote className="text-lg font-semibold leading-snug">
                      I love how the attendance system integrates with our schools information system. Its a seamless
                      experience.
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Jane Smith</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">IT Manager, Acme High School</div>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white dark:bg-gray-950 p-6 shadow-sm">
                  <div className="space-y-4">
                    <blockquote className="text-lg font-semibold leading-snug">
                      The attendance system has made it so much easier for our teachers to keep track of student
                      attendance. Highly recommended!
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-avatar.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Sarah Lee</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Teacher, Acme High School</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have any questions or need assistance? Fill out the form below and our team will get back to you.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-2">
                <Label htmlFor="name">Name</Label>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function FilterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function ListIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>)
  );
}


function SchoolIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>)
  );
}


function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
