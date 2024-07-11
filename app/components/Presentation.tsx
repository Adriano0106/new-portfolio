import Image from "next/image";

const Presentation = () => {
  return (
    <section id="presentation-section" style={{ height: "auto" }} className="mx-auto my-10 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <Image
          src="/adriano_picture.jpg"
          width={250}
          height={250}
          alt="Picture of the author"
          className="profile__picture"
          style={{ borderRadius: "50%" }}
        />
        <div className="profile__info">

          <h1>Adriano Andrade da Silva</h1>
          <h3>Desenvolvedor Full Stack</h3>
          <p>28 anos</p>
          <p>Formado em Ciência da Computação</p>
          <p>Corinthiano, fã de música e cultura POP.</p>
        </div>
      </div>
    </section>
  )
}

export default Presentation;
