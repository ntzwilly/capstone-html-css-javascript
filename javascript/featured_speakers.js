import * as data from './speakers_data.js'

function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName);
  if (className) {
    element.className = className;
  }
  if (content) {
    element.textContent = content;
  }
  if (idName) {
    element.id = idName;
  }
  return element;
}

function speakerGenerator(speaker) {
  const featuredSpeakers = elementGenerator('section', 'featured-speakers', null, null)
  const featuredSpeakerHeader = elementGenerator('h3', 'featured-speakers-header', null, null)
  featuredSpeakers.appendChild(featuredSpeakerHeader)
  const speakers = elementGenerator('div',null, null, null)
  const speaker1 = elementGenerator('div', 'speaker', null, null)
  const image = elementGenerator('img', null, null, null)
  image.src= speaker.image 
  image.alt="speaker-image"
  speaker1.appendChild(image)
  const div = elementGenerator('div', null, null, null)
  speaker1.appendChild(div)
  const speakerName = elementGenerator('h3', 'speaker-name', speaker.name, null)
  div.appendChild(speakerName);
  const line = elementGenerator('hr', 'speaker-line', null, null)
  div.appendChild(line)
  const speakerTitle = elementGenerator('p', 'speaker-title', speaker.title, null)
  const speakerDescription = elementGenerator('p', 'speaker-description', speaker.comment, null)
  div.appendChild(speakerTitle)
  div.appendChild(speakerDescription)


  speakers.appendChild(speaker1)
  featuredSpeakers.appendChild(speakers)
  console.log(featuredSpeakers)
  return featuredSpeakers;
}

const speakers = document.getElementById('speakers');


const speaker = data.default;
speaker.forEach((p) => {
  const generatedSpeaker = speakerGenerator(p);
  speakers.appendChild(generatedSpeaker);
});

