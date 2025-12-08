import FadeInWrapper from "@/components/FadeInWrapper"

const videos = [
  {
    title: "CINEMATOGRAPHY SHOWREEL 2024",
    role: "Cinematographer",
    src: "https://player.mediadelivery.net/embed/556542/023bf303-e66e-4362-a5d6-8a850f2d423e?autoplay=false&loop=false&muted=false&preload=true&responsive=true&transparent=true",
    tags: "SHOWREEL",
    description:
      "A collective look at all my work thus far, showcasing my skills in cinematography, colour grading and editing.",
    runtime: "2 MINS",
  },
  {
    title: "Grave",
    role: "Cinematographer, Colourist",
    src: "https://www.youtube.com/embed/KFHPuLGV6ZQ?si=98b_FG2sZQAwDKbd",
    tags: "SHORT FILM, WESTERN",
    description:
      "After the loss of his wife, a cowboy tries to live a life of peace and seclusion, but when old enemies come back to haunt him, he must face his past and protect his future.",
    runtime: "34 MINS",
  },
  {
    title: "Driver",
    role: "First Assistant Director",
    src: "https://www.youtube.com/embed/Km8hLijau5g?si=29kiJLVo-PN4SHAr",
    tags: "SHORT FILM, DRAMA",
    description:
      "A son is forced to live in his car after a series of bills, life choices and the loss of his job. He must find a way to survive and make a living, but struggles to make ends meet.",
    runtime: "15 MINS",
  },
  {
    title: "Make Better.",
    role: "Cinematographer, Colourist",
    src: "https://www.youtube.com/embed/RH2oEZaKEx4?si=iFo2ZoE5jofJQ6oU",
    tags: "SHORT FILM, DOCUMENTARY",
    description:
      "Rebecca Dimovski is an inspiring young photographer who uses her skill in capturing the female form to discuss the struggles that women go through simply to get a diagnosis for a lifelong chronic condition.",
    runtime: "3 MINS",
  },
  {
    title: "MyHaileybury Advert",
    role: "Camera Operator, Producer",
    src: "https://www.youtube.com/embed/CDkfzczEHbo?si=poTGqJ-Rc8W5McBl",
    tags: "SHORT FILM, ADVERT",
    description:
      "A short advert for MyHaileybury, a school management system that helps teachers, students and parents stay connected and up to date with school life.",
    runtime: "3 MINS",
  },
  {
    title: "Life is Fine",
    role: "First Assistant Camera",
    src: "https://www.youtube.com/embed/20HDBlp5_xE?si=wX9uCtfbeL_sykD3",
    tags: "SHORT FILM, DRAMA",
    description:
      "A short film about two gay lovers whos lives are thrown into chaos when one of them is diagnosed with a terminal illness. They must come to terms with the fact that their time together is limited and make the most of it.",
    runtime: "7 MINS",
  },
]

const ProjectsVideography = () => {
  return (
    <FadeInWrapper>
      <div className="Video-All">
        {videos.map((item, index) => (
          <div key={index} className="Video-Container">
            <div className="Videoplayer-Container">
              <iframe
                src={item.src}
                title={item.title}
                allow="fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <div className="Video-Outline">
              <h2>{item.title}</h2>
              <h3 className="Video-Overview">
                {item.runtime} • {item.tags} • {item.role}
              </h3>
              <div className="Video-Description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </FadeInWrapper>
  )
}

export default ProjectsVideography
