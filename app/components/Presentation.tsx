import Image from "next/image"

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
      style={{ height: "auto" }}
      className="scroll-pt-navbar py-4"
    >
      <div className="flex justify-center">
        <Image
          src="/adriano_new_picture.png"
          width={250}
          height={250}
          alt="Picture of the author"
          className="profile__picture"
          style={{ borderRadius: "50%" }}
        />
        <div className="profile__info">
          <h1>{info.name}</h1>
          <h3>{info.job}</h3>
          <p>{age} anos</p>
          <p>{info.degree}</p>
          <p>{info.about}</p>
        </div>
      </div>
    </section>
  )
}

export default Presentation
