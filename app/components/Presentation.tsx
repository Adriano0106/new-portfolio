import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/ui/card"

const info = {
  name: "Adriano Andrade da Silva",
  job: "Desenvolvedor Full Stack",
  birthDate: "1995-06-01",
  degree: "Bacharel em Ciência da Computação",
  about: "Corinthiano, fã de música e cultura POP.",
}

const calculateAge = (birthDate: string): number => {
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const monthDifference = today.getMonth() - birthDateObj.getMonth()

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--
  }

  return age
}

const Presentation = () => {
  const age = calculateAge(info.birthDate)

  return (
    <section
      id="presentation-section"
      className="scroll-pt-navbar py-8 flex items-center justify-center"
    >
      <Card className="w-full max-w-3xl rounded-xl shadow-lg">
        <CardHeader className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/adriano_new_picture.png"
            width={180}
            height={180}
            alt="Foto de Adriano Andrade"
            className="rounded-full border-4 border-gray-200 shadow-lg"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <CardTitle className="text-3xl font-bold text-gray-700">
              {info.name}
            </CardTitle>
            <CardDescription className="text-xl font-semibold text-gray-700">
              {info.job}
            </CardDescription>
            <div className="flex gap-4 text-gray-500 text-sm mt-2">
              <span>{age} anos</span>
              <span>•</span>
              <span>{info.degree}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mt-2 text-gray-600">{info.about}</p>
        </CardContent>
      </Card>
    </section>
  )
}

export default Presentation
